import Button from '@ps/ui/src/features/common/atoms/Button';
import React, { useEffect, useState } from 'react';
import mergeArrays from 'src/helpers/mergeArrays';
import mergeObjects from 'src/helpers/mergeObjects';
import { fieldChangeEventType } from 'src/types';

import {
  fieldsType,
  formDataType,
  formValidationOutputType,
} from '../../types';
import validateForm from '../../validateForm';
import FormField from '../AddEditField';
import styles from './styles';

type Props = {
  className?: string;
  contentLabel: string;
  customCSS?: string;
  formData?: formDataType;
  formFields: fieldsType;
  onCancel?: () => void;
  onSubmit: (data: formDataType) => void;
};

/**
 * This form uses fieldsType as state, to render and interact with the form fields.
 * Then it converts fieldsType to formDataType and sends that to onSubmit callback.
 */
const AddEditForm: React.FC<Props> = ({
  contentLabel,
  formFields,
  formData = {},
  onSubmit = () => {},
  onCancel,
}) => {
  // Deeply copy formFields and fill them with formData values.
  // formData is empty initially. So, wait until it has values.
  useEffect(() => {
    const initialFields = (formFields as fieldsType).map((field) => {
      const fieldCopy = { ...field };
      fieldCopy.value = formData[field.key];
      return fieldCopy;
    });
    set_editFields(initialFields);
  }, [formData]);

  const [editFields, set_editFields] = useState(mergeArrays([], formFields));

  const [validation, set_validation] = useState<formValidationOutputType>({
    errors: {},
  });

  const onFieldChange = (e: fieldChangeEventType) => {
    const { name, value } = e.target;
    if (typeof name !== 'string') {
      return;
    }
    // modify state
    const editedFields: fieldsType = mergeArrays([], editFields);
    editedFields.forEach((field) => {
      if (field.key === name) {
        field.value = value;
      }
    });
    set_editFields(editedFields);
    set_validation({ errors: {} });
  };

  const onFormSubmit = () => {
    // validate all fields
    const validated: formValidationOutputType = validateForm(editFields);
    set_validation(validated);
    // field passed validation
    if (!validated.hasErrors) {
      const editedData = mergeObjects({}, formData);
      (editFields as fieldsType).forEach((field) => {
        editedData[field.key] = field.value;
      });
      onSubmit(editedData);
    }
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.buttons}>
        <Button onClick={onFormSubmit}>Save Changes</Button>
        {onCancel && (
          <Button onClick={onCancel} variant="outline">
            Cancel
          </Button>
        )}
      </div>
      <div css={styles.head}>
        {formData?.id ? (
          <h1 css={styles.heading}>
            Edit {contentLabel} &quot;{formData?.id}&quot;
          </h1>
        ) : (
          <h1 css={styles.heading}>Add new {contentLabel}</h1>
        )}
      </div>

      <div css={styles.body}>
        {editFields &&
          (editFields as fieldsType).map((field) => (
            <FormField
              error={validation.errors[field.key] || ''}
              key={field.key}
              label={field?.label || ''}
              name={field?.key || ''}
              onChange={onFieldChange}
              options={field?.options || {}}
              type={field?.type || 'text'}
              value={field?.value}
            />
          ))}
      </div>
    </div>
  );
};

export default AddEditForm;
