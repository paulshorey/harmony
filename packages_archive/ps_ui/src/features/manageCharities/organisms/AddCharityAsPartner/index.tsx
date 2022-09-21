// import Loading from '@ps/ui/src/components/common/atoms/Loading';
import React, { useEffect, useState } from 'react';

import AddEditForm from '../../../manage/molecules/AddEditForm';
import { formDataType } from '../../../manage/types';
import charityFields from '../../fields';
import { useAddCharity, useConvertCharityToPartner } from '../../hooks';
import { MOCK_GET_CHARITY_PAYLOAD } from '../../mocks';

type AddCharityProps = {
  addEIN: string;
  onCancel?: () => void;
  onSave: () => void;
};

const AddCharityAsPartner: React.FC<AddCharityProps> = ({
  addEIN,
  onCancel,
  onSave,
}) => {
  /*
   * Fetch charity data from Guidestar. Then pre-fill this "Add partner" form.
   */
  const { addCharity } = useAddCharity();
  const { convertCharityToPartner } = useConvertCharityToPartner();
  const initialData: formDataType = {};
  for (const field of charityFields) {
    initialData[field.key] = field.value;
  }

  const [charityData, set_charityData] = useState(null);
  useEffect(() => {
    convertCharityToPartner({ ein: addEIN }).then((data: any) => {
      // eslint-disable-next-line no-console
      console.log('convertCharityToPartner response', data);
      set_charityData(data);
    });
  }, [addEIN]);

  const onEdit: (addedData: typeof MOCK_GET_CHARITY_PAYLOAD) => void = async (
    addedData
  ) => {
    // save changes
    await addCharity({
      data: addedData,
    });
    // exit the form
    onSave();
  };

  return (
    <>
      <AddEditForm
        contentLabel="Charity as Partner"
        formData={charityData || initialData}
        formFields={charityFields}
        onCancel={onCancel}
        onSubmit={onEdit}
      />
    </>
  );
};

export default AddCharityAsPartner;
