import {
  forwardRef,
  memo,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import ssComponentPropsType from '@ps/ui/types/component';
import { styledTags } from '@ps/ui/types/component';
import variants from './variants';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';
const svgDir = require.context('!@svgr/webpack!');

export type Props = HTMLAttributes<HTMLDivElement> &
  ssComponentPropsType & {
    /**
     * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
     */
    as?: styledTags;
    /**
     * One of the files available in `@ps/ui/components/media/Svg/svg` (no path or extension).
     */
    svg?: string;
  } & Record<string, any>;

/**
 * Svg graphic will be lazy loaded - after the window has rendered. Then will render a \<span> container with \<svg> child.
 */
export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = ({ as, svg = '', ...props }, ref) => {
  const [SvgFileImport, set_SvgFileImport] = useState(null);

  useEffect(() => {
    try {
      const Svg = svgDir(`./files/${svg}.svg`).default;
      set_SvgFileImport(Svg);
    } catch (error) {
      console.warn(error);
    }
  }, [svg]);

  const [Styled, otherProps] = useStyledComponent(
    props,
    as || 'span',
    'Svg',
    variants
  );
  return (
    <Styled {...otherProps} ref={ref}>
      {SvgFileImport}
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withSvg } from 'components/content/Svg';
 * const Svg = withSvg({ ...thesePropsWillApplyToAllInstances });
 * <Svg {...optionalUniquePropsForCurrentInstance} />
 */
export const withSvg = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Svg, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Svg" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Svg = memo(forwardRef(Component));
export default Svg;
