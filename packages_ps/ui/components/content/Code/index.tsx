import { Props as BoxProps } from '@ps/ui/components/content/Box';
import { memo } from 'react';
import useComponentWithProps12 from '@ps/ui/hooks/useComponentWithProps12';
import variants from './variants';
import useStyleProps from '@ps/ui/styles/useStyleProps';
import CodeComponent, { Props as CodeProps } from './Code';

export type Props = BoxProps & CodeProps;

export const Component = (props: Props) => {
  const [Styled, otherProps]: any = useStyleProps(
    props,
    'div',
    'Code',
    variants
  );
  const {
    code,
    showNumbers,
    language,
    prismTheme,
    'data-variants': dataVariants,
    ...containerProps
  } = otherProps;
  return (
    <Styled data-variants={dataVariants} {...containerProps}>
      <CodeComponent
        code={code}
        language={language}
        prismTheme={prismTheme}
        showNumbers={showNumbers}
        data-variants={dataVariants}
      />
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCode } from 'components/content/Code';
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
