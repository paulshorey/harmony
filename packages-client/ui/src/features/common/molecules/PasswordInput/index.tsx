import React, { FC, memo, useState } from 'react';

import Box, { BoxProps } from '../../atoms/Box';
import { Input, InputGroup, InputRightElement } from '../../atoms/Form';
import Icon from '../../atoms/Icon';

export type Props = BoxProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    isValid?: boolean;
    rightElementTestId?: string;
  };

const PasswordInput: FC<Props> = ({
  isValid = false,
  onChange,
  rightElementTestId,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const togglePassVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <InputGroup>
      <Input
        onChange={onChange}
        type={isVisible ? 'input' : 'password'}
        {...rest}
        paddingRight={isValid ? '60px!important' : '35px!important'}
      />
      <InputRightElement>
        {rightElementTestId && isValid && (
          <Box data-testid={rightElementTestId}>
            <Icon height={25} type="checkmark" width={25} />
          </Box>
        )}
        <Box
          data-testid={isVisible ? 'pass-icon-on' : 'pass-icon-off'}
          onClick={togglePassVisibility}
        >
          <Icon
            height={20}
            type={isVisible ? 'password-on' : 'password-off'}
            width={20}
          />
        </Box>
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(PasswordInput);
