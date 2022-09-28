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
 * This works in a very specific way. See code:
 * ```<Centered as="p" style="width:200px">
 *   This text fits in a narrow column because it wraps to several lines...
 *   <span style="white-space:nowrap">This text is wider than 200px but can't wrap!</span>
 * </Centered>```
 * In the above example, the `span` will not fit the layout because of `white-space:nowrap`. It will stick out to the left and right. BUT it will still be centered in relation to the surrounding content.`.
 */
const Centered: FC<Props> = ({
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
        label: 'Centered',
      })}
      {...props}
    >
      {children}
    </Div>
  );
};

export default Centered;
