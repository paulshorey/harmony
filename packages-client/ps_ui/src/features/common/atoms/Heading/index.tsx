import { FC, memo } from 'react';

import Box, { BoxProps } from '../Box';

export type Props = BoxProps;

const Heading: FC<Props> = ({ as = 'h1', children = '', ...rest }) => {
  return (
    <Box as={as} {...rest}>
      {children}
    </Box>
  );
};

export default memo(Heading);
