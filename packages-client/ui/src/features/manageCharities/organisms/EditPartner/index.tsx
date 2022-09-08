import MenuDivider from '@spiral/ui/src/features/common/molecules/MenuDivider';
import Loading from '@spiral/ui/src/features/common/atoms/Loading';
import React from 'react';

import AddEditForm from '../../../manage/molecules/AddEditForm';
import DeleteForm from '../../../manage/molecules/DeleteForm';
import charityFields from '../../fields';
import { useDeleteCharity, useEditCharity, useGetCharity } from '../../hooks';
import { MOCK_GET_CHARITY_PAYLOAD } from '../../mocks';

type EditCharityProps = {
  editId: number;
  onCancel?: () => void;
  onSave: () => void;
};

const EditCharity: React.FC<EditCharityProps> = ({
  editId,
  onCancel,
  onSave,
}) => {
  const { data: charityData } = useGetCharity(editId);
  const { editCharity } = useEditCharity();
  const { deleteCharity } = useDeleteCharity();

  const onEdit: (editedData: typeof MOCK_GET_CHARITY_PAYLOAD) => void = async (
    editedData
  ) => {
    // save changes
    await editCharity({
      data: editedData,
      id: editedData.id,
    });
    // exit the form
    onSave();
  };

  const onDelete: () => void = async () => {
    // save changes
    await deleteCharity({
      id: editId,
    });
    // exit the form
    onSave();
  };

  if (!charityData) {
    return <Loading />;
  }

  return (
    <>
      <AddEditForm
        contentLabel="Partner"
        formData={charityData}
        formFields={charityFields}
        onCancel={onCancel}
        onSubmit={onEdit}
      />

      <p>&nbsp;</p>
      <MenuDivider />
      <p>&nbsp;</p>

      <DeleteForm
        contentId={editId}
        contentLabel="Partner"
        onCancel={onSave}
        onSubmit={onDelete}
      />
    </>
  );
};

export default EditCharity;
