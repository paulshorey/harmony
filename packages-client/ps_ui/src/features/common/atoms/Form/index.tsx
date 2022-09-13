import { css, useTheme } from '@emotion/react';
import {
  createContext,
  FC,
  forwardRef,
  InputHTMLAttributes,
  useContext,
} from 'react';

import Box, { BoxProps } from '../Box';

const Context = createContext<{ id: string; isInvalid: boolean }>({
  id: '',
  isInvalid: false,
});

const useFormControl = () => {
  const context = useContext(Context);

  return context;
};

type FormControlProps = BoxProps & {
  id: string;
  isInvalid?: boolean;
};

/** Shares Input Context with children */
export const FormControl: FC<FormControlProps> = ({
  children,
  id,
  isInvalid,
  ...rest
}) => {
  return (
    <Context.Provider value={{ id, isInvalid: Boolean(isInvalid) }}>
      <Box {...rest}>{children}</Box>
    </Context.Provider>
  );
};

type InputProps = BoxProps & InputHTMLAttributes<HTMLInputElement>;

/** Default text input, consumes FormControl props */
export const Input = forwardRef<HTMLInputElement | null, InputProps>(
  function InputComponent(
    { children, id, onChange, type, value, ...rest },
    ref
  ) {
    const context = useFormControl();
    const theme = useTheme();

    const VALUE = type === 'number' ? Number(value).toString() : value;

    return (
      <Box
        as="input"
        border={'1px solid'}
        borderColor="gray"
        borderRadius={8}
        //
        css={css`
          caret-color: ${theme.colors.pink};
          :focus {
            outline: none;
            border-color: ${theme.colors.pink};
          }

          ::placeholder {
            color: ${theme.colors.gray};
          }
        `}
        fontSize={{ sm: 18, xs: 16 }}
        id={context.id || id}
        lineHeight="19px"
        onChange={onChange}
        padding={{ sm: '15px', xs: '13px' }}
        // @ts-ignore
        ref={ref}
        type={type || 'text'}
        value={VALUE}
        width="100%"
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

export const TextArea = forwardRef<HTMLInputElement | null, InputProps>(
  function InputComponent({ children, id, onChange, ...rest }, ref) {
    const context = useFormControl();
    const theme = useTheme();

    return (
      <Box
        as="textarea"
        border={'1px solid'}
        // id={id || context.id}
        borderColor="gray"
        borderRadius={8}
        //
        css={css`
          caret-color: ${theme.colors.pink};
          :focus {
            outline: none;
            border-color: ${theme.colors.pink};
          }

          ::placeholder {
            color: ${theme.colors.gray};
          }
        `}
        fontSize={{ sm: 18, xs: 16 }}
        id={id || context.id}
        lineHeight="19px"
        onChange={onChange}
        padding={{ sm: '15px', xs: '13px' }}
        // @ts-ignore
        ref={ref}
        width="100%"
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

type SelectProps = BoxProps &
  InputHTMLAttributes<HTMLInputElement> & {
    id?: string;
    options?: { disabled?: boolean; text: string; value: string | number }[];
  };

/** Default Select input, consumes FormControl props */
export const Select: FC<SelectProps> = ({
  children,
  id,
  onChange,
  options,
  placeholder,
  value,
  ...rest
}) => {
  const context = useFormControl();
  const theme = useTheme();

  return (
    <Box
      as="select"
      border={'1px solid'}
      borderColor="gray"
      borderRadius={8}
      color={value ? undefined : '#a0b2b8'}
      css={css`
        :focus {
          outline: none;
          border-color: ${theme.colors.pink};
          color: black;
        }

        ::placeholder {
          color: ${theme.colors.gray};
        }

        appearance: none;
        background-image: url('/icons/arrow-down.svg');
        background-repeat: no-repeat;
        background-position-x: calc(100% - 10px);
        background-position-y: 50%;
      `}
      fontSize={{ sm: 18, xs: 16 }}
      id={context.id || id}
      lineHeight="19px"
      onChange={onChange}
      padding={{ sm: '15px', xs: '13px' }}
      paddingRight={{ sm: '15px', xs: '30px' }}
      value={value || undefined}
      width="100%"
      {...rest}
    >
      {placeholder && (
        <option
          disabled
          selected={value === undefined || value === ''}
          value={undefined}
        >
          {placeholder}
        </option>
      )}

      {options?.map((i) => (
        <option disabled={i.disabled} key={i.value} value={i.value}>
          {i.text}
        </option>
      ))}
      {children}
    </Box>
  );
};

type FormLabelProps = BoxProps & {
  id?: string;
};
/** Default input label that can consume context to self assign ID */
export const FormLabel: FC<FormLabelProps> = ({ children, id, ...rest }) => {
  const context = useFormControl();

  return (
    <Box
      as="label"
      display="block"
      fontSize={{ sm: '18px', xs: '16px' }}
      fontWeight={400}
      htmlFor={context.id || id}
      paddingBottom={'5px'}
      paddingLeft={'1px'}
      {...rest}
    >
      {children}
    </Box>
  );
};

/** Looks for isInvalid prop from FormControl to show or hide automatically */
export const FormErrorMessage: FC<BoxProps> = ({ children, ...rest }) => {
  const context = useFormControl();

  if (context.isInvalid) {
    return (
      <Box as="p" color="error" fontSize="16px" paddingTop="10px" {...rest}>
        {children}
      </Box>
    );
  }

  return null;
};

/** Show text under input + Will hide if error showing */
export const FormHelperText: FC<BoxProps> = ({ children, ...rest }) => {
  const context = useFormControl();

  if (context.isInvalid) {
    return null;
  }

  return (
    <Box color="gray500" fontSize="16px" paddingTop="10px" {...rest}>
      {children}
    </Box>
  );
};

/** Used to Wrap complex custom inputs that include icons or other add-ons */
export const InputGroup: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      position="relative"
      {...rest}
    >
      {children}
    </Box>
  );
};

/** When included inside an Input Group, will display an Icon inside the input */
export const InputRightElement: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      alignItems="center"
      bottom={0}
      display="flex"
      marginY="auto"
      position="absolute"
      right="15px"
      top={0}
      {...rest}
    >
      {children}
    </Box>
  );
};

/** When included inside an Input Group, will display an Icon inside the input */
export const InputLeftElement: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      alignItems="center"
      bottom={0}
      display="flex"
      left="15px"
      marginY="auto"
      position="absolute"
      top={0}
      {...rest}
    >
      {children}
    </Box>
  );
};
