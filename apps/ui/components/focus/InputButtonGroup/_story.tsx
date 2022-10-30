import Box from '@ps/ui/components/content/Box';
import InputButtonGroup from '@ps/ui/components/focus/InputButtonGroup';
import Input from '@ps/ui/components/focus/Input';
import Button from '@ps/ui/components/focus/Button';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';

const InputStory = (props) => {
  const childprops = {
    round: true,
  };
  const style = ``;
  return (
    <InputButtonGroup {...props}>
      <Input
        {...childprops}
        ss={style}
        prefix="http://"
        defaultValue="mysite"
      />
      <Button {...childprops} ss={style} type="submit">
        Go
      </Button>
    </InputButtonGroup>
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
