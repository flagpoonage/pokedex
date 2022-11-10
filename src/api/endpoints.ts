import { PaginationQuery, attachPaginationQuery } from './models/Pagination';

export const API_BASE_URL = `https://pokeapi.co/api/v2`;

const url = (type: string) => (name: string) =>
  `${API_BASE_URL}/${type}/${name}/`;

export function getPokemonListingUrl(query?: PaginationQuery) {
  return attachPaginationQuery(`${API_BASE_URL}/pokemon-species/`, query);
}

export const getStatDetailsUrl = url('stat');
export const getTypeDetailsUrl = url('type');
export const getPokemonDetailsUrl = url('pokemon');
export const getAbilityDetailsUrl = url('ability');
export const getItemDetailsUrl = url('item');
export const getSpeciesDetailsUrl = url('pokemon-species');
