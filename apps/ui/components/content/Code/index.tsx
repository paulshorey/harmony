import { memo, HTMLAttributes, forwardRef } from 'react';
import variants from './styles';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import CodeComponent, { Props as CodeProps } from './Code';
import styleProps from '@ps/ui/types/styles';
import withProps from '@ps/ui/hooks/withProps';

export type Props = CodeProps & styleProps & HTMLAttributes<HTMLDivElement>;

export const Component = (props: Props, ref?: any) => {
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
    <Styled {...containerProps} ref={ref}>
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

export default memo(forwardRef(Component));

export const withCode = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
