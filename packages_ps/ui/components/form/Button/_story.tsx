import { withBlock } from '@ps/ui/components/content/Block';
import Svg from 'components/media/Svg';
import Button from '.';
import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
export default (args: any) => {
  useShowStorybookCode();
  const Content = withBlock({
    ss: 'padding:1rem; .Button {margin: 0 1rem 1rem 0;}',
    bgcolor: 'purple',
  });
  return (
    <div>
      <Content bgcolor="light" ss="padding-top:2rem;">
        <Button variant="primary" {...args}>
          Primary
        </Button>
        <Button {...args}>Outlined</Button>
        <Button variant="primary icon pulsing" {...args}>
          <Svg svg="sparkle1" ss="width:2rem;height:2rem;" />
        </Button>
        <Button variant="primary icon spinning" {...args}>
          <Svg svg="sparkle1" ss="width:2rem;height:2rem;" />
        </Button>
        <Button {...args}>With dropdown arrow</Button>
      </Content>
      <Content bggradient="purple" ss="padding-bottom:2rem;">
        <Button variant="primary" {...args}>
          Primary
        </Button>
        <Button {...args}>Outlined</Button>
        <Button variant="primary icon pulsing" {...args}>
          <Svg svg="sparkle1" ss="width:2rem;height:2rem;" />
        </Button>
        <Button variant="primary icon spinning" {...args}>
          <Svg svg="sparkle1" ss="width:2rem;height:2rem;" />
        </Button>
        <Button {...args}>With dropdown arrow</Button>
      </Content>
    </div>
  );
};

export const code = `import { withBlock } from '@ps/ui/components/content/Block';`;
