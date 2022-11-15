import React, { useEffect } from 'react';
import styles from './style/PokemonPage.module.css';
import { useParams } from 'react-router-dom';
import { PokemonDetailsView } from '@pkdx-components/views/PokemonDetailsView';
import { CachedPokemonView } from '@pkdx-components/CacheViews';
import { useCachedPokemon } from '@pkdx-api/caches/PokemonCache';
import { PokemonFetchError } from '@pkdx-utils/errors';

export function PokemonDetailsPage() {
  const { pokemon_name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pokemon_name) {
    return null;
  }

  return (
    <CachedPokemonView
      name={pokemon_name}
      errorComponent={PokemonDetailsError}
      component={PokemonDetailsView}
    >
      <div>Loading pokemon page...</div>
    </CachedPokemonView>
  );
}

export function PokemonDetailsError({ error }: { error: Error }) {
  const { pokemon_name } = useParams();

  if (!pokemon_name) {
    throw new Error(
      'The PokemonDetailsError should only be used in the PokemonDetailsPage'
    );
  }

  const { refresh } = useCachedPokemon(pokemon_name);

  return (
    <div className={styles.error}>
      {error instanceof PokemonFetchError
        ? error.formattedErrorMessage
        : error.message}
      <div>
        <button onClick={refresh}>Retry</button>
      </div>
    </div>
  );
}
