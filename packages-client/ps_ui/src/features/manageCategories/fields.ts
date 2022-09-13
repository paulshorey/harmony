import { fieldsType } from '../../../manage/types';

const fields: fieldsType = [
  {
    key: 'id',
    label: '',
    type: 'number',
    value: 1,
    valuePUT: (value: any) => Number(value),
  },
  {
    key: 'name',
    label: 'Name',
    tests: {
      required: true,
    },
    type: 'text',
    value: '',
    valueGET: (value: any) => value,
  },
  {
    key: 'sort',
    label: '',
    type: 'number',
    value: 1,
    valuePUT: (value: any) => Number(value),
  },
  {
    key: 'type',
    keyPUT: 'typeId',
    label: 'GuideStar Type',
    type: 'SelectCategoryTypeId',
    value: {
      id: 1,
      key: '',
    },
    valuePUT: (value: any) => Number(value?.id),
  },
  {
    key: 'background',
    keyPUT: 'backgroundUrl',
    label: 'Background image',
    options: {
      mediaLibraryFolder: '',
    },
    tests: {
      required: true,
      url: true,
    },
    type: 'CloudinaryImage',
    value: '',
  },
  {
    key: 'hidden',
    label: 'Is hidden?',
    tests: {},
    type: 'checkbox',
    value: false,
    valuePUT: (value: any) => (value === 'false' ? false : Boolean(value)),
  },
];
export default fields;
