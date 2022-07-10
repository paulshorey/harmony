import { getSpiralEnv } from '.';

// https://prod-api.spiral.us
// https://staging-api.spiral.us
// https://staging2-api.spiral.us
// https://prod-uat-api.spiral.us
describe('Apollo Helper: getSpiralEnv - Return correct env name based on API_BASE', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('Will return correctly for prod', () => {
    process.env = Object.assign(process.env, {
      API_BASE: 'https://prod-api.spiral.us',
    });

    expect(getSpiralEnv()).toBe('prod');
  });

  it('Will return correctly for uat', () => {
    process.env = Object.assign(process.env, {
      API_BASE: 'https://prod-uat-api.spiral.us',
    });

    expect(getSpiralEnv()).toBe('uat');
  });

  it('Will return correctly for staging', () => {
    process.env = Object.assign(process.env, {
      API_BASE: 'https://staging-api.spiral.us',
    });

    expect(getSpiralEnv()).toBe('stage');
  });

  it('Will return correctly for staging variants', () => {
    process.env = Object.assign(process.env, {
      API_BASE: 'https://staging2-api.spiral.us',
    });

    expect(getSpiralEnv()).toBe('stage');
  });

  it('Will return not error on unknown variants', () => {
    process.env = Object.assign(process.env, {
      API_BASE: 'https://custom-api.spiral.us',
    });

    expect(getSpiralEnv()).toBe('unknown');
  });
});
