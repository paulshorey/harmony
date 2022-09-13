import { validationsType } from './types';

/**
 * In your fields.ts, specify any of the predefined tests like this:
 * ```
 * field.tests = { email: true } // to use the default message
 * field.tests = { email: 'please type a valid email address' }
 * ```
 * or pass your custom regex test and error message, like this:
 * ```
 * field.tests = { '^[\d]+$': 'must be a number' }
 * ```
 */
const validations: validationsType = {
  ein: ['^[0-9]{2}-[0-9]{7}$', 'must be 00-0000000 format'],
  email: ['^[\\w\\d]+[^\\s@]*[\\w\\d]+@[^\\s@]+\\.[^\\s@]+$', 'invalid email'],
  required: ['.+', 'required'],
  url: ['(http://|https://|/)+.+/+.+', 'invalid URL'],
};
export default validations;
