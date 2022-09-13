import {
  crudActionType,
  fieldsType,
  formDataType,
} from '../../../manage/types';

type propsType = {
  crudAction?: crudActionType;
  data: formDataType;
  fields: fieldsType;
};

/**
 * Pass your formData (edited values) and fields schema.
 * This function will return your formData values coerced into the correct types.
 */
export default function ({ crudAction, data, fields }: propsType) {
  const output: Record<string, any> = {};
  for (const field of fields) {
    // omit data.id if adding new
    if (crudAction === 'create' && field.key === 'id') {
      continue;
    }
    // fix each value
    output[field.keyPUT || field.key] = field.valuePUT
      ? field.valuePUT(data[field.key])
      : data[field.key];
  }
  return output;
}
