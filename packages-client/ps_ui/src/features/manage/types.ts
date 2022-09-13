/**
 * validations.ts collection of validators to use in fields.tests. See fieldType for more.
 */
export type validationsType = {
  [testName: string]: [regexExpression: string, errorMessage: string];
};

/**
 * This object is used to automatically build a form. Keep all configuration here.
 * AddEditForm.tsx will deep-copy this object and fill it with real live values.
 *
 * These `fieldType` will be used by `src/features/manageContent/molecules/FormField`
 *     and will be passed to `src/features/manageContent/atoms` input components as props.
 * Standard field types like 'number' and 'text' will render a classic `<Input>` element.
 * Custom types like 'CloudinaryImage' and 'categoryTypeId' will render a fancy component.
 *
 * The values here are only mock data.
 * Components may deep-copy this object and fill it with real live values, to manage state.
 * AddEditForm.tsx does exactly this.
 * But when sending onSubmit() handler, it converts and sends back only formDataType.
 *
 * To convert to formDataType, do this:
 * ```
 * formData[field.key] = field.value;
 * ```
 */
export type fieldsType = fieldType[];

/**
 * Pass a standard field.type like 'text' | 'number' to render a classic <input> element.
 * Or a custom string like 'CloudinaryImage' or 'SelectCategoryTypeId' to render a custom field.
 *
 * Validate using a predefined RegExp pattern from validations.ts
 * ```
 * field.tests = { email: true } // to use the default message
 * field.tests = { email: 'please type a valid email address' }
 * ```
 * or pass your custom regex string as key and error message as value
 * ```
 * field.tests = { '^[\d]+$': 'must be a number' }
 * ```
 */
export type fieldType = {
  key: string;
  keyPUT?: string;
  label?: string | undefined;
  options?: Record<string, any>;
  tests?: {
    [keyOfValidation_Or_regExpToTest: string]: boolean | string;
  };
  type:
    | 'text'
    | 'textarea'
    | 'number'
    | 'password'
    | 'email'
    | 'tel'
    | 'pin'
    | 'checkbox'
    | 'toggle'
    | 'SelectCategoryTypeId'
    | 'SelectCharityCategoryId'
    | 'CloudinaryImage';
  value: any;
  valueGET?: (value: any) => any;
  valuePUT?: (value: any) => string | boolean | number | null;
};

/**
 * Simple key:value store of values to be sent to the API via PUT/POST.
 */
export type formDataType =
  | {
      [fieldKey: string]: any;
    }
  | Record<any, never>; // when first building the object, helpful to start from {}

/**
 * Standard REST
 */
export type restMethodsType = 'GET' | 'PUT' | 'POST' | 'DELETE';

/**
 * Standard CRUD
 */
export type crudActionType = 'create' | 'read' | 'update' | 'delete';

/**
 * Example:
 * ```{
 *   errors: {
 *    'full-name': 'Please enter both your first and last names',
 *    'subscribe-to-newsletter': 'Please check the box to subscribe to our newsletter'
 *   },
 *   hasErrors: true,
 *   wasEdited: true
 * }```
 */
export type formValidationOutputType = {
  errors:
    | {
        [name: string]: string;
      }
    | Record<string, never>;
  hasErrors?: boolean;
  wasEdited?: boolean;
};
