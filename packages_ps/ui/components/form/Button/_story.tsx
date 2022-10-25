import { withBlock } from '@ps/ui/components/content/Block';
import SvgIcon from 'components/media/SvgIcon';
import Button from '.';
import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
export default (args: any) => {
  useShowStorybookCode();
  const Content = withBlock({
    ss: 'padding:1rem;',
    bgColor: 'dark',
  });
  return (
    <div>
      <Content bgColor="light" ss="padding-top:2rem;">
        <Button {...args}>Primary</Button>
        <Button variant="outlined" {...args}>
          Outlined
        </Button>
        <Button variant="icon" {...args}>
          <SvgIcon
            svg="sparkle1"
            data-color="light"
            ss="width:100px;height:100px;"
          />
        </Button>
        <Button {...args}>With dropdown arrow</Button>
      </Content>
      <Content bgGradient="dark" ss="padding-bottom:2rem;" color="ondark">
        <Button {...args}>Primary</Button>
        <Button variant="outlined" {...args}>
          Outlined
        </Button>
        <Button variant="icon" {...args}>
          <SvgIcon
            svg="sparkle1"
            data-color="light"
            ss="width:100px;height:100px;"
          />
        </Button>
        <Button {...args}>With dropdown arrow</Button>
      </Content>
    </div>
  );
};

export const code = `import { withBlock } from '@ps/ui/components/content/Block';`;
