import { withBlock } from '@ps/ui/components/content/Block';
import Button from '.';
import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
export default (args: any) => {
  useShowStorybookCode();
  const Content = withBlock({
    ss: 'padding:1rem;',
    variant: 'bgWhite',
  });
  return (
    <div>
      <Content variant="bgWhite" ss="padding-top:2rem;">
        <Button {...args}>Button text</Button>
        <Button {...args}>With icon</Button>
        <Button {...args}>Icon</Button>
        <Button {...args}>With dropdown arrow</Button>
      </Content>
      <Content
        variant="bgGradient"
        ss="padding-bottom:2rem;"
        data-color="ondark"
      >
        <Button {...args}>Button text</Button>
        <Button {...args}>With icon</Button>
        <Button {...args}>Icon</Button>
        <Button {...args}>With dropdown arrow</Button>
      </Content>
    </div>
  );
};

export const code = `import { withBlock } from '@ps/ui/components/content/Block';`;
