import { PokemonFetchError } from '@pkdx-utils/errors';
import { useCallback, useEffect, useRef, useState } from 'react';

export class PokemonAPICache<T> {
  private _items: Map<string, T> = new Map();
  private _urlGenerator: (id: string) => string;
  private _requests: Map<string, Promise<T>> = new Map();

  constructor(urlGenerator: (id: string) => string) {
    this._urlGenerator = urlGenerator;
  }

  get(id: string): T | null {
    return this._items.get(id) ?? null;
  }

  async load(id: string): Promise<T> {
    const existing = this._items.get(id);

    if (existing) {
      return existing;
    }

    const request = this._requests.get(id);

    if (request) {
      return request;
    }

    const newRequest = this.query(id);
    this._requests.set(id, newRequest);
    return newRequest;
  }

  private async query(id: string): Promise<T> {
    try {
      const url = this._urlGenerator(id);
      const result = await fetch(url);

      if (result.status >= 400) {
        throw new PokemonFetchError(url, result);
      }

      const json = await result.json();

      this._items.set(id, json);
      this._requests.delete(id);
      return json;
    } catch (exception) {
      this._requests.delete(id);
      throw exception;
    }
  }

  clear() {
    this._items = new Map();
  }
}

type UseCachedResourceResultError = {
  state: 'error';
  error: Error;
};

type UseCachedResourceResultLoading = {
  state: 'loading';
};

type UseCachedResourceResultData<T> = {
  state: 'complete';
  data: T;
};

export type UseCachedResourceResult<T> = (
  | UseCachedResourceResultError
  | UseCachedResourceResultLoading
  | UseCachedResourceResultData<T>
) & {
  refresh: () => void;
};

export function useCachedResource<T>(
  id: string,
  cache: PokemonAPICache<T>
): UseCachedResourceResult<T> {
  const loaded_id = useRef(id);
  const [data, setData] = useState<{
    data: T | Error | null;
    loading: boolean;
  }>({
    data: cache.get(id),
    loading: false,
  });

  useEffect(() => {
    if (data.data || data.loading) {
      return;
    }

    (async () => {
      try {
        const item = await cache.load(id);
        setData({ data: item, loading: false });
      } catch (exception) {
        const ex =
          exception instanceof Error ? exception : new Error(String(exception));
        setData({ data: ex, loading: false });
      }
    })();
  }, [id, data, cache]);

  const refresh = useCallback(() => {
    setData({ data: null, loading: false });
  }, []);

  useEffect(() => {
    if (id !== loaded_id.current) {
      loaded_id.current = id;
      const cached = cache.get(id);
      if (cached) {
        setData({ data: cached, loading: false });
      } else {
        refresh();
      }
    }
  }, [id, refresh, cache]);

  if (!data.data) {
    return {
      state: 'loading',
      refresh,
    };
  }

  if (data.data instanceof Error) {
    return {
      state: 'error',
      error: data.data,
      refresh,
    };
  }

  return {
    state: 'complete',
    data: data.data,
    refresh,
  };
}
