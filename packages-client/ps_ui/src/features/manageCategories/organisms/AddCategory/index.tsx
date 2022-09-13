import React from 'react';

import AddEditForm from '../../../manage/molecules/AddEditForm';
import { formDataType } from '../../../manage/types';
import categoryFields from '../../fields';
import { useAddCategory } from '../../hooks';
import { MOCK_GET_CATEGORY_PAYLOAD } from '../../mocks';

type AddCategoryProps = {
  onSave: () => void;
};

const AddCategory: React.FC<AddCategoryProps> = ({ onSave }) => {
  const { addCategory } = useAddCategory();
  const initialData: formDataType = {};
  for (const field of categoryFields) {
    initialData[field.key] = field.value;
  }

  const onEdit: (addedData: typeof MOCK_GET_CATEGORY_PAYLOAD) => void = async (
    addedData
  ) => {
    // save changes
    await addCategory({
      data: addedData,
    });
    // exit the form
    onSave();
  };

  return (
    <>
      <AddEditForm
        contentLabel="Category"
        formData={initialData}
        formFields={categoryFields}
        onCancel={onSave}
        onSubmit={onEdit}
      />
    </>
  );
};

export default AddCategory;
