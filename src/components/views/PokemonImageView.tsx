import React from 'react';
import styles from './style/PokemonImageView.module.css';
import { usePokemonContext } from '@pkdx-components/PokemonContext';

export function PokemonImageView() {
  const pokemon = usePokemonContext();

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`/pokemon-images/${pokemon.id}.png`}
        alt={`${pokemon.name} official artwork`}
      />
    </div>
  );
}
