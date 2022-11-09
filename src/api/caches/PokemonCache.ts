import { PokemonAPICache, useCachedResource } from '@pkdx-api/cache';
import { getPokemonDetailsUrl } from '@pkdx-api/endpoints';
import { Pokemon } from '@pkdx-api/models/Pokemon';

export const PokemonCache = new PokemonAPICache<Pokemon>(getPokemonDetailsUrl);

export function useCachedPokemon(name: string) {
  return useCachedResource(name, PokemonCache);
}
