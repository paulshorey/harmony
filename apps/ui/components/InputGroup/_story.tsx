import React from 'react';
import InputGroup from '@ps/ui/components/InputGroup';
import Input from '@ps/ui/components/Input';
import Button from '@ps/ui/components/Button';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { CopyOutlined } from '@ant-design/icons';
import Tooltip from 'antd/es/tooltip';
import Select, { Option } from '../Select';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

const InputStory = (props) => {
  useShowStorybookCode();
  const childprops = {
    round: true,
    ...props,
  };
  const style = ``;
  return (
    <InputGroup {...props}>
      <Input
        {...childprops}
        ss={style + ''}
        prefix="http://"
        placeholder="mysite"
        suffix={
          <Tooltip title="copy full url">
            <CopyOutlined onClick={console.log} />
          </Tooltip>
        }
      />
      <Input
        {...childprops}
        ss={style + 'width: 20%;max-width:15rem;'}
        placeholder=".com"
      />
      <Select
        {...childprops}
        ss="width:25%;max-width:20rem;"
        placeholder="country"
        optionLabelProp="label"
      >
        <Option value="usa" label="USA">
          <h3>🇺🇸 USA (美国)</h3>
        </Option>
        <Option value="china" label="China">
          <h3> 🇨🇳 China (中国)</h3>
        </Option>
        <Option value="japan" label="Japan">
          <h3>🇯🇵 Japan (日本)</h3>
        </Option>
        <Option value="korea" label="Korea">
          <h3>🇰🇷 Korea (韩国)</h3>
        </Option>
      </Select>
      <Button {...childprops} ss={style} type="submit">
        Go &nbsp;&nbsp;&nbsp;
      </Button>
    </InputGroup>
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
