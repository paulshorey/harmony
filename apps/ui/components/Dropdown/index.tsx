import React, { forwardRef, memo } from 'react';
import { Props as BlockProps } from '@ps/ui/components/Block';
import CenterChildrenX from '../CenterChildrenX';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import variants from './styles';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';
import style_data_set from '@ps/ui/helpers/style_data_set';

export type Props = {
  /**
   * The content of the dropdown
   */
  menu?: React.ReactNode;
  /**
   * Trigger the dropdown on click instead of hover
   */
  click?: boolean;
  /**
   * Align the dropdown to the left edge of the children
   */
  left?: boolean;
  /**
   * Align the dropdown to the top edge of the children
   */
  right?: boolean;
  /**
   * Align the dropdown to the top edge of the children
   */
  top?: boolean;
  /**
   * Align the dropdown to the bottom edge of the children
   */
  bottom?: boolean;
} & BlockProps;

/**
 * IMPORTANT: This component does NOT add tabIndex to any elements. You can add `tabIndex: 0` yourself to the target and/or to menu items to make them keyboard accessible.
 *
 * This component does add a [role="menu"] to the dropdown menu container. So, add [role="menuitem"] to the items you pass to props.menu.
 */
export const Component = ({ menu, children, ...props }: Props, ref?: any) => {
  const styleDataSet = style_data_set('DropdownContainer', props);
  return (
    <StyledComponent ref={ref} tabIndex={0} {...props} {...styleDataSet}>
      {children}
      {!props.left && !props.right ? (
        <CenterChildrenX>
          <div data-component="Dropdown__menu" role="menu">
            {menu}
          </div>
        </CenterChildrenX>
      ) : (
        <div data-component="Dropdown__menu" role="menu">
          {menu}
        </div>
      )}
    </StyledComponent>
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withDropdown = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "span" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled.span`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      variants,
    })}
`;
