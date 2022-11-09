import { PokemonAPICache, useCachedResource } from '@pkdx-api/cache';
import {
  getAbilityDetailsUrl,
  getPokemonDetailsUrl,
  getTypeDetailsUrl,
} from '@pkdx-api/endpoints';
import { Ability } from '@pkdx-api/models/Pokemon/Ability';
import { Pokemon } from '@pkdx-api/models/Pokemon/Pokemon';
import { Type } from '@pkdx-api/models/Pokemon/Type';

export const AbilityCache = new PokemonAPICache<Ability>(getAbilityDetailsUrl);
export const PokemonCache = new PokemonAPICache<Pokemon>(getPokemonDetailsUrl);
export const TypeCache = new PokemonAPICache<Type>(getTypeDetailsUrl);

export function useCachedAbility(name: string) {
  return useCachedResource(name, AbilityCache);
}

export function useCachedPokemon(name: string) {
  return useCachedResource(name, PokemonCache);
}

export function useCachedType(name: string) {
  return useCachedResource(name, TypeCache);
}
