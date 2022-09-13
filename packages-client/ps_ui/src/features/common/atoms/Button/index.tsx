import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { ButtonHTMLAttributes, ElementType, forwardRef } from 'react';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
  width,
  WidthProps,
} from 'styled-system';

import { Colors } from '../../../../constants/colors';
import { getRgba } from '../../../../helpers/colors/getRgbaFromHex';
import { Theme } from '../../../../styles/theme';
import Box from '../Box';
import Flex from '../Flex';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = ButtonProps &
  WidthProps &
  TypographyProps &
  LayoutProps &
  SpaceProps & {
    'as'?: ElementType<any>;
    'color'?: keyof Colors;
    'colorScheme'?: keyof Colors;
    'data-testid'?: string;
    'disabled'?: boolean;
    'isLoading'?: boolean;
    'label'?: string;
    'onClick'?: (args?: any) => void;
    'size'?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    'variant'?:
      | 'ghost'
      | 'solid'
      | 'outline'
      | 'link'
      | 'unstyled'
      | 'blueGradient'
      | 'pinkGradient';
  };

const StyledButton = styled('button', { shouldForwardProp })(
  space,
  layout,
  typography,
  width,
  (props: Props & { colorScheme: keyof Colors } & { color: keyof Colors }) => ({
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&:hover': {
      filter: 'brightness(95%)',
      transition: '.1s',
    },
    'appearance': 'none',
    'border': 'none',
    'borderRadius': '26.5px',
    'cursor': props.isLoading ? 'not-allowed' : 'pointer',
    'display': 'block',
    'fontFamily': 'inherit',
    'fontWeight': 400,
    'lineHeight': 1,
    'pointerEvents': props.isLoading ? 'none' : 'all',
    'position': 'relative',
    'svg': {
      animation: 'spin 3s linear infinite',
      fill: 'currentColor',
    },
    'transition': '.1s',
    'verticalAlign': 'middle',
  }),
  (props) =>
    variant({
      variants: {
        blueGradient: {
          '&:disabled': {
            backgroundColor: (theme: Theme) => theme.colors.disabled,
            backgroundImage: 'none',
            borderColor: (theme: Theme) => theme.colors.disabled,
            filter: 'none',
          },
          'backgroundImage':
            'linear-gradient(99deg, #37cfdc -3%, #37cfdc 7%, #5b87e5 100%)',
          'border': '1px solid',
          'borderColor': 'none',
          'color': 'white',
        },
        ghost: {
          '&:disabled': {
            backgroundColor: 'white',
            borderColor: (theme: Theme) => theme.colors.disabled,
            color: (theme: Theme) => theme.colors.disabled,
            filter: 'none',
          },
          '&:hover': {
            backgroundColor: (theme: Theme) =>
              // @ts-ignore
              getRgba(theme.colors[props.colorScheme], 0.05),
          },
          'backgroundColor': 'white',
          'color': (theme: Theme) => theme.colors[props.colorScheme],
        },
        link: {
          '&:disabled': {
            backgroundColor: 'white',
            borderColor: (theme: Theme) => theme.colors.disabled,
            color: (theme: Theme) => theme.colors.disabled,
            filter: 'none',
          },
          '&:hover': {
            background: 'white',
            filter: 'none',
            textDecoration: 'underline',
          },
          'backgroundColor': 'white',
          'borderRadius': '0px !important',
          'color': (theme: Theme) => theme.colors[props.colorScheme],
          'padding': '0px !important',
        },
        outline: {
          '&:disabled': {
            backgroundColor: 'white !important',
            borderColor: (theme: Theme) => theme.colors.disabled,
            color: (theme: Theme) => theme.colors.disabled,
            filter: 'none',
          },
          '&:hover': {
            backgroundColor: (theme: Theme) =>
              // @ts-ignore
              getRgba(theme.colors[props.colorScheme], 0.05),
          },
          'backgroundColor': 'white',
          'border': '1px solid',
          'borderColor': (theme: Theme) => theme.colors[props.colorScheme],
          'color': (theme: Theme) => theme.colors[props.colorScheme],
        },
        pinkGradient: {
          '&:disabled': {
            backgroundColor: (theme: Theme) => theme.colors.disabled,
            backgroundImage: 'none',
            borderColor: (theme: Theme) => theme.colors.disabled,
            filter: 'none',
          },
          'backgroundImage': 'linear-gradient(95deg, #a9b9f2 6%, #d55289 100%)',
          'border': '1px solid',
          'borderColor': 'none',
          'color': 'white',
        },
        solid: {
          '&:disabled': {
            backgroundColor: (theme: Theme) => theme.colors.disabled,
            borderColor: (theme: Theme) => theme.colors.disabled,
            filter: 'none',
          },
          'backgroundColor': (theme: Theme) => theme.colors[props.colorScheme],
          'border': '1px solid',
          'borderColor': (theme: Theme) => theme.colors[props.colorScheme],
          'color': (theme: Theme) => theme.colors[props.color],
        },
        unstyled: {
          backgroundColor: 'transparent',
          borderRadius: '0px !important',
          color: 'inherit',
          padding: '0 !important',
        },
      },
    }),
  () => {
    return variant({
      prop: 'size',
      variants: {
        lg: {
          fontSize: 16,
          padding: `14px 24px`,
        },
        md: {
          fontSize: [16, 18],
          padding: `12px 24px`,
        },
        sm: {
          fontSize: 16,
          padding: `10px 24px`,
        },
        xl: {
          fontSize: [16, 18],
          padding: '16px 40px',
        },
        xs: {
          fontSize: 12,
          padding: '10px 20px',
        },
      },
    });
  }
);

