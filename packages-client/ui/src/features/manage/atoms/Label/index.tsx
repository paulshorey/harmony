import Box, { BoxProps } from '@spiral/ui/src/features/common/atoms/Box';
import React from 'react';

import styles from './styles';

type Props = BoxProps & {
  error?: string;
  label?: string;
};
const Label: React.FC<Props> = ({ error, label, ...props }) => {
  return (
    <Box {...props} as="label" css={styles.wrapper}>
      {label}
      <Box as="span" css={styles.labelError}>
        {!!error && <span>{error}</span>}
      </Box>
    </Box>
  );
};
export default Label;
