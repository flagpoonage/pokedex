import React from 'react';
import { usePokemonContext } from '@pkdx-components/PokemonContext';
import { formatNumber } from '@pkdx-utils/number-format';
import {
  CachedSpeciesView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';
import { PokemonSpecies } from '@pkdx-api/models/Pokemon/PokemonSpecies';
import { Scale } from '@pkdx-components/elements/Scale';

export function PokemonBasicAttributesView() {
  const pokemon = usePokemonContext();

  return (
    <div className="dev-box">
      <h2>Basic Attributes</h2>
      <div>{`Height: ${formatNumber(pokemon.height / 10, [0, 2])}m`}</div>
      <div>{`Weight: ${formatNumber(pokemon.weight / 10, [0, 2])}kg`}</div>
      <div>{`Base Experience: ${pokemon.base_experience}`}</div>
      <CachedSpeciesView
        name={pokemon.species.name}
        component={PokemonSpeciesBasicAttributesView}
      >
        <div>Loading species attributes...</div>
      </CachedSpeciesView>
    </div>
  );
}

export function PokemonSpeciesBasicAttributesView({
  value: species,
}: CacheViewReceiveProps<PokemonSpecies>) {
  species.gender_rate;
  return (
    <>
      <div>
        <div>Chance of being female ({species.gender_rate})</div>
        <Scale min={0} max={8} value={species.gender_rate} />
      </div>
      <div>
        <div>Ease of capture ({species.capture_rate})</div>
        <Scale min={0} max={255} value={species.capture_rate} />
      </div>
      <div>
        <div>Happiness when caught ({species.base_happiness})</div>
        <Scale min={0} max={255} value={species.base_happiness} />
      </div>
    </>
  );
}
