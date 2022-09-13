import { fieldsType } from '../../../manage/types';

const fields: fieldsType = [
  {
    key: 'id',
    label: '',
    type: 'number',
    value: 0,
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
  },
  {
    key: 'ein',
    label: 'EIN',
    tests: {
      ein: true,
      required: true,
    },
    type: 'text',
    value: '',
  },
  {
    key: 'description',
    label: 'Mission',
    tests: {
      required: true,
    },
    type: 'text',
    value: '',
  },
  {
    key: 'icon',
    keyPUT: 'iconUrl',
    label: 'Logo image',
    options: {
      mediaLibraryFolder: '',
    },
    tests: {
      required: true,
      url: true,
    },
    type: 'CloudinaryImage',
    value: '',
    valueGET: (value: any) => value?.url,
  },
  {
    key: 'category',
    keyPUT: 'categoryId',
    label: 'Category',
    tests: {
      required: true,
    },
    type: 'SelectCharityCategoryId',
    value: 0,
    valueGET: (value: any) => ({ id: value?.id, name: value?.name }),
    valuePUT: (value: any) => Number(value?.id) || 0,
  },
  {
    key: 'partnered',
    label: 'Is partner?',
    tests: {},
    type: 'checkbox',
    value: false,
    valuePUT: (value: any) => (value === 'false' ? false : Boolean(value)),
  },
  {
    key: 'ach',
    label: 'ACH?',
    tests: {},
    type: 'checkbox',
    value: false,
    valuePUT: (value: any) => (value === 'false' ? false : Boolean(value)),
  },
  {
    key: 'recommended',
    label: 'Is recommended?',
    tests: {},
    type: 'checkbox',
    value: false,
    valuePUT: (value: any) => (value === 'false' ? false : Boolean(value)),
  },
];
export default fields;
