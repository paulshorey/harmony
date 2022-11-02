import { FC, forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import styleProps, { styledTags } from '@ps/ui/types/styles';
import variants from './variants';
import useStyledProps from '@ps/ui/styles/useStyledProps';

export type Props = HTMLAttributes<HTMLDivElement> &
  styleProps & {
    /**
     * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
     */
    as?: styledTags;
  } & Record<string, any>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { as, ...props },
  ref
) => {
  /*
   * Styles
   */
  const styledProps = useStyledProps({
    props,
    componentName: 'Inline',
    variants,
  });
  const Tag = `${as || 'span'}`;
  // @ts-ignore // Tag is the name of an HTML element, but TS thinks it's a component
  return <Tag {...styledProps} ref={ref} />;
};

/*
 * Like StyledComponents' styled.div`` but with added functionality:
 * import { withInline } from 'components/content/Inline';
 * const Inline = withInline({ ...thesePropsWillApplyToAllInstances });
 * <Inline {...optionalUniquePropsForCurrentInstance} />
 */
export const withInline = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Inline, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Inline" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Inline = memo(forwardRef(Component));
export default Inline;
