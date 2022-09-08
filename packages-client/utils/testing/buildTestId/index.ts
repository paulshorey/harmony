/**
 * The type of element being named.
 *
 * "view" should be used to reference a container ie:
 *
 * view-success
 * view-error
 */
type testIdElementType =
  | 'view'
  | 'button'
  | 'input'
  | 'option'
  | 'select'
  | 'link'
  | 'radio'
  | 'checkbox';

/**
 * The name of the test id
 *
 * This should be generic when possible leading to simple names ie:
 *
 * @example - 'name' / 'address street' / 'occupation'
 * input-[name]
 * input-[address-street]
 * select-[occupation]
 */
type testIdName = string;

export const buildTestId = (type: testIdElementType, name: testIdName) => {
  return `${type}-` + name.toLowerCase().split(' ').join('-');
};
