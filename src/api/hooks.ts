import { UnexpectedDataError } from '@pkdx-utils/errors';
import { useCallback, useEffect, useState } from 'react';
import { getPokemonListingUrl } from './endpoints';
import { PaginationResult, isPaginationResult } from './models/Pagination';
import {
  NamedAPIResourceWithID,
  NamedAPIResource,
  isNamedAPIResource,
  extractNamedAPIResourceWithID,
} from './models/Utilities';

type LoadingStatus = 'none' | 'loading' | 'complete' | 'error';

interface LoadingState {
  error: Error | null;
  current_request: AbortController | null;
  status: LoadingStatus;
  pageSize: number;
  page: number;
}

export function usePokemonListing(pageSize: number) {
  const [data, setData] =
    useState<PaginationResult<NamedAPIResourceWithID> | null>(null);

  const [currentState, setCurrentState] = useState<LoadingState>({
    error: null,
    current_request: null,
    status: 'none',
    pageSize: 20,
    page: 1,
  });

  useEffect(() => {
    if (pageSize === currentState.pageSize) {
      return;
    }

    setCurrentState((state) => ({
      ...state,
      status: 'none',
      pageSize: pageSize,
      page: 1,
      error: null,
    }));
  }, [pageSize, currentState]);

  useEffect(() => {
    if (currentState.status !== 'none') {
      return;
    }

    if (currentState.current_request) {
      currentState.current_request.abort();
    }

    (async () => {
      const controller = new AbortController();
      const offset = (currentState.page - 1) * currentState.pageSize;
      const next_url = getPokemonListingUrl({
        limit: currentState.pageSize,
        offset,
      });

      try {
        setCurrentState((state) => ({
          ...state,
          current_request: controller,
          status: 'loading',
        }));

        const result = await fetch(next_url, {
          signal: controller.signal,
        });
        const json = await result.json();

        if (!isPaginationResult(json)) {
          throw new UnexpectedDataError(
            json,
            'Unexpected data, expecting a PaginationResult'
          );
        }

        const validPokemon = json.results.filter((a): a is NamedAPIResource => {
          const valid = isNamedAPIResource(a);
          if (!valid) {
            console.warn(`Hiding displaying invalid pokemon listing`, a);
          }

          return valid;
        });

        json.results = validPokemon.map((a) =>
          extractNamedAPIResourceWithID(a)
        );
        setData(json as PaginationResult<NamedAPIResourceWithID>);
        setCurrentState((state) => ({
          ...state,

          current_request: null,
          status: 'complete',
        }));
      } catch (exception) {
        if (exception instanceof DOMException && exception.ABORT_ERR) {
          console.log('Request aborted');
          return;
        }

        const ex =
          exception instanceof Error ? exception : new Error(String(exception));
        setCurrentState((state) => ({
          ...state,
          current_request: null,
          status: 'error',
          error: ex,
        }));
      }
    })();
  }, [currentState]);

  const goToPage = useCallback(
    (page: number | ((current: number) => number)) => {
      setCurrentState((state) => ({
        ...state,
        status: 'none',
        error: null,
        page: typeof page === 'number' ? page : page(state.page),
      }));
    },
    []
  );

  const nextPage = useCallback(() => {
    goToPage((current) => current + 1);
  }, [goToPage]);

  const prevPage = useCallback(() => {
    goToPage((current) => current - 1);
  }, [goToPage]);

  return {
    nextPage,
    prevPage,
    goToPage,
    pageCount: data?.count
      ? Math.ceil(data.count / currentState.pageSize)
      : null,
    data: data?.results ?? [],
    ...currentState,
    offset: (currentState.page - 1) * currentState.pageSize,
  };
}
