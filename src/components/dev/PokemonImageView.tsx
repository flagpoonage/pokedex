import React from 'react';
import { usePokemonContext } from '@pkdx-components/PokemonContext';

export function PokemonImageView() {
  const pokemon = usePokemonContext();

  return (
    <div className="dev-box">
      <img
        src={`/pokemon-images/${pokemon.id}.png`}
        alt={`${pokemon.name} official artwork`}
      />
    </div>
  );
}
