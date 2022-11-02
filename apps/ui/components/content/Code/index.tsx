import { memo, HTMLAttributes } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import CodeComponent, { Props as CodeProps } from './Code';
import styleProps from '@ps/ui/types/styles';

export type Props = CodeProps & styleProps & HTMLAttributes<HTMLDivElement>;

export const Component = (props) => {
  const [Styled, otherProps]: any = useStyledOriginal(
    props,
    'div',
    'Code',
    variants
  );
  const {
    code,
    collapsed,
    showNumbers,
    language,
    prismTheme,
    ...containerProps
  } = otherProps;

  return (
    <Styled {...containerProps}>
      <CodeComponent
        code={code}
        variant={props.variant}
        language={language}
        prismTheme={prismTheme}
        showNumbers={showNumbers}
        collapsed={collapsed}
      />
    </Styled>
  );
};

/*
 * Like StyledComponents' styled.div`` but with added functionality:
 * import { withCode } from 'components/content/Code';
 * const Code = withCode({ ...thesePropsWillApplyToAllInstances });
 * <Code {...optionalUniquePropsForCurrentInstance} />
 */
export const withCode = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Code, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Code" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Code = memo(Component);
export default Code;
