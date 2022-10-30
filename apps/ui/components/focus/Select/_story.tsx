import React from 'react';
import Input from '@ps/ui/components/focus/Input';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const InputStory = (props) => {
  const style = `margin: 0 0.875rem 0.875rem 0;`;
  return (
    <>
      <Input
        {...props}
        ssAll={style}
        placeholder="Full name"
        allowClear={true}
      />

      <Input
        {...props}
        ssAll={style}
        placeholder="Username"
        prefix={<UserOutlined />}
        suffix={<InfoCircleOutlined />}
      />

      <Input
        {...props}
        ssAll={style}
        placeholder="your-website"
        prefix={'http://'}
        suffix={'.com'}
        status="warning"
        onPressEnter={(e) => console.log('pressed enter', e)}
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
