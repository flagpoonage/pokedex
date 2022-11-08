import { exampleFunction } from '../../src/utils/example';

describe('utils/example', () => {
  describe('exampleFunction()', () => {
    it('returns the expected object when called', () => {
      expect(exampleFunction('test', 1)).toEqual({ x: 'test', y: 1 });
    });
  });
});
