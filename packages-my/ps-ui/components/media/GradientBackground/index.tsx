import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

import styles from './styles';

type Props = BlockProps & {
  variant?: string;
  variants?: Array<string>;
};

/**
 * Use the props to change gradient colors/direction/style.
 * Pass a variant to choose from predefined styles.
 */
const GradientBackground: FC<Props> = ({ variant, variants, ...props }) => {
  return (
    <Block
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'GradientBackground',
      })}
      {...props}
    />
  );
};

export default GradientBackground;
