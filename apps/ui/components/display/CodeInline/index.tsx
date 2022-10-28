import { forwardRef, memo, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import Box, { Props as BoxProps } from '@ps/ui/components/display/Box';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

export type Props = {
  code?: string;
} & BoxProps;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, children, ...props },
  ref
) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    'code',
    'CodeInline',
    variants
  );
  return (
    <Styled ref={ref} {...otherProps}>
      <span>{props.code || children}</span>
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCodeInline } from 'components/display/CodeInline';
 * const CodeInline = withCodeInline({ ...thesePropsWillApplyToAllInstances });
 * <CodeInline {...optionalUniquePropsForCurrentInstance} />
 */
export const withCodeInline = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(CodeInline, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "CodeInline" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const CodeInline = memo(forwardRef(Component));
export default CodeInline;
