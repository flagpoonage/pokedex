import { Pokemon } from '@pkdx-api/models/Pokemon/Pokemon';
import React, { createContext, useContext } from 'react';

export const PokemonContext = createContext<Pokemon | null>(null);

interface Props {
  current: Pokemon;
}

export function PokemonContextProvider({
  current,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <PokemonContext.Provider value={current}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemonContext() {
  const pokemon = useContext(PokemonContext);

  if (!pokemon) {
    throw new Error(
      `usePokemonContext can only be used within a <PokemonContextProvider />`
    );
  }

  return pokemon;
}
