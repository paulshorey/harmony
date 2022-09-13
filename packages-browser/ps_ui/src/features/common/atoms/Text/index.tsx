import { FC, memo } from 'react';

import Box, { BoxProps } from '../Box';

const Text: FC<BoxProps> = ({ as = 'p', children = '', ...rest }) => {
  return (
    <Box as={as} {...rest}>
      {children}
    </Box>
  );
};

export default memo(Text);
