import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import Button from 'components/form/atoms/Button';
import Input from 'components/form/atoms/Input';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

import styles from './styles';

type StyleProps = {
  variant?: string;
  variants?: Array<string>;
};
type Props = BlockProps & StyleProps;

/**
 * code
 */
const FieldsGroup: FC<Props> = ({
  variant = 'default',
  variants,
  ...props
}) => {
  return (
    <Block
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Code',
      })}
      {...props}
    >
      <Input value="InputValue" />
      <Button>Button</Button>
    </Block>
  );
};

export default FieldsGroup;
