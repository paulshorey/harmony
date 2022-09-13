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
export const MOCK_GET_CHARITY_PAYLOAD = GET_ROW_DATA;
export const MOCK_GET_CHARITIES_PAYLOAD = [GET_ROW_DATA];
export const MOCK_EDIT_CHARITY_PAYLOAD = undefined; // ?
export const MOCK_ADD_CHARITY_PAYLOAD = undefined; // ?

/*
 * Full response
 */
export const MOCK_GET_CHARITIES = {
  getCharities: {
    payload: MOCK_GET_CHARITIES_PAYLOAD,
    result: 'success',
  },
};
export const MOCK_GET_CHARITY = {
  getCharity: {
    payload: MOCK_GET_CHARITY_PAYLOAD,
    result: 'success',
  },
};

export const MOCK_DELETE_CHARITY = {
  editCharity: {
    result: 'success',
  },
};
export const MOCK_DELETE_CHARITY_FAIL = {
  editCharity: {
    result: 'fail',
  },
};

export const MOCK_EDIT_CHARITY = {
  editCharity: {
    result: 'success',
  },
};
export const MOCK_EDIT_CHARITY_FAIL = {
  editCharity: {
    result: 'fail',
  },
};

export const MOCK_ADD_CHARITY = {
  addCharity: {
    result: 'success',
  },
};
export const MOCK_ADD_CHARITY_FAIL = {
  addCharity: {
    result: 'fail',
  },
};
