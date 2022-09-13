import { decodeBase64 } from '.';

describe('Helpers: decodeBase64', () => {
  it('can decode properly', () => {
    const result = decodeBase64('aGVsbG8=');
    expect(result).toBe('hello');
  });

  it('can decode similar to atob', () => {
    const arg = 'aGVsbG8=';

    const result = decodeBase64(arg);
    expect(result).toBe(atob(arg));
  });

  it('does not error on invalid arg, returns empty string', () => {
    // @ts-ignore
    const result = decodeBase64(9);
    expect(result).toBe('');
  });
});
