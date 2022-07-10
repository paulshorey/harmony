import { isJson } from '../isJson';

/**
 * Helper to parse JSON or String error safely.
 */
export const parseError = (error: string) => {
  const parsed =
    error && isJson(error)
      ? JSON.parse(error)?.length
        ? JSON.parse(error)[0]
        : error
      : error;

  return parsed;
};
