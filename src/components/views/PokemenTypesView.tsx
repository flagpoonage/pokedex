import React from 'react';
import styles from './style/PokemonTypesView.module.css';
import { usePokemonContext } from '@pkdx-components/PokemonContext';
import { Type } from '@pkdx-api/models/Pokemon/Type';
import {
  CachedTypeView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';
import { getEnglishName } from '@pkdx-api/models/Utilities';

export function PokemonTypesView() {
  const pokemon = usePokemonContext();
  return (
    <div className="dev-box">
      <h2>Types</h2>
      <div className={styles.typeList}>
        {pokemon.types.map((typeresource) => (
          <CachedTypeView
            name={typeresource.type.name}
            key={typeresource.type.name}
            component={PokemonTypeView}
          >
            <div>Loading type...</div>
          </CachedTypeView>
        ))}
      </div>
    </div>
  );
}

export function PokemonTypeView({ value: type }: CacheViewReceiveProps<Type>) {
  return (
    <div className={`${styles.type} pokemon-type`} data-type={type.name}>
      {getEnglishName(type)}
    </div>
  );
}
