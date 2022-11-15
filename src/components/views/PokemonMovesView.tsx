import React from 'react';
import styles from './style/PokemonMovesView.module.css';
import { usePokemonContext } from '@pkdx-components/PokemonContext';
import {
  CachedMoveView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';
import { Move } from '@pkdx-api/models/Moves/Move';
import { getEnglishName } from '@pkdx-api/models/Utilities';
import { Scale } from '@pkdx-components/elements/Scale';

export function PokemonMovesView() {
  const pokemon = usePokemonContext();

  return (
    <div className="dev-box">
      <h2>Moves</h2>
      {pokemon.moves.map((a) => (
        <CachedMoveView
          key={a.move.name}
          name={a.move.name}
          component={PokemonMoveView}
        >
          <div>Loading move...</div>
        </CachedMoveView>
      ))}
    </div>
  );
}

export function PokemonMoveView({ value: move }: CacheViewReceiveProps<Move>) {
  const name = getEnglishName(move) ?? move.name;

  const effect =
    (
      move.effect_entries.find((a) => a.language.name === 'en') ??
      move.effect_entries[0]
    )?.effect ?? '-';

  return (
    <div className={styles.move}>
      <div className={styles.nameContainer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.damageClass}>{move.damage_class.name}</span>
      </div>
      <div className={styles.moveStats}>
        <div className={styles.power}>
          <span>Power: {move.power === 0 ? 'N/A' : move.power}</span>
        </div>
        <div className={styles.pp}>
          <span>PP: {move.pp}</span>
        </div>
        <div className={styles.accuracy}>
          <span>Accuracy {move.accuracy === 0 ? 'N/A' : move.accuracy}</span>
          {move.accuracy !== 0 && (
            <Scale min={0} max={100} value={move.accuracy} />
          )}
        </div>
      </div>

      <div className={styles.effect}>{effect}</div>
    </div>
  );
}
