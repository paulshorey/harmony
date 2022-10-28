import Box from '@ps/ui/components/display/Box';
import { withButton } from '.';
import DownloadOutlined from '@ant-design/icons/GithubFilled';

export const Buttons = (props) => {
  const Button = withButton({
    size: 'small',
    round: true,
    ss: 'margin: 0 0.875rem 1.125rem 0;',
  });
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button>Outlined</Button>
      <Button variant="primary" icon={<DownloadOutlined />}>
        Text with icon
      </Button>
      <Button variant="primary circle" icon={<DownloadOutlined />} />
      <Button variant="primary" loading />
    </>
  );
};
