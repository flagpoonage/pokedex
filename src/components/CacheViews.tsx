import { UseCachedResourceResult } from '@pkdx-api/cache';
import { useCachedMove } from '@pkdx-api/caches/MoveCache';
import {
  useCachedAbility,
  useCachedGrowthRate,
  useCachedPokemon,
  useCachedSpecies,
  useCachedType,
} from '@pkdx-api/caches/PokemonCache';
import { PokemonFetchError } from '@pkdx-utils/errors';
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
  if (error instanceof PokemonFetchError) {
    return <div>{error.formattedErrorMessage}</div>;
  }
  return <div>Error: {error.message}</div>;
}

export interface CacheViewReceiveProps<T> {
  value: T;
}

interface GeneratedCacheViewProps<T> {
  name: string;
  fallbackToChildren?: boolean;
  component: (props: CacheViewReceiveProps<T>) => ReactElement | null;
  errorComponent?: (props: { error: Error }) => ReactElement | null;
}

export function createCacheView<T>(
  useCacheHook: (v: string) => UseCachedResourceResult<T>
) {
  return function GeneratedCacheView({
    name,
    component,
    children,
    fallbackToChildren,
    errorComponent,
  }: React.PropsWithChildren<GeneratedCacheViewProps<T>>): ReactElement {
    const cache = useCacheHook(name);
    const RenderComponent = component;
    const ErrorComponent = errorComponent;
    return (
      <CacheView
        cache={cache}
        errorComponent={
          fallbackToChildren
            ? () => <>{children}</>
            : ErrorComponent
            ? (v) => <ErrorComponent error={v} />
            : undefined
        }
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
export const CachedAbilityView = createCacheView(useCachedAbility);
export const CachedGrowthRateView = createCacheView(useCachedGrowthRate);
export const CachedMoveView = createCacheView(useCachedMove);
