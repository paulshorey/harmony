import React from 'react';
import { withBlock, Props as BlockProps } from '@ps/ui/components/Block';
import CenterChildrenX from '../CenterChildrenX';

const Container = withBlock({
  componentName: 'DropdownContainer',
  as: 'span',
  ss: (props) => {
    return `
    cursor: pointer;
    position: relative;
    display:inline-block;

    /*
     * Open menu
     */
    &:focus-within,
    &:focus
    ${!props.click ? ', &:hover' : ''} {
      [role="menu"] {
        max-height: 50vh;
      }
    }

    /*
     * Dropdown
     */ 
    [data-component="CenterChildrenX"] {
      position: absolute;
      right:0;
      max-width:100%;
    }
    [role="menu"] {
      max-height: 0;
      overflow: visible;
      overflow-y: hidden;
      transition: max-height 0.5s ease-in-out;
      min-width: 100%;
      ${styleMenuPosition(props)}
    }
  `;
  },
});

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
 * This component does not add any tabIndex to any elements or children. Do that yourself if not using anchors or buttons. This component does add a [role="menu"] to the dropdown menu container. So, add [role="menuitem"] to the items you pass to props.menu.
 */
const Component: React.FC<Props> = ({ menu, children, ...props }) => (
  <Container {...props}>
    {children}
    {!props.left && !props.right ? (
      <CenterChildrenX>
        <div role="menu">{menu}</div>
      </CenterChildrenX>
    ) : (
      <div role="menu">{menu}</div>
    )}
  </Container>
);

export default Component;

// Helper: CSS snippet builder
const styleMenuPosition = ({ left, right, top, bottom }) => {
  // Y: by default, it will float down below the children
  let placementYStyle = '';
  if (top) {
    // optionally, it can float down from the top edge, covering the children
    placementYStyle = 'top: 0;';
  } else if (bottom) {
    // optionally, it can float up from the bottom edge, covering the children
    placementYStyle = 'bottom: 0;';
  } else {
    placementYStyle = 'margin-top: 0.25rem;';
  }
  // X: by default, it will be centered to the children content
  if (left) {
    // optionally, it can be aligned to the left edge of the children
    return `
      ${placementYStyle};
      left:0;
      right:auto;
      position:absolute;
      text-align:left;
    `;
  }
  if (right) {
    // optionally, it can be aligned to the right edge of the children
    return `
      ${placementYStyle};
      right:0;
      left:auto;
      position:absolute;
      text-align:right;
    `;
  }
  return '';
};
