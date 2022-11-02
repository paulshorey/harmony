import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import Block from '@ps/ui/components/content/Block';
import { withInline } from '.';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';

export default function (props) {
  useShowStorybookCode();
  const Heading = withInline({
    as: 'h2',
    ss: 'margin:0;',
  });
  const Code = withInline({
    as: 'code',
  });
  return (
    <CanvasContainer bgcolor="light" textcolor="dark">
      <CanvasStoryPadding>
        <Block>
          Text can be used <Heading {...props}> as="h2"</Heading>, or{' '}
          <Code {...props}> as="&lt;code&gt;"</Code>, or as almost any other
          HTML element. By default, it's a span.
        </Block>
      </CanvasStoryPadding>
    </CanvasContainer>
  );
}

export const code = `import { withInline } from '.';
const Heading = withInline({ as: 'h2', ss: 'margin:0;', ...props });
const Code = withInline({ as: 'code', ...props });

Text can be used <Heading> as h2</Heading>, or <Code> as &lt;code&gt;</Code>, 
or as any other HTML container element. By default, it's a span.
`;
