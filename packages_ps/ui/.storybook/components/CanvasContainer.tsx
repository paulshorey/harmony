import { withBox } from '@ps/ui/components/content/Box';

const CanvasContainer = withBox({
  className: 'bgGradient',
  color: 'purple',
  ss: (props) =>
    `
    margin:0;
    padding:1.75rem 1.5rem 2.25rem;
    display:block;
    overflow:auto;
    `,
});

export default CanvasContainer;
