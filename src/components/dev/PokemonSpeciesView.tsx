import React from 'react';
import { useCachedSpecies, useCachedType } from '@pkdx-api/caches/PokemonCache';
import { usePokemonContext } from '@pkdx-components/PokemonContext';

export function PokemonSpeciesView() {
  const pokemon = usePokemonContext();
  const cache = useCachedSpecies(pokemon.name);

  if (cache.state === 'loading') {
    return <div>Loading type</div>;
  }

  if (cache.state === 'error') {
    return <div>{`species load error: ${name}`}</div>;
  }

  const species = cache.data;

  return (
    <div>
      <pre>{JSON.stringify(species, null, 2)}</pre>
    </div>
  );
}

export function PokemonTypeView({ name }: { name: string }) {
  const cache = useCachedType(name);

  if (cache.state === 'loading') {
    return <div>Loading type</div>;
  }

  if (cache.state === 'error') {
    return <div>{`type load error: ${name}`}</div>;
  }

  return <div>{cache.data.name}</div>;
}
