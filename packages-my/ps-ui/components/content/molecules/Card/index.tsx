import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import { HtmlContainerTags } from '@ps/ui/types/html';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

import styles from './styles';

type StyleProps = {
  variant?: string;
  variants?: Array<string>;
  as?: HtmlContainerTags;
};
type Props = BlockProps & StyleProps;

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
    <Block
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
    </Block>
  );
};

export default Card;
