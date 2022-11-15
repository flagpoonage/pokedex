import React from 'react';
import styles from './style/PokemonAbilitiesView.module.css';
import { usePokemonContext } from '@pkdx-components/PokemonContext';
import {
  CachedAbilityView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';
import { Ability } from '@pkdx-api/models/Pokemon/Ability';

export function PokemonAbilitiesView() {
  const pokemon = usePokemonContext();

  return (
    <div className="dev-box">
      <h2>Abilities</h2>
      {pokemon.abilities.map((a) => (
        <CachedAbilityView
          key={a.ability.name}
          name={a.ability.name}
          component={PokemonAbilityView}
        >
          <div>Loading ability...</div>
        </CachedAbilityView>
      ))}
    </div>
  );
}

export function PokemonAbilityView({
  value: ability,
}: CacheViewReceiveProps<Ability>) {
  const pokemon = usePokemonContext();
  const pokemonAbility = pokemon.abilities.find(
    (a) => a.ability.name === ability.name
  );

  const name = (ability.names.find((a) => a.language.name === 'en') ?? ability)
    .name;
  const effect =
    (
      ability.effect_entries.find((a) => a.language.name === 'en') ??
      ability.effect_entries[0]
    )?.effect ?? '-';

  return (
    <div className={styles.ability}>
      <div className={styles.nameContainer}>
        <span className={styles.name}>{name}</span>
        {pokemonAbility?.is_hidden && (
          <span className={styles.hidden}>Hidden</span>
        )}
      </div>

      <div className={styles.effect}>{effect}</div>
    </div>
  );
}
