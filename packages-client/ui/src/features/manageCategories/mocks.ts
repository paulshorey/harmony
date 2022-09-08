import fields from './fields';

export const GET_ROW_DATA = fields.reduce(
  (acc, field) => {
    acc[field.key] = field.value;
    return acc;
  },
  {} as Record<string, any> // same as we receive from API GET payload
);
export const PUT_ROW_DATA = fields.reduce(
  (acc, field) => {
    acc[field.keyPUT || field.key] = field.valuePUT || field.value;
    return acc;
  },
  {} as Record<string, any> // same as we receive from API GET payload
);

/*
 * Only response.payload
 */
export const MOCK_GET_CATEGORY_PAYLOAD = GET_ROW_DATA;
export const MOCK_GET_CATEGORIES_PAYLOAD = [GET_ROW_DATA];
export const MOCK_EDIT_CATEGORY_PAYLOAD = undefined; // ?
export const MOCK_ADD_CATEGORY_PAYLOAD = undefined; // ?

/*
 * Full response
 */
export const MOCK_GET_CATEGORIES = {
  getCategories: {
    payload: MOCK_GET_CATEGORIES_PAYLOAD,
    result: 'success',
  },
};
export const MOCK_GET_CATEGORY = {
  getCategory: {
    payload: MOCK_GET_CATEGORY_PAYLOAD,
    result: 'success',
  },
};

export const MOCK_DELETE_CATEGORY = {
  editCategory: {
    result: 'success',
  },
};
export const MOCK_DELETE_CATEGORY_FAIL = {
  editCategory: {
    result: 'fail',
  },
};

export const MOCK_EDIT_CATEGORY = {
  editCategory: {
    result: 'success',
  },
};
export const MOCK_EDIT_CATEGORY_FAIL = {
  editCategory: {
    result: 'fail',
  },
};

export const MOCK_ADD_CATEGORY = {
  addCategory: {
    result: 'success',
  },
};
export const MOCK_ADD_CATEGORY_FAIL = {
  addCategory: {
    result: 'fail',
  },
};
