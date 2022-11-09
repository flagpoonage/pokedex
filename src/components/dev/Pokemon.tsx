import React from 'react';
import { useCachedPokemon } from '@pkdx-api/caches/PokemonCache';
import { useParams } from 'react-router-dom';
import { PokemonTypesView } from './PokemenTypes';

export function PokemonView() {
  const { pokemon_name } = useParams();
  const r = useCachedPokemon(pokemon_name ?? '1');

  if (!pokemon_name) {
    return null;
  }

  if (r.state === 'loading') {
    return <div>Loading...</div>;
  }

  if (r.state === 'error') {
    return <div>{r.error.message}</div>;
  }

  return (
    <div>
      <h1>{r.data.name}</h1>
      <PokemonTypesView types={r.data.types.map((a) => a.type)} />
    </div>
  );
}
