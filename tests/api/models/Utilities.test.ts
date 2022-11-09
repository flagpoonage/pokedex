import {
  extractNamedAPIResourceWithID,
  isNamedAPIResource,
} from '@pkdx-api/models/Utilities';

describe('extractNamedAPIResourceWithID()', () => {
  it('Returns the named api resource with its extracted ID if its valid', () => {
    expect(
      extractNamedAPIResourceWithID({
        name: 'test',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
      })
    ).toEqual({
      name: 'test',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
      id: 25,
    });
  });

  it('Returns the named api resource with an ID of 0 if the listing is invalid', () => {
    expect(
      extractNamedAPIResourceWithID({
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

describe('isNamedAPIResource()', () => {
  it('Returns true if the value is a named api resource listing', () => {
    expect(
      isNamedAPIResource({
        name: 'correct-name-type',
        url: 'correct-url-type',
      })
    ).toBe(true);
  });

  it('Returns false if the value is not a named api resource listing', () => {
    expect(isNamedAPIResource(undefined)).toBe(false);
    expect(isNamedAPIResource(null)).toBe(false);
    expect(isNamedAPIResource([])).toBe(false);
    expect(isNamedAPIResource('string')).toBe(false);
    expect(isNamedAPIResource(0)).toBe(false);
    expect(isNamedAPIResource(1)).toBe(false);
    expect(isNamedAPIResource(true)).toBe(false);
    expect(isNamedAPIResource(false)).toBe(false);
    expect(isNamedAPIResource(new Date())).toBe(false);
    expect(isNamedAPIResource(Symbol('any'))).toBe(false);
    expect(isNamedAPIResource({})).toBe(false);
    expect(
      isNamedAPIResource({
        name: 'name-but-no-url',
      })
    ).toBe(false);
    expect(
      isNamedAPIResource({
        url: 'url-but-no-name',
      })
    ).toBe(false);
    expect(
      isNamedAPIResource({
        name: 1,
        url: 'incorrect-name-type',
      })
    ).toBe(false);
    expect(
      isNamedAPIResource({
        name: 'incorrect-url-type',
        url: 1,
      })
    ).toBe(false);
  });
});
