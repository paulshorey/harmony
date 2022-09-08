// https://prod-api.spiral.us
// https://staging-api.spiral.us
// https://staging2-api.spiral.us
// https://prod-uat-api.spiral.us

export const getSpiralEnv = () => {
  const api = process.env.API_BASE;

  const isProd = api === 'https://prod-api.spiral.us';

  const isUAT = api === 'https://prod-uat-api.spiral.us';

  const isStaging = api?.includes('staging');

  if (isProd) {
    return 'prod';
  }

  if (isUAT) {
    return 'uat';
  }

  if (isStaging) {
    return 'stage';
  }

  return 'unknown';
};
