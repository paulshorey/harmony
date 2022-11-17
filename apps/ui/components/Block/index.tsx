import React, { memo, HTMLAttributes, forwardRef } from 'react';
import { styleProps } from '@ps/ui/types/styles';
import variants from './styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import { styledTags } from '../../types/styles';

export type Props = {
  /**
   * HTML element tag name to render. Styles and functionality will not be changed, but the HTML tag will affect the default styles.
   */
  as?: styledTags;
} & styleProps &
  HTMLAttributes<HTMLDivElement>;

/*
 * Most basic element (like a div) for rendering a block of content
 */
export const Component = (props: Props, ref: any) => {
  const { as = 'div', ...rest } = props;
  const Tag = `${as}`;
  // @ts-ignore - Tag is a div or other valid html element
  return <Tag ref={ref} {...rest} />;
};

/*
 * (1) default export is normal component ready to use (2) withBlock is HOC used to predefine common props
 */
const Styled: React.FC<Props> = withStyles(
  forwardRef(Component),
  'Block',
  variants
);

export default memo(Styled);

export const withBlock = (props: Props) =>
  memo(withCombinedProps(Styled, props));
