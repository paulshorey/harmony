import { isObjectDeepEqual } from '.';

const a = {
  id: 1,
  name: 'A',
};

const a2 = {
  id: 1,
  name: 'A',
};

const a_unorganized = {
  id: 1,
  name: 'A',
};

const b = {
  id: 2,
  name: 'B',
};

describe('Helper: isObjectDeepEqual', () => {
  it('Returns false for two different objects', () => {
    expect(isObjectDeepEqual(a, b)).toBe(false);
  });

  it('Returns true for two objects with same key location', () => {
    expect(isObjectDeepEqual(a, a2)).toBe(true);
  });

  it('Returns true for two objects with different key location', () => {
    expect(isObjectDeepEqual(a, a_unorganized)).toBe(true);
  });
});
