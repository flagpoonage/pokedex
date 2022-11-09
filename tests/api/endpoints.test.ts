import {
  getPokemonDetailsUrl,
  getPokemonListingUrl,
} from '@pkdx-api/endpoints';

describe('api/endpoints', () => {
  describe('getPokemonListingUrl()', () => {
    it('Returns the base listing URL with no parameters', () => {
      expect(getPokemonListingUrl()).toBe('https://pokeapi.co/api/v2/pokemon/');
      expect(getPokemonListingUrl({})).toBe(
        'https://pokeapi.co/api/v2/pokemon/'
      );
    });
    it('Returns the base listing URL with offset and limit parameters', () => {
      expect(getPokemonListingUrl({ offset: 1 })).toBe(
        'https://pokeapi.co/api/v2/pokemon/?offset=1'
      );
      expect(getPokemonListingUrl({ limit: 1 })).toBe(
        'https://pokeapi.co/api/v2/pokemon/?limit=1'
      );
      expect(getPokemonListingUrl({ offset: 1, limit: 1 })).toBe(
        'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1'
      );
    });
  });

  describe('getPokemonDetailsUrl()', () => {
    it('Returns the pokemon details URL with the id or name provided', () => {
      expect(getPokemonDetailsUrl(123)).toBe(
        'https://pokeapi.co/api/v2/pokemon/123/'
      );
      expect(getPokemonDetailsUrl('squirtle')).toBe(
        'https://pokeapi.co/api/v2/pokemon/squirtle/'
      );
    });
  });
});
