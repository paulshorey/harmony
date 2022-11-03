import { forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import styleProps, { styledTags } from '@ps/ui/types/styles';
import variants from './styles';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import withProps from '@ps/ui/hooks/withProps';

export type Props = {
  /**
   * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
   */
  as?: styledTags;
} & styleProps &
  HTMLAttributes<HTMLSpanElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, ...props },
  ref
) => {
  // Styles
  const styledProps = useStyledProps({
    props,
    componentName: 'Inline',
    variants,
  });
  const Tag = `${as || 'span'}`;
  // @ts-ignore // Tag is the name of an HTML element, but TS thinks it's a component
  return <Tag {...styledProps} ref={ref} />;
};

export default memo(forwardRef(Component));

export const withInline = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
