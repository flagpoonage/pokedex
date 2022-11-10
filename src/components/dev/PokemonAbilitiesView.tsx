import React from 'react';
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
  const en_name = ability.names.find((a) => a.language.name === 'en');
  const name = en_name?.name ?? ability.name;
  return (
    <div>
      <span>{name}</span>
      <div>{ability.flavor_text_entries[0].flavor_text}</div>
    </div>
  );
}
