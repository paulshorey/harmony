import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import Block, { withBlock } from '.';

export default function (props: any) {
  useShowStorybookCode();
  let showContainer = true;
  if (
    props.variants.includes('page') ||
    props.variant.includes('page') ||
    props.variants.includes('article') ||
    props.variant.includes('article')
  ) {
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
        = "card", "flex", "article", "page", etc.
      </p>
      <p>
        To render display:inline content like text, better use the{' '}
        <code>Text</code> component. It has different styles, like text
        gradients.
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

<Block {...otherProps}>
    <p>
      The most basic building block. Used as a "container", for styling content. Use any <code>ss</code> props (see below). 
    </p>
    <p>
    Pass variants to use predefined styles. Use
      it as a "card" in an app, or an "article" wrapper in a website.
    </p>
  </Block>
`;
