import Div, { DivProps } from '@ps/ui/components/content/atoms/Div';
import Button from 'components/form/atoms/Button';
import Input from 'components/form/atoms/Input';
import useVariants from 'hooks/useVariants';
import { FC } from 'react';

import styles from './styles';

type StyleProps = {
  variant?: string;
  variants?: Array<string>;
};
type Props = DivProps & StyleProps;

/**
 * code
 */
const FieldsGroup: FC<Props> = ({
  variant = 'default',
  variants,
  ...props
}) => {
  return (
    <Div
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
    </Div>
  );
};

export default FieldsGroup;
