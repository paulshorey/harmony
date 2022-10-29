import { css } from '@emotion/react';
import { withBox } from '@ps/ui/components/content/Box';

const CanvasContainer = (props) => {
  let flexStyle = '';
  if (props.flex) {
    flexStyle = `
      margin-left:0;
      margin-right:0;
      padding-right:0 !important;
      padding-left:0 !important;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      > * {
        flex-grow: 1;
      }
    `;
  }

  return withBox({
    bggradient: 'purple',
    textcolor: 'light',
    ss: css`
      margin: -30px -20px;
      padding: 30px 20px;
      display: block;
      ${flexStyle};
    `,
    ssPhone: `padding-left: 0.75rem; padding-right: 0.75rem;`,
  })(props);
};

export default CanvasContainer;
