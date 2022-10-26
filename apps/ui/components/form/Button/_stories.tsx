import { withBlock } from '@ps/ui/components/content/Block';
import Button from '.';
import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import DownloadOutlined from '@ant-design/icons/GithubFilled';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';

export const Buttons1 = () => {
  useShowStorybookCode();
  const Content = withBlock({
    ss: 'padding:1rem; .Button {margin: 0 1rem 1rem 0;}',
  });
  const props = {
    size: 'small',
    round: true,
    ss: 'margin: 0 0.875rem 1.125rem 0;',
  };
  return (
    <div>
      <Content bgcolor="light" textcolor="purple" ss="padding-top:2rem;">
        <Button {...props} variant="primary">
          Primary
        </Button>
        <Button {...props}>Outlined</Button>
        <Button {...props} variant="primary" icon={<DownloadOutlined />}>
          Text with icon
        </Button>
        <Button
          {...props}
          variant="primary circle"
          icon={<DownloadOutlined />}
        />
        <Button {...props} variant="primary" loading />
      </Content>
      <Content bggradient="purple" textcolor="light" ss="padding-bottom:2rem;">
        <Button {...props} variant="primary">
          Primary
        </Button>
        <Button {...props}>Outlined</Button>
        <Button
          {...props}
          variant="primary circle"
          icon={<DownloadOutlined />}
        />
        <Button {...props} variant="primary" loading />
      </Content>
    </div>
  );
};

export const code = `import { withBlock } from '@ps/ui/components/content/Block';`;
