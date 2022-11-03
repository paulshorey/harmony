import { css } from '@emotion/react';
import { withBlock } from '@ps/ui/components/content/Block';

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

  const Block = withBlock({
    bggradient: 'purple',
    textcolor: 'light',
    ss: css`
      margin: -30px -20px;
      padding: 30px 20px;
      display: block;
      ${flexStyle};
    `,
  });
  
  return <Block {...props} />
};

export default CanvasContainer;
