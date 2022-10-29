// import globalV from './variants';

type Props = { localVariants?: string[] };

export const argTypes = ({ localVariants = [] }: Props) => {
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
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
    textgradient: {
      control: {
        type: 'select',
      },
    },
    bggradient: {
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
