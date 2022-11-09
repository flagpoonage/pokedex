import { PokemonAPICache, useCachedResource } from '@pkdx-api/cache';
import { getAbilityDetailsUrl } from '@pkdx-api/endpoints';
import { Ability } from '@pkdx-api/models/Ability';

export const AbilityCache = new PokemonAPICache<Ability>(getAbilityDetailsUrl);

export function useCachedAbility(name: string) {
  return useCachedResource(name, AbilityCache);
}
