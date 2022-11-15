import { PokemonSpecies } from '@pkdx-api/models/Pokemon/PokemonSpecies';
import { getEnglishName } from '@pkdx-api/models/Utilities';
import { CacheViewReceiveProps } from '@pkdx-components/CacheViews';
import React from 'react';

export function PokemonSpeciesNameView({
  value: species,
}: CacheViewReceiveProps<PokemonSpecies>) {
  return <h1>{getEnglishName(species)}</h1>;
}
