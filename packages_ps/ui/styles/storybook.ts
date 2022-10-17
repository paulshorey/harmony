import globalV from './variants';

export const argTypes = (localVariants: string[] = []) => {
  const allV = [
    ...localVariants,
    ...Object.keys({
      '-----⌃local⌃----------⌄global⌄-----': true,
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
    size: {
      control: {
        type: 'select',
      },
      options: [''],
    },
  };

  return argTypes;
};
