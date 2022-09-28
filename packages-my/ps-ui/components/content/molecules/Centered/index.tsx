import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

import styles from './styles';

type StyleProps = {
  variant?: string;
  variants?: Array<string>;
  as?: string;
};
type Props = BlockProps & StyleProps;

/**
 * ```<Centered as="p" style="width:200px">
 *   This text fits in a narrow column because it wraps to several lines...
 *   <span style="white-space:nowrap">This text is wider than 200px but can't wrap!</span>
 * </Centered>```
 * In this example, the `span` will not fit the column because of `white-space:nowrap`. It will stick out to the left and right. BUT with the help of \<Centered\>, it will still be centered in relation to the surrounding content.`.
 *
 * You must pass `props.width` for the magic to work. Otherwise it will just function like `text-align:center`.
 */
const Centered: FC<Props> = ({
  as = 'div',
  children,
  variant = 'default',
  variants,
  ...props
}) => {
  return (
    <Block
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
    </Block>
  );
};

export default Centered;
