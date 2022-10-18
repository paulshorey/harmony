import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import Box, { withBox } from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';

export default function (args: any) {
  useShowStorybookCode();
  const Heading = withBox({ as: 'h2', ...args });
  const Code = withBox({ as: 'code', ...args });
  return (
    <CanvasContainer>
      <Box {...args}>
        Box can be used <Heading> as h2</Heading>,{' '}
        <Code> or as &lt;code&gt;</Code>, or as any other HTML container
        element. By default, it's a div.
      </Box>
    </CanvasContainer>
  );
}
