import React from 'react';
import { usePokemonContext } from '@pkdx-components/PokemonContext';
import { Type } from '@pkdx-api/models/Pokemon/Type';
import {
  CachedTypeView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';

export function PokemonTypesView() {
  const pokemon = usePokemonContext();
  return (
    <div>
      {pokemon.types.map((typeresource) => (
        <CachedTypeView
          name={typeresource.type.name}
          key={typeresource.type.name}
          component={PokemonTypeView}
        >
          <div>Loading type...</div>
        </CachedTypeView>
      ))}
    </div>
  );
}

export function PokemonTypeView({ value: type }: CacheViewReceiveProps<Type>) {
  return <div>{type.name}</div>;
}
