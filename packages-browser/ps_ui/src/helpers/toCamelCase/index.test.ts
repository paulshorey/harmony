import { toCamelCase } from '.';

describe('Tests if the function convert string to camelCase', () => {
  it('checks if the function convert string to camelCase', () => {
    const phoneString = 'some string not in camel case';
    expect(toCamelCase(phoneString)).toBe('someStringNotInCamelCase');
  });
});
