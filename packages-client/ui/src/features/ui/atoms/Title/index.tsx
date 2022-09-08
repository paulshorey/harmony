import Box, { BoxProps } from '@spiral/ui/src/features/common/atoms/Box';
import React from 'react';
import withCSS from 'src/helpers/withCSS';

import styles from './styles';

type Props = BoxProps & {
  css?: any;
  variant?: string;
  variants?: string[];
};
const Title: React.FC<Props> = ({
  as = 'h3',
  css,
  variant,
  variants,
  ...props
}) => {
  return (
    <Box
      as={as}
      css={withCSS({ css, label: 'Title', styles, variant, variants })}
      {...props}
    />
  );
};

export default Title;
