import { PokemonAPICache, useCachedResource } from '@pkdx-api/cache';
import { getMoveDetailsUrl } from '@pkdx-api/endpoints';
import { Move } from '@pkdx-api/models/Moves/Move';

export const MoveCache = new PokemonAPICache<Move>(getMoveDetailsUrl);

export function useCachedMove(name: string) {
  return useCachedResource(name, MoveCache);
}
