import { isJson } from '.';

describe('Tests if string is JSON', () => {
  it('checks if valid JSON is true', () => {
    const jsonString = '{"isJson": true, "Spiral": "amazing"}';
    expect(isJson(jsonString)).toBe(true);
  });

  it('checks if invalid JSON is false', () => {
    const notJsonString = 'some random string';
    expect(isJson(notJsonString)).toBe(false);
  });
});
