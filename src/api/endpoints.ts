import { PaginationQuery, attachPaginationQuery } from './models/Pagination';

export const API_BASE_URL = `https://pokeapi.co/api/v2`;

export function getPokemonListingUrl(query?: PaginationQuery) {
  return attachPaginationQuery(`${API_BASE_URL}/pokemon/`, query);
}

export function getPokemonDetailsUrl(idOrName: string | number) {
  return `${API_BASE_URL}/pokemon/${idOrName}/`;
}

export function getAbilityDetailsUrl(name: string) {
  return `${API_BASE_URL}/ability/${name}/`;
}
