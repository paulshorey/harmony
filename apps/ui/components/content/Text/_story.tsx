import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import Box from '@ps/ui/components/content/Box';
import { withText } from '.';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';

export default function (props) {
  useShowStorybookCode();
  const Heading = withText({
    as: 'h2',
    ss: 'margin:0;',
  });
  const Code = withText({
    as: 'code',
  });
  return (
    <CanvasContainer bgcolor="light" textcolor="dark">
      <CanvasStoryPadding>
        <Box>
          Text can be used <Heading {...props}> as="h2"</Heading>, or{' '}
          <Code {...props}> as="&lt;code&gt;"</Code>, or as almost any other
          HTML element. By default, it's a span.
        </Box>
      </CanvasStoryPadding>
    </CanvasContainer>
  );
}

export const code = `import { withText } from '.';
const Heading = withText({ as: 'h2', ss: 'margin:0;', ...props });
const Code = withText({ as: 'code', ...props });

Text can be used <Heading> as h2</Heading>, or <Code> as &lt;code&gt;</Code>, 
or as any other HTML container element. By default, it's a span.
`;
