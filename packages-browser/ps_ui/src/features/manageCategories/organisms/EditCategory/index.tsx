import Loading from '@ps/ui/src/features/common/atoms/Loading';
import MenuDivider from '@ps/ui/src/features/common/molecules/MenuDivider';
import React from 'react';

import AddEditForm from '../../../manage/molecules/AddEditForm';
import DeleteForm from '../../../manage/molecules/DeleteForm';
import categoryFields from '../../fields';
import {
  useDeleteCategory,
  useEditCategory,
  useGetCategory,
} from '../../hooks';
import { MOCK_GET_CATEGORY_PAYLOAD } from '../../mocks';

type EditCategoryProps = {
  editId: number;
  onSave: () => void;
};

const EditCategory: React.FC<EditCategoryProps> = ({ editId, onSave }) => {
  const { data: categoryData } = useGetCategory(editId);
  const { editCategory } = useEditCategory();
  const { deleteCategory } = useDeleteCategory();

  const onEdit: (editedData: typeof MOCK_GET_CATEGORY_PAYLOAD) => void = async (
    editedData
  ) => {
    // save changes
    await editCategory({
      data: editedData,
      id: editedData.id,
    });
    // exit the form
    onSave();
  };

  const onDelete: () => void = async () => {
    // save changes
    await deleteCategory({
      id: editId,
    });
    // exit the form
    onSave();
  };

  if (!categoryData) {
    return <Loading />;
  }

  return (
    <>
      <AddEditForm
        contentLabel="Category"
        formData={categoryData}
        formFields={categoryFields}
        onCancel={onSave}
        onSubmit={onEdit}
      />

      <p>&nbsp;</p>
      <MenuDivider />
      <p>&nbsp;</p>

      <DeleteForm
        contentId={editId}
        contentLabel="Category"
        onCancel={onSave}
        onSubmit={onDelete}
      />
    </>
  );
};

export default EditCategory;
