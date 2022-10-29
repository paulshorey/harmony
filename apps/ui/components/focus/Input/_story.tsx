import Input from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import Button from '../Button';

const InputStory = (props) => (
  <Input
    {...props}
    placeholder="Enter your username"
    prefix={<UserOutlined />}
    suffix={<InfoCircleOutlined />}
  />
);

export default (props) => (
  <CanvasContainer>
    <CanvasStoryPadding>
      <InputStory {...props} />
    </CanvasStoryPadding>
    <CanvasStoryPadding bgcolor="light" textcolor="purple">
      <InputStory {...props} />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export const code = ``;
