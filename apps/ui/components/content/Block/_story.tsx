import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import Block, { withBlock } from '.';

export default function (props: any) {
  useShowStorybookCode();
  let showContainer = true;
  if (props.variants.includes('page') || props.variants.includes('article')) {
    showContainer = false;
  }
  let Content = (
    <Block {...props}>
      <p>
        The most basic building block. Used as a "container", for styling
        content. Use any <code>ss</code> props (see below).
      </p>
      <p>
        Pass variants to use predefined block styles. Use predefined CSS display
        = "card", "article", "page"
      </p>
      <p>
        To render display:inline content like text, better to use the{' '}
        <code>Text</code> component.
      </p>
    </Block>
  );
  if (showContainer) {
    return <CanvasContainer>{Content}</CanvasContainer>;
  } else {
    return Content;
  }
}

export const code = `import Block from 'harmonyui/components/content/Block';

<Block {...props}>
    <p>
        The most basic building block. Used as a "container", for styling
        content. Use any <code>ss</code> props (see below).
      </p>
    </Block>
`;
