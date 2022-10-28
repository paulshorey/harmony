import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import Box from '.';
import CodeInline from '../CodeInline';

export default function (props) {
  useShowStorybookCode();
  return (
    <CanvasContainer>
      <CanvasStoryPadding>
        <Box as="article" {...props}>
          <p>
            A container for displaying any kind of content. No default CSS is
            added except for{' '}
            <CodeInline
              variant="text"
              textcolor="accent"
              code={`position:relative`}
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
            to render a block, or{' '}
            <CodeInline
              variant="text"
              textcolor="accent"
              code={`props.as="span"`}
            />{' '}
            to render an inline element.
          </p>
          <p>
            Use <code>ss</code> props (see below) to style this element and its
            children.
          </p>
        </Box>
      </CanvasStoryPadding>
    </CanvasContainer>
  );
}

export const code = `import Box from 'harmonyui/components/display/Box';

<Box {...props}>
    <p>
        The most basic building block. Used as a "container" for styling
        content. Use any <code>ss</code> props (see below).
      </p>
      <p>
        Pass variant to use a predefined style such as "card", "page", or
        "article".
      </p>
    </Box>
`;
