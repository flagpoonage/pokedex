import React from 'react';
import {
  CachedGrowthRateView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';
import { GrowthRate } from '@pkdx-api/models/Pokemon/GrowthRate';
import { PokemonSpecies } from '@pkdx-api/models/Pokemon/PokemonSpecies';

export function PokemonGrowthRateView({
  value: species,
}: CacheViewReceiveProps<PokemonSpecies>) {
  return (
    <div className="dev-box">
      <h2>Growth Rate</h2>
      <CachedGrowthRateView
        name={species.growth_rate.name}
        component={PokemonGrowthRateDetails}
      >
        <div>Loading growth rate</div>
      </CachedGrowthRateView>
    </div>
  );
}

export function PokemonGrowthRateDetails({
  value: growthRate,
}: CacheViewReceiveProps<GrowthRate>) {
  return (
    <div>
      <div>
        {growthRate.descriptions.find((a) => a.language.name === 'en')
          ?.description ?? growthRate.name}
      </div>
      <table>
        <thead>
          <tr>
            <th>Experience</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {growthRate.levels.map((v) => (
            <tr key={v.level}>
              <td>{v.experience}</td>
              <td>{v.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
