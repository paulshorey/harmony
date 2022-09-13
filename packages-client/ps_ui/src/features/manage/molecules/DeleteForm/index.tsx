import Button from '@ps/ui/src/features/common/atoms/Button';
import React from 'react';

type Props = {
  contentId: number;
  contentLabel: string;
  onCancel?: any;
  onSubmit: any;
};

const AddEditForm: React.FC<Props> = ({
  contentLabel,
  contentId,
  onSubmit = () => {},
  // onCancel = () => {},
}) => {
  return (
    <div>
      <h1>Danger Zone:</h1>
      <div>
        <Button onClick={onSubmit}>
          DELETE {contentLabel} {contentId}
        </Button>
        {/* <Button onClick={onCancel} variant="outline">
          Cancel
        </Button> */}
      </div>
    </div>
  );
};

export default AddEditForm;
