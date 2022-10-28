import { withBox } from '../../components/display/Box';

const CanvasContainer = withBox({
  bggradient: 'purple',
  textcolor: 'light',
  ss: `
    margin: -30px -20px;
    padding: 30px 20px;
    display:block;
    `,
  ssPhone: `padding-left: 0.75rem; padding-right: 0.75rem;`,
});

export default CanvasContainer;
