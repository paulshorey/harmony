// import globalV from './variants';

export const argTypes = (localVariants: string[] = []) => {
  const allV = [
    ...localVariants,
    // ...Object.keys({
    //   '----------------------': true,
    //   // '-----👆local/global👇-----': true,
    //   ...globalV,
    // }),
  ];

  const argTypes = {
    // ref: { table: { disable: true } },
    size: {
      control: {
        type: 'select',
      },
    },
    textcolor: {
      control: {
        type: 'select',
      },
    },
    bgcolor: {
      control: {
        type: 'select',
      },
    },
    textGradient: {
      control: {
        type: 'select',
      },
    },
    bgGradient: {
      control: {
        type: 'select',
      },
    },
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
  };

  return argTypes;
};
