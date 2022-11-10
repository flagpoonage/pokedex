import React from 'react';
import { useParams } from 'react-router-dom';
import { PokemonDetailsView } from '@pkdx-components/dev/PokemonDetailsView';
import { CachedPokemonView } from '@pkdx-components/CacheViews';

export function PokemonDetailsPage() {
  const { pokemon_name } = useParams();

  if (!pokemon_name) {
    return null;
  }

  return (
    <CachedPokemonView name={pokemon_name} component={PokemonDetailsView}>
      <div>Loading pokemon page...</div>
    </CachedPokemonView>
  );
}
