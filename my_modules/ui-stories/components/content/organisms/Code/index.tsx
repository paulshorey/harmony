import Box, { Props as BoxProps } from "@/components/content/atoms/Box";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { FC, memo, forwardRef, ReactElement } from "react";
import useComponentWithProps12 from "@/hooks/useComponentWithProps12";
import variants from "./variants";
import useStyleProps from "@/styles/useStyleProps";

export type Props = BoxProps & {
  string: string;
};

export const Component: (props: Props, ref?: ReactForwardedRef) => ReactElement = ({ as = "code", string, ...props }, ref) => {
  const [Styled, otherProps] = useStyleProps(props, as || "div", "Card", variants);
  const [copied, copyToClipboard] = useCopyToClipboard();
  return (
    <Styled {...otherProps} as={as} ref={ref}>
      {string}
      <button
        type="button"
        onClick={() => {
          copyToClipboard(string);
        }}
      >
        {copied ? "copied" : "copy"}
      </button>
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withCard } from 'components/content/molecules/Card';
 * const Card = withCard({ ...thesePropsWillApplyToAllInstances });
 * <Card {...optionalUniquePropsForCurrentInstance} />
 */
export const withCard = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Card, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Card" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Card = memo(forwardRef(Component));
export default Card;
