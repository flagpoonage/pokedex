import { UseCachedResourceResult } from '@pkdx-api/cache';
import {
  useCachedPokemon,
  useCachedSpecies,
  useCachedType,
} from '@pkdx-api/caches/PokemonCache';
import React, { ReactElement } from 'react';

export interface CacheViewProps<T> {
  cache: UseCachedResourceResult<T>;
  errorComponent?: (v: Error) => React.ReactElement;
  render: (v: T) => React.ReactElement;
}

export function CacheView<T>({
  cache,
  render,
  errorComponent = defaultError,
  children,
}: React.PropsWithChildren<CacheViewProps<T>>) {
  if (cache.state === 'loading') {
    return <>{children}</>;
  }

  if (cache.state === 'error') {
    return errorComponent(cache.error);
  }

  return render(cache.data);
}

const defaultError = (e: Error) => <DefaultCacheError error={e} />;
function DefaultCacheError({ error }: { error: Error }) {
  return <div>Error: {error.message}</div>;
}

export interface CacheViewReceiveProps<T> {
  value: T;
}

interface GeneratedCacheViewProps<T>
  extends Pick<CacheViewProps<T>, 'errorComponent'> {
  name: string;
  component: (props: CacheViewReceiveProps<T>) => ReactElement;
}

export function createCacheView<T>(
  useCacheHook: (v: string) => UseCachedResourceResult<T>
) {
  return function GeneratedCacheView({
    name,
    component,
    children,
    errorComponent,
  }: React.PropsWithChildren<GeneratedCacheViewProps<T>>): ReactElement {
    const cache = useCacheHook(name);
    const RenderComponent = component;
    return (
      <CacheView
        cache={cache}
        errorComponent={errorComponent}
        render={(v) => <RenderComponent value={v} />}
      >
        {children}
      </CacheView>
    );
  };
}

export const CachedPokemonView = createCacheView(useCachedPokemon);
export const CachedSpeciesView = createCacheView(useCachedSpecies);
export const CachedTypeView = createCacheView(useCachedType);
