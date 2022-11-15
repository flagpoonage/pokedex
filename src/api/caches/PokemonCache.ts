import { PokemonAPICache, useCachedResource } from '@pkdx-api/cache';
import {
  getAbilityDetailsUrl,
  getGrowthRateDetailsUrl,
  getPokemonDetailsUrl,
  getSpeciesDetailsUrl,
  getTypeDetailsUrl,
} from '@pkdx-api/endpoints';
import { Ability } from '@pkdx-api/models/Pokemon/Ability';
import { GrowthRate } from '@pkdx-api/models/Pokemon/GrowthRate';
import { Pokemon } from '@pkdx-api/models/Pokemon/Pokemon';
import { PokemonSpecies } from '@pkdx-api/models/Pokemon/PokemonSpecies';
import { Type } from '@pkdx-api/models/Pokemon/Type';

export const AbilityCache = new PokemonAPICache<Ability>(getAbilityDetailsUrl);
export const PokemonCache = new PokemonAPICache<Pokemon>(getPokemonDetailsUrl);
export const TypeCache = new PokemonAPICache<Type>(getTypeDetailsUrl);
export const SpeciesCache = new PokemonAPICache<PokemonSpecies>(
  getSpeciesDetailsUrl
);

export const GrowthRateCache = new PokemonAPICache<GrowthRate>(
  getGrowthRateDetailsUrl
);

export function useCachedAbility(name: string) {
  return useCachedResource(name, AbilityCache);
}

export function useCachedPokemon(name: string) {
  return useCachedResource(name, PokemonCache);
}

export function useCachedType(name: string) {
  return useCachedResource(name, TypeCache);
}

export function useCachedSpecies(name: string) {
  return useCachedResource(name, SpeciesCache);
}

export function useCachedGrowthRate(name: string) {
  return useCachedResource(name, GrowthRateCache);
}
