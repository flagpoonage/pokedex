import {
  attachPaginationQuery,
  isPaginationResult,
} from '@pkdx-api/models/Pagination';

describe('api/models/Pagination', () => {
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
  describe('isPaginationResult()', () => {
    it('Returns true if the value is a pagination result', () => {
      expect(
        isPaginationResult({
          count: 0,
          next: null,
          previous: null,
          results: [],
        })
      ).toBe(true);
      expect(
        isPaginationResult({
          count: 1,
          next: 'next-url',
          previous: 'prev-url',
          results: [],
        })
      ).toBe(true);
    });

    it('Returns false if the value is not a pagination result', () => {
      expect(isPaginationResult(undefined)).toBe(false);
      expect(isPaginationResult(null)).toBe(false);
      expect(isPaginationResult([])).toBe(false);
      expect(isPaginationResult('string')).toBe(false);
      expect(isPaginationResult(0)).toBe(false);
      expect(isPaginationResult(1)).toBe(false);
      expect(isPaginationResult(true)).toBe(false);
      expect(isPaginationResult(false)).toBe(false);
      expect(isPaginationResult(new Date())).toBe(false);
      expect(isPaginationResult(Symbol('any'))).toBe(false);
      expect(isPaginationResult({})).toBe(false);
      expect(
        isPaginationResult({
          next: null,
          previous: null,
          results: [],
        })
      ).toBe(false);
      expect(
        isPaginationResult({
          count: 0,
          previous: null,
          results: [],
        })
      ).toBe(false);
      expect(
        isPaginationResult({
          count: 0,
          next: null,
          results: [],
        })
      ).toBe(false);
      expect(
        isPaginationResult({
          count: 0,
          next: null,
          previous: null,
        })
      ).toBe(false);
      expect(
        isPaginationResult({
          count: 0,
          next: null,
          previous: null,
          results: {},
        })
      ).toBe(false);
      expect(
        isPaginationResult({
          count: 0,
          next: null,
          previous: null,
          results: null,
        })
      ).toBe(false);
    });
  });
});
