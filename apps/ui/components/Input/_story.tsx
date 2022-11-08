import React from 'react';
import Input from '@ps/ui/components/Input';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import Popover from 'antd/es/popover';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

const InputStory = (props) => {
  useShowStorybookCode();
  const style = `margin: 0 0.875rem 0.875rem 0;width:90%;`;
  return (
    <>
      <Input
        {...props}
        ssAll={style}
        placeholder="Full name"
        allowClear={true}
        value="Click x to clear"
      />

      <Input
        {...props}
        ssAll={style}
        placeholder="Username"
        prefix={<UserOutlined />}
        suffix={
          <Popover content={<div className="noWrap">Hello tooltip!</div>}>
            <InfoCircleOutlined />
          </Popover>
        }
      />

      <Input
        {...props}
        ssAll={style}
        placeholder="your-website"
        prefix={'http://'}
        suffix={'.com'}
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

export const code = `import Input from '@ps/ui/components/Input';

<Input
  {...props}
  ssAll={style}
  placeholder="Full name"
  allowClear={true}
  value="Click x to clear"
/>`;
