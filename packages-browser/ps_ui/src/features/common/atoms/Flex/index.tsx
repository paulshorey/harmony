import { FC, memo } from 'react';

import Box, { BoxProps } from '../Box';

const Flex: FC<BoxProps> = ({
  alignItems = 'center',
  children,
  flexDirection = 'row',
  justifyContent = 'space-between',
  ...rest
}) => {
  return (
    <Box
      alignItems={alignItems}
      display="flex"
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default memo(Flex);