const LoadingSpinner = () => (
  <svg viewBox="0 0 72 74" xmlns="http://www.w3.org/2000/svg">
    <path
      clipRule="evenodd"
      d="M37.09 0c-3.514 0-6.363 2.849-6.363 6.364 0 3.514 2.849 6.363 6.364 6.363 3.515 0 6.364-2.849 6.364-6.363C43.455 2.849 40.605 0 37.09 0zM21.182 4.773c-3.222 0-5.833 2.611-5.833 5.833s2.61 5.833 5.833 5.833c3.222 0 5.833-2.611 5.833-5.833s-2.611-5.833-5.833-5.833zM9.515 16.97c-2.93 0-5.303 2.374-5.303 5.303s2.374 5.303 5.303 5.303 5.303-2.374 5.303-5.303c0-2.93-2.374-5.303-5.303-5.303zM10.045 38.181c0-2.635-2.137-4.772-4.772-4.772C2.636 33.41.5 35.546.5 38.181c0 2.637 2.136 4.773 4.773 4.773 2.635 0 4.772-2.136 4.772-4.773zM9.514 49.848c-2.343 0-4.242 1.9-4.242 4.243 0 2.343 1.9 4.242 4.242 4.242 2.344 0 4.243-1.899 4.243-4.242 0-2.344-1.9-4.243-4.243-4.243zM21.18 62.045c-2.05 0-3.711 1.662-3.711 3.712 0 2.051 1.662 3.713 3.712 3.713 2.05 0 3.712-1.662 3.712-3.713 0-2.05-1.662-3.712-3.712-3.712zM37.09 66.818c-1.757 0-3.182 1.425-3.182 3.182s1.425 3.18 3.182 3.18 3.182-1.423 3.182-3.18c0-1.757-1.425-3.182-3.182-3.182zM53 63.106c-1.464 0-2.651 1.187-2.651 2.651 0 1.465 1.187 2.652 2.65 2.652 1.465 0 2.652-1.187 2.652-2.652 0-1.464-1.187-2.651-2.651-2.651zM64.666 51.97c-1.171 0-2.121.95-2.121 2.121s.95 2.121 2.12 2.121c1.173 0 2.122-.95 2.122-2.12 0-1.173-.95-2.122-2.121-2.122zM68.908 36.591c-.879 0-1.59.712-1.59 1.59 0 .88.711 1.592 1.59 1.592.878 0 1.591-.713 1.591-1.592 0-.878-.713-1.59-1.59-1.59zM53 11.136c.293 0 .53-.237.53-.53 0-.293-.237-.53-.53-.53-.293 0-.53.237-.53.53 0 .293.237.53.53.53zM64.666 23.334c.587 0 1.062-.476 1.062-1.061s-.475-1.061-1.061-1.061c-.585 0-1.062.476-1.062 1.06 0 .587.477 1.062 1.062 1.062z"
      fillRule="evenodd"
    />
  </svg>
);

const Button = forwardRef<HTMLButtonElement | null, Props>(function ButtonRef(
  {
    children,
    color = 'white',
    colorScheme = 'pink',
    isLoading,
    label,
    size = 'md',
    variant = 'solid',
    ...rest
  },
  ref
) {
  const loadingSize = {
    lg: '18px',
    md: '16px',
    sm: '15px',
    xl: '18px',
    xs: '15px',
  };
  return (
    <StyledButton
      color={color}
      colorScheme={colorScheme}
      isLoading={isLoading}
      ref={ref}
      size={size}
      type="button"
      variant={variant}
      {...rest}
    >
      <Flex as="span" justifyContent="center">
        <Box as="span">{children || label}</Box>
        {isLoading && (
          <Box
            as="span"
            data-testid="loading-spinner"
            ml="12px"
            // @ts-ignore
            width={loadingSize[size]}
          >
            <LoadingSpinner />
          </Box>
        )}
      </Flex>
    </StyledButton>
  );
});

export default Button;
