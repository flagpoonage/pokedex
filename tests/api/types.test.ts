import {
  attachPaginationQuery,
  extractPokemonListingWithID,
  isPokemonListing,
} from '@pkdx-api/types';

describe('api/types', () => {
  describe('attachPaginationQuery', () => {
    it('Returns the URL with both offset and limit attached', () => {
      expect(
        attachPaginationQuery('https://test.com/', { offset: 1, limit: 1 })
      ).toBe('https://test.com/?offset=1&limit=1');
    });

    it('Returns only the offset if limit is unspecified or zero', () => {
      expect(
        attachPaginationQuery('https://test.com/', { offset: 1, limit: 0 })
      ).toBe('https://test.com/?offset=1');
      expect(attachPaginationQuery('https://test.com/', { offset: 1 })).toBe(
        'https://test.com/?offset=1'
      );
    });

    it('Returns only the limit if offset is unspecified or zero', () => {
      expect(
        attachPaginationQuery('https://test.com/', { offset: 0, limit: 1 })
      ).toBe('https://test.com/?limit=1');
      expect(attachPaginationQuery('https://test.com/', { limit: 1 })).toBe(
        'https://test.com/?limit=1'
      );
    });

    it('Returns the input URL if neither limit or offset are specified, or are zero', () => {
      expect(
        attachPaginationQuery('https://test.com/', { offset: 0, limit: 0 })
      ).toBe('https://test.com/');
      expect(attachPaginationQuery('https://test.com/', { limit: 0 })).toBe(
        'https://test.com/'
      );
      expect(attachPaginationQuery('https://test.com/', { offset: 0 })).toBe(
        'https://test.com/'
      );
      expect(attachPaginationQuery('https://test.com/', {})).toBe(
        'https://test.com/'
      );
      expect(attachPaginationQuery('https://test.com/')).toBe(
        'https://test.com/'
      );
    });
  });
  describe('extractPokemonListingWithID()', () => {
    it('Returns the pokemen listing with its extracted ID if its valid', () => {
      expect(
        extractPokemonListingWithID({
          name: 'test',
          url: 'https://pokeapi.co/api/v2/pokemon/25/',
        })
      ).toEqual({
        name: 'test',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
        id: 25,
      });
    });

    it('Returns the pokemen with an ID of 0 if the listing is invalid', () => {
      expect(
        extractPokemonListingWithID({
          name: 'test',
          url: 'https://pokeapi.co/api/v2/pokemon/brokenid/',
        })
      ).toEqual({
        name: 'test',
        url: 'https://pokeapi.co/api/v2/pokemon/brokenid/',
        id: 0,
      });
    });
  });

  describe('isPokemonListing()', () => {
    it('Returns true if the value is a pokemon listing', () => {
      expect(
        isPokemonListing({
          name: 'correct-name-type',
          url: 'correct-url-type',
        })
      ).toBe(true);
    });

    it('Returns false if the value is not a pokemon listing', () => {
      expect(isPokemonListing(undefined)).toBe(false);
      expect(isPokemonListing(null)).toBe(false);
      expect(isPokemonListing([])).toBe(false);
      expect(isPokemonListing('string')).toBe(false);
      expect(isPokemonListing(0)).toBe(false);
      expect(isPokemonListing(1)).toBe(false);
      expect(isPokemonListing(true)).toBe(false);
      expect(isPokemonListing(false)).toBe(false);
      expect(isPokemonListing(new Date())).toBe(false);
      expect(isPokemonListing(Symbol('any'))).toBe(false);
      expect(isPokemonListing({})).toBe(false);
      expect(
        isPokemonListing({
          name: 'name-but-no-url',
        })
      ).toBe(false);
      expect(
        isPokemonListing({
          url: 'url-but-no-name',
        })
      ).toBe(false);
      expect(
        isPokemonListing({
          name: 1,
          url: 'incorrect-name-type',
        })
      ).toBe(false);
      expect(
        isPokemonListing({
          name: 'incorrect-url-type',
          url: 1,
        })
      ).toBe(false);
    });
  });
});
