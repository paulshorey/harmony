import { fieldsType, formDataType } from '../../../manage/types';

type propsType = {
  data: formDataType;
  fields: fieldsType;
};

/**
 * Accepts data from API GET payload. Returns data formatted for form fields.
 * This data will be passed to form components.
 * This will usually not be necessary, but it's good to keep this function
 * in case we ever need to modify GET data before passing to form components.
 */
export default function ({ data, fields }: propsType) {
  const output: Record<string, any> = {};
  if (!data) {
    return output;
  }
  for (const field of fields) {
    // fix each value
    output[field.key] = field.valueGET
      ? field.valueGET(data[field.key])
      : data[field.key];
  }
  return output;
}
