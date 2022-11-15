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
import { PokemonImageView } from './PokemonImageView';
import { PokemonBasicAttributesView } from './PokemonBasicAttributesView';
import { PokemonGrowthRateView } from './PokemonGrowthRateView';
import { PokemonMovesView } from './PokemonMovesView';
import { PokemonTitle } from './PokemonTitle';

export function PokemonDetailsView({
  value: pokemon,
}: CacheViewReceiveProps<Pokemon>) {
  return (
    <PokemonContextProvider current={pokemon}>
      <div>
        <CachedSpeciesView
          name={pokemon.species.name}
          component={PokemonTitle}
        />
        <div className="dev-box">
          <CachedSpeciesView
            name={pokemon.species.name}
            component={PokemonSpeciesNameView}
          >
            <h1>Loading...</h1>
          </CachedSpeciesView>
        </div>
        <PokemonImageView />
        <PokemonTypesView />
        <PokemonBasicAttributesView />
        <PokemonAbilitiesView />
        <PokemonMovesView />
        <CachedSpeciesView
          name={pokemon.species.name}
          component={PokemonGrowthRateView}
        >
          <div>Loading species data</div>
        </CachedSpeciesView>
      </div>
    </PokemonContextProvider>
  );
}
