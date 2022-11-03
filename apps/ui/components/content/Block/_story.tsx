import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import Block from '.';
import CodeInline from '../CodeInline';

export default function (props) {
  useShowStorybookCode();
  return (
    <CanvasContainer>
      <CanvasStoryPadding>
        <Block {...props}>
          <p>
            A container for displaying any kind of content. Default styles added
            are{' '}
            <CodeInline
              variant="text"
              textcolor="accent"
              code={`position:relative;`}
            />{' '}
            and{' '}
            <CodeInline
              variant="text"
              textcolor="accent"
              code={`display:block;`}
            />
            . To set others, pass{' '}
            <CodeInline variant="text" textcolor="accent" code={`props.ss`} />{' '}
            or{' '}
            <CodeInline
              variant="text"
              textcolor="accent"
              code={`props.variant`}
            />
            .
          </p>
          <p>
            Pass{' '}
            <CodeInline
              variant="text"
              textcolor="accent"
              code={`props.as="p"`}
            />{' '}
            to render a paragraph, or any other tag like article, section, etc.
          </p>
        </Block>
      </CanvasStoryPadding>
    </CanvasContainer>
  );
}

export const code = `import Block from '@ps/ui/components/content/Block';

<Block {...props}>
  <p>
    The most basic building block. Used as a "container" for styling
    content. Use any <code>ss</code> props (see below).
  </p>
  <p>
    Pass variant to use a predefined style such as "card", "page", or
    "article".
  </p>
</Block>`;
