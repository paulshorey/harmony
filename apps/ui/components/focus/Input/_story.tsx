import Input from '@ps/ui/components/focus/Input';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const InputStory = (props) => {
  const style = `margin: 0 0.875rem 0.875rem 0;`;
  return (
    <>
      <Input {...props} ss={style} placeholder="Enter your username" />

      <Input
        {...props}
        ss={style}
        placeholder="Enter your username"
        prefix={<UserOutlined />}
        suffix={<InfoCircleOutlined />}
      />

      <Input
        {...props}
        ss={style}
        placeholder="Enter your username"
        prefix={'http://'}
        suffix={'.com'}
      />
    </>
  );
};

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
