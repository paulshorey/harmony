import Button from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { UserOutlined } from '@ant-design/icons';

export default (props) => (
  <CanvasContainer flex>
    <CanvasStoryPadding bgcolor="light" textcolor="purple">
      <Button icon={<UserOutlined />} {...props} />
    </CanvasStoryPadding>
    <CanvasStoryPadding>
      <Button icon={<UserOutlined />} {...props} />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export const code = ``;
