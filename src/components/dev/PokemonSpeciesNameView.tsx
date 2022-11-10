import { PokemonSpecies } from '@pkdx-api/models/Pokemon/PokemonSpecies';
import { CacheViewReceiveProps } from '@pkdx-components/CacheViews';
import React from 'react';

export function PokemonSpeciesNameView({
  value: species,
}: CacheViewReceiveProps<PokemonSpecies>) {
  // Could use a global language context here.
  const en = species.names.find((a) => a.language.name === 'en');
  const en_name = en?.name ?? species.name;
  return (
    <div className="dev-box">
      <h1>{en_name}</h1>
    </div>
  );
}
