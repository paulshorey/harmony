import React, { memo, HTMLAttributes, forwardRef } from 'react';
import variants from './styles';
import CodeComponent, { Props as CodeProps } from './Code';
import styleProps from '@ps/ui/types/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = CodeProps & styleProps & HTMLAttributes<HTMLDivElement>;

export const Component: React.FC<Props> = withStyles(
  forwardRef(
    (
      {
        title,
        code,
        collapsed,
        showNumbers,
        language,
        prismTheme,
        ...props
      }: Props,
      ref: any
    ) => {
      return (
        <Styled ref={ref} {...props}>
          <CodeComponent
            title={title}
            code={code}
            variant={props.variant}
            language={language}
            prismTheme={prismTheme}
            showNumbers={showNumbers}
            collapsed={collapsed}
          />
        </Styled>
      );
    }
  ),
  'CenterChildrenY',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withCenterChildrenY is HOC used to predefine common props
 */

export default memo(Component);

export const withCenterChildrenY = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('div')``;
