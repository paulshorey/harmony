import { encodeBase64 } from '.';

describe('Helpers: encodeBase64', () => {
  it('can encode properly', () => {
    const result = encodeBase64('hello');
    expect(result).toBe('aGVsbG8=');
  });

  it('can encode similar to btoa', () => {
    const arg = 'hello';

    const result = encodeBase64(arg);
    expect(result).toBe(btoa(arg));
  });

  it('does not error on invalid arg, returns empty string', () => {
    // @ts-ignore
    const result = encodeBase64(9);
    expect(result).toBe('');
  });
});
