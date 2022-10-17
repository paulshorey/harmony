import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import Box, { Code, withBox } from '.';
import { CanvasContainer } from '@ps/ui/.storybook/components/Components';

export default function (args: any) {
  useShowStorybookCode();
  const U = withBox({ as: 'u', ...args });
  return (
    <CanvasContainer as="p">
      Box can be used as a <Code>div</Code>{' '}
      <U {...args}>
        or as a <Code>u</Code>
      </U>{' '}
      or as any other HTML container element.
    </CanvasContainer>
  );
}
