import Box from '@ps/ui/components/content/Box';
import InputGroup from '@ps/ui/components/focus/InputGroup';
import Input from '@ps/ui/components/focus/Input';
import Button from '@ps/ui/components/focus/Button';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { CopyOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const InputStory = (props) => {
  const childprops = {
    round: true,
  };
  const style = ``;
  return (
    <InputGroup {...props}>
      <Input
        {...childprops}
        ss={style + 'flex-grow:1;'}
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
        ss={style + 'width: 20%;max-width:100px;'}
        placeholder=".com"
      />
      <Button {...childprops} ss={style} type="submit">
        Go
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
