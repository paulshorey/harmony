import Block, { BlockProps } from '@ps/ui/components/content/atoms/Block';
import Button from 'components/form/atoms/Button';
import Input from 'components/form/atoms/Input';
import withStyles from 'styles/withStyles';
import { FC, memo } from 'react';

import styles from './variants';

type Props = BlockProps;

/**
 * fields group description
 */
const FieldsGroup: FC<Props> = ({ ...props }) => {
  return (
    <Block {...props}>
      <Input value="InputValue" />
      <Button>Button</Button>
    </Block>
  );
};

export default memo(withStyles(FieldsGroup, 'FieldsGroup', styles));
