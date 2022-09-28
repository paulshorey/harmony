import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

import styles from './styles';

type Props = BlockProps & {
  variant?: string;
  variants?: Array<string>;
  as?: string;
};

/**
 * Use the props to change gradient colors/direction/style.
 * Pass a variant to choose from predefined styles.
 */
const Gradient: FC<Props> = ({ as = 'span', variant, variants, ...props }) => {
  return (
    <Block
      as={as}
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Gradient',
      })}
      {...props}
    />
  );
};

export default Gradient;
