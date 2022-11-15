import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLImageElement> {
  pokemonId: number;
}

export function Sprite({ pokemonId }: Props) {
  return (
    <img
      width="50"
      height="50"
      alt="?"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
    />
  );
}
