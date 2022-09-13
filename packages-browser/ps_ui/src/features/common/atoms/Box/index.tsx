import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { ElementType, FC, HTMLAttributes, memo, ReactNode } from 'react';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  BoxShadowProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export type BoxProps = ContainerProps &
  SpaceProps &
  BoxShadowProps &
  TypographyProps &
  ColorProps &
  FlexboxProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  LayoutProps & {
    as?: ElementType;
    children?: ReactNode;
    css?: any;
    href?: string;
    htmlFor?: string;
    name?: string;
    rel?: string;
    target?: string;
    type?: string;
    value?: string | number | readonly string[] | undefined;
  };

const Box: FC<BoxProps> = styled('div', {
  shouldForwardProp,
})(
  space,
  layout,
  typography,
  variant,
  color,
  flexbox,
  border,
  background,
  position
);

export default memo(Box);
