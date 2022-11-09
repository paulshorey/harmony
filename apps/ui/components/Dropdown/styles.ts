export default {
  default: (props) => `
  cursor: pointer;
  position: relative;
  display:inline-block;

  /*
   * Open menu
   */
  &:focus-within,
  &:focus
  ${!props.click ? ', &:hover' : ''} {
    [data-component="Dropdown__menu"] {
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
  [data-component="Dropdown__menu"] {
    max-height: 0;
    overflow: visible;
    overflow-y: hidden;
    transition: max-height 0.5s ease-in-out;
    min-width: 100%;
    margin-top: 0.33rem;
    ${styleMenuPosition(props)}
  }
  `,
};

// Helper: CSS snippet builder
const styleMenuPosition = ({ left, right, top, bottom }) => {
  // Y: by default, it will float down below the children
  let placementYStyle = '';
  if (top) {
    // optionally, it can float down from the top edge, covering the children
    placementYStyle = 'top: 0;margin-top:0;';
  } else if (bottom) {
    // optionally, it can float up from the bottom edge, covering the children
    placementYStyle = 'bottom: 0;margin-top:0;';
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
