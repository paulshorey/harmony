import globalV from './variants';

export const argTypes = (localVariants: string[] = []) => {
  const allV = [
    ...localVariants,
    ...Object.keys({
      '----------------------': true,
      // '-----👆local/global👇-----': true,
      ...globalV,
    }),
  ];

  const argTypes = {
    // ref: { table: { disable: true } },
    variants: {
      control: {
        type: 'multi-select',
      },
      options: allV,
    },
    variant: {
      control: {
        type: 'select',
      },
      options: allV,
    },
    // color: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['default', 'purple', 'orange'],
    // },
    // size: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: [''],
    // },
  };

  return argTypes;
};
