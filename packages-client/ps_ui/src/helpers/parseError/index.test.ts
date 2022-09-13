import { parseError } from '.';

describe('Tests if is dev environment', () => {
  it('takes first json from array and parse it', () => {
    const errorToParse =
      '[{"Error": "Some crazy error"}, {"Warning": "Some not so crazy warning"}]';

    const parsedError = parseError(errorToParse);

    expect(parsedError).toStrictEqual({ Error: 'Some crazy error' });
  });

  it('not parsing and returns original error', () => {
    const errorToParse = '{"Warning": "Some not so crazy warning"}';

    const notParsedError = parseError(errorToParse);

    expect(notParsedError).toBe('{"Warning": "Some not so crazy warning"}');
    expect(notParsedError).not.toStrictEqual({
      Warning: 'Some not so crazy warning',
    });
  });
});
