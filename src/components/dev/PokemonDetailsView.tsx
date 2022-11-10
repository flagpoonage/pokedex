import React from 'react';
import { PokemonContextProvider } from '@pkdx-components/PokemonContext';
import { PokemonSpeciesNameView } from './PokemonSpeciesNameView';
import { Pokemon } from '@pkdx-api/models/Pokemon/Pokemon';
import {
  CachedSpeciesView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';
import { PokemonAbilitiesView } from './PokemonAbilitiesView';
import { PokemonTypesView } from './PokemenTypesView';

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
        <PokemonTypesView />
        <PokemonAbilitiesView />

        {/* <div>{JSON.stringify(pokemon, null, 2)}</div> */}
        {/* <PokemonTypesView />
        <PokemonSpeciesView /> */}
      </div>
    </PokemonContextProvider>
  );
}
