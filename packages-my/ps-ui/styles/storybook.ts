import globalV from './variants';
import { colorGroups, colorShades } from 'styles/colors';
import arrays_merge from '@ps/fn/io/arrays/arrays_merge';

export const argTypes = (localVariants: string[] = []) => {
  const allV = arrays_merge(
    localVariants,
    Object.keys({
      '-----⌃local⌃----------⌄global⌄-----': true,
      ...globalV,
    })
  );

  const argTypes = {
    // ref: { table: { disable: true } },
    variants: {
      control: {
        type: 'multi-select',
      },
      options: allV,
    },
    color: {
      control: {
        type: 'select',
      },
      options: colorGroups,
    },
    shade: {
      control: {
        type: 'select',
      },
      options: colorShades,
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
