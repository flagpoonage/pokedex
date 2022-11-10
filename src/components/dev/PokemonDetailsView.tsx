import React from 'react';
import { PokemonTypesView } from './PokemenTypesView';
import { PokemonContextProvider } from '@pkdx-components/PokemonContext';
import { PokemonSpeciesView } from './PokemonSpeciesView';
import { PokemonSpeciesNameView } from './PokemonSpeciesNameView';
import { Pokemon } from '@pkdx-api/models/Pokemon/Pokemon';
import {
  CachedSpeciesView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';

export function PokemonDetailsView({
  value: pokemon,
}: CacheViewReceiveProps<Pokemon>) {
  return (
    <PokemonContextProvider current={pokemon}>
      <div>
        <CachedSpeciesView
          name={pokemon.species.name}
          component={PokemonSpeciesNameView}
        >
          <div>Loading species name</div>
        </CachedSpeciesView>

        <div>{JSON.stringify(pokemon, null, 2)}</div>
        <PokemonTypesView />
        <PokemonSpeciesView />
      </div>
    </PokemonContextProvider>
  );
}
