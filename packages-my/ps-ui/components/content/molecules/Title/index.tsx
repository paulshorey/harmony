import Div, { DivProps } from '@ps/ui/components/content/atoms/Div';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

import styles from './styles';

type StyleProps = {
  variant?: string;
  variants?: Array<string>;
  as?: string;
};
type Props = DivProps & StyleProps;

/**
 * Title
 */
const Title: FC<Props> = ({
  as = 'div',
  children,
  variant = 'default',
  variants,
  ...props
}) => {
  return (
    <Div
      as={as}
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Title',
      })}
      {...props}
    >
      {children}
    </Div>
  );
};

export default Title;
