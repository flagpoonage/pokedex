export interface PaginationQuery {
  limit?: number;
  offset?: number;
}

/**
 * Returns a new URL with the pagination parameters attached in the query string.
 * @param url The base URL
 * @param query The pagination query parameters
 * @returns A modified URL with pagination parameters attached
 */
export function attachPaginationQuery(url: string, query?: PaginationQuery) {
  if (!query || (!query.offset && !query.limit)) {
    return url;
  }

  const params = [];

  if (query.offset) {
    params.push(`offset=${query.offset}`);
  }

  if (query.limit) {
    params.push(`limit=${query.limit}`);
  }

  return `${url}?${params.join('&')}`;
}

export interface PaginationResult<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

/**
 * Returns a type assertion boolean for whether the provided value is
 * a type of {@link PaginationResult}
 * @param value Any value
 * @returns A type asserting boolean
 */
export function isPaginationResult(
  value: unknown
): value is PaginationResult<unknown> {
  if (!value || Array.isArray(value) || typeof value !== 'object') {
    return false;
  }

  const v = value as PaginationResult<unknown>;

  return (
    typeof v.count === 'number' &&
    (v.next === null || typeof v.next === 'string') &&
    (v.previous === null || typeof v.previous === 'string') &&
    Array.isArray(v.results)
  );
}

export interface PokemonListing {
  name: string;
  url: string;
}

export interface PokemonListingWithID extends PokemonListing {
  id: number;
}

/**
 * Extracts the pokemon ID from the listing URL if available. When not
 * available, the ID will be returned as `0`.
 * @param listing The pokemon listing
 * @returns A new copy of the listing with a numeric ID attached
 */
export function extractPokemonListingWithID(
  listing: PokemonListing
): PokemonListingWithID {
  const id = Number(listing.url.match(/^.+\/(.+)\/$/)?.[1]);

  return {
    ...listing,
    id: isNaN(id) ? 0 : id,
  };
}

/**
 * Returns a type assertion boolean for whether the provided value is
 * a type of {@link PokemonListing}
 * @param value Any value
 * @returns A type asserting boolean
 */
export function isPokemonListing(value: unknown): value is PokemonListing {
  if (!value || Array.isArray(value) || typeof value !== 'object') {
    return false;
  }

  const v = value as PokemonListing;

  return typeof v.name === 'string' && typeof v.url === 'string';
}
