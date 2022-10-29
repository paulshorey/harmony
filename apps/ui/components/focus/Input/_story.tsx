import Input from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

export default (props) => (
  <CanvasContainer>
    <CanvasStoryPadding>
      <Input
        {...props}
        placeholder="Enter your username"
        prefix={<UserOutlined />}
        suffix={<InfoCircleOutlined />}
      />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export const code = ``;
