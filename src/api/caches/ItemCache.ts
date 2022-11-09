import { PokemonAPICache, useCachedResource } from '@pkdx-api/cache';
import { getItemDetailsUrl } from '@pkdx-api/endpoints';
import { Item } from '@pkdx-api/models/Items/Item';

export const ItemCache = new PokemonAPICache<Item>(getItemDetailsUrl);

export function useCachedItem(name: string) {
  return useCachedResource(name, ItemCache);
}
