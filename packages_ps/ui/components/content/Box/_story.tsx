import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import Box, { withBox } from '.';

export default function (props: any) {
  useShowStorybookCode();
  const Heading = withBox({
    as: 'h2',
    className: 'textNotice',
    ...props,
  });
  const Code = withBox({
    as: 'code',
    className: 'textNotice',
    ...props,
  });
  return (
    <CanvasContainer color="light">
      <Box>
        Box can be used <Heading> as="h2"</Heading>,{' '}
        <Code> or as="&lt;code&gt;"</Code>, or as almost any other HTML element.
        By default, it's a div.
      </Box>
    </CanvasContainer>
  );
}

export const code = `import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import Box, { withBox } from '.';

const Heading = withBox({ as: 'h2', ...props });
const Code = withBox({ as: 'code', ...props });

<CanvasContainer color="light">
  <Box>
    Box can be used <Heading> as h2</Heading>,{' '}
    <Code> or as &lt;code&gt;</Code>, or as any other HTML container
    element. By default, it's a div.
  </Box>
</CanvasContainer>
`;
