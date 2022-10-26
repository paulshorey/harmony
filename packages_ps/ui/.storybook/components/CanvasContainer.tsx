import { withBlock } from '@ps/ui/components/content/Block';

const CanvasContainer = withBlock({
  bggradient: 'purple',
  textcolor: 'light',
  ss: `
    margin:0;
    padding:1.75rem 1.5rem 2.25rem;
    display:block;
    `,
  ssPhone: `padding-left: 0.75rem; padding-right: 0.75rem;`,
});

export default CanvasContainer;
