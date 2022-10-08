/* eslint-disable max-depth */
type validationsType = {
  [testName: string]: [regexExpression: string, errorMessage: string];
};
type fieldsType = Array<any>;
type formValidationOutputType = {
  errors:
    | {
        [name: string]: string;
      }
    | Record<string, never>;
  hasErrors?: boolean;
  wasEdited?: boolean;
};

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

/**
 * Pass in the entire fields object,
 * not just the formData keys:objects
 */
export default function (fields: fieldsType): formValidationOutputType {
  // this function will return:
  const output: formValidationOutputType = {
    errors: {},
    hasErrors: false,
    wasEdited: false,
  };
  // for each field in form...
  fields.forEach((field) => {
    // value must be string, because it will be validated using RegExp(re).test(value)
    // Changing it to a string here does not affect the submitted form field value type.
    // You can test that value is a number by setting field.tests = {'^[\d]+$': 'must be a number'}
    // Don't bother. Just set field.type='number'. That will render an <input type="number">
    const value = field.value ? field.value.toString() : '';
    if (value) {
      output.wasEdited = true;
    }
    // setup tests
    if (!field.tests || typeof field.tests !== 'object') {
      field.tests = {};
    }
    if (field.type && field.tests?.[field.type]) {
      field.tests.email = true;
    }
    // RegExp().test()
    for (const regexExpression in field.tests) {
      const errorMessage =
        typeof field.tests[regexExpression] === 'string'
          ? field.tests[regexExpression]
          : 'invalid';
      // what expression to use in new RegExp, and what error message to display if failed
      const regexStringToTest =
        validations?.[regexExpression]?.[0] || regexExpression;
      const regexErrorMessage =
        validations?.[regexExpression]?.[1] || errorMessage;
      // perform test on value, show error message if failed
      if (!new RegExp(regexStringToTest).test(value)) {
        output.errors[field.key] = regexErrorMessage + '';
        output.hasErrors = true;
      }
    }
  });
  return output;
}
