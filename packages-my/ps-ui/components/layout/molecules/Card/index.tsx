import Div, { DivProps } from '@ps/ui/components/layout/atoms/Div';
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
 * Card
 */
const Card: FC<Props> = ({
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
        label: 'Card',
      })}
      {...props}
    >
      {children}
    </Div>
  );
};

export default Card;
