import Box, { Props as BoxProps } from '@ps/ui/components/content/atoms/Box';
// import useCopyToClipboard from '@ps/ui/hooks/useCopyToClipboard';
import { FC, memo, forwardRef, ReactElement } from 'react';
import useComponentWithProps12 from '@ps/ui/hooks/useComponentWithProps12';
import variants from './variants';
import useStyleProps from '@ps/ui/styles/useStyleProps';
import ImportComponent, { Props as CodeProps } from './Code';

// Accepts these props:
export type Props = BoxProps & CodeProps;

export const Component: (props: Props) => ReactElement = ({ ...props }) => {
  const [Styled, otherProps]: any = useStyleProps(
    props,
    'div',
    'Code',
    variants
  );
  // Real component lives in sibling file. This file just wraps it in a styled component and packages for export/storybook.
  return (
    <Styled>
      <ImportComponent {...otherProps} />
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCode } from 'components/content/molecules/Code';
 * const Code = withCode({ ...thesePropsWillApplyToAllInstances });
 * <Code {...optionalUniquePropsForCurrentInstance} />
 */
export const withCode = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Code, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Code" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Code = memo(Component);
export default Code;
