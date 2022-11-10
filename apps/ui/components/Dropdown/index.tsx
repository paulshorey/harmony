import React, { forwardRef, memo } from 'react';
import { Props as BlockProps } from '@ps/ui/components/Block';
import CenterChildrenX from '../CenterChildrenX';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import variants from './styles';
import blur from '@ps/ui/helpers/blur';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

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
export const Component: React.FC<Props> = withStyles(
  forwardRef(({ menu, children, ...props }: Props, ref: any) => {
    const handleClick = () => {
      setTimeout(blur, 300);
    };
    return (
      <Styled ref={ref} {...props}>
        {children}
        {!props.left && !props.right ? (
          <CenterChildrenX
            className="Dropdown__menuContainer"
            onClick={handleClick}
          >
            <div tabIndex={0} className="Dropdown__menu" role="menu">
              {menu}
            </div>
          </CenterChildrenX>
        ) : (
          <div
            tabIndex={0}
            className="Dropdown__menu Dropdown__menuContainer"
            role="menu"
            onClick={handleClick}
          >
            {menu}
          </div>
        )}
      </Styled>
    );
  }),
  'Dropdown',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withDropdown is HOC used to predefine common props
 */

export default memo(Component);

export const withDropdown = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('div')``;
