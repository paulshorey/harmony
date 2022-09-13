import { css } from '@emotion/react';
import { FC } from 'react';
import withCSS from 'src/helpers/withCSS';
import { fieldPropsType } from 'src/types';

import SelectCategoryTypeId from '../../../manageCategories/atoms/SelectCategoryTypeId';
import SelectCharityCategoryId from '../../../manageCharities/atoms/SelectCharityCategoryId';
import Checkbox from '../../atoms/Checkbox';
import CloudinaryImage from '../../atoms/CloudinaryImage';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import ReadOnlyValue from '../../atoms/ReadOnlyValue';
import { fieldType } from '../../types';
import styles from './styles';

export type FormFieldProps = fieldPropsType &
  fieldType & {
    error?: string;
    label?: string;
    options?: any;
    tests?: any;
    type?: string;
    value?: any;
  };
const FormField: FC<FormFieldProps> = (props) => {
  const { error, label, tests, type } = props;
  if (!label && !tests) {
    return null;
  }

  let InputComponent;
  switch (type) {
    case 'text':
    case 'number':
    case 'email':
    case 'password':
    case 'tel':
      InputComponent = Input;
      break;
    case 'checkbox':
    case 'toggle':
      InputComponent = Checkbox;
      break;
    case 'SelectCategoryTypeId':
      InputComponent = SelectCategoryTypeId;
      break;
    case 'SelectCharityCategoryId':
      InputComponent = SelectCharityCategoryId;
      break;
    case 'CloudinaryImage':
      InputComponent = CloudinaryImage;
      break;
    default:
      InputComponent = ReadOnlyValue;
      break;
  }

  return (
    <div css={withCSS({ label: 'FormField', styles })}>
      <Label
        css={css`
          width: 33%;
        `}
        error={error}
        label={label}
      />
      <div
        css={css`
          width: 66%;
        `}
      >
        <InputComponent {...props} />
      </div>
    </div>
  );
};

export default FormField;
