import React, { forwardRef, memo, HTMLAttributes } from 'react';
import variants from './styles';
import styleProps from '@ps/ui/types/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = {
  /**
   * The string to display. Special characters will be automatically escaped when rendered to HTML.
   */
  code?: string;
} & styleProps &
  HTMLAttributes<HTMLDivElement>;

export const Component: React.FC<Props> = withStyles(
  forwardRef(({ code, children, ...props }: Props, ref: any) => {
    return (
      <Styled ref={ref} {...props}>
        <span>{code || children}</span>
      </Styled>
    );
  }),
  'CodeInline',
  variants
);

/*
 * (1) default export is normal component ready to use (2) CodeInline is HOC used to predefine common props
 */

export default memo(Component);

export const withCodeInline = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('code')``;
