import { buildTestId } from '.';

describe('Testing Helper - buildTestId', () => {
  it('works', () => {
    expect(buildTestId('option', 'hello-dude')).toBe('option-hello-dude');
    expect(buildTestId('option', 'Hello Dude')).toBe('option-hello-dude');
  });
});
