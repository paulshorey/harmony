import Input from '@ps/ui/components/focus/Input';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';

const InputStory = (props) => {
  const style = `margin: 0 0.875rem 0.875rem 0;`;
  return (
    <div>
      <Input {...props} ss={style} placeholder="Enter your username" />

      <Input {...props} ss={style} placeholder="Enter your username" />

      <Input
        {...props}
        ss={style}
        placeholder="Enter your username"
        prefix={'http://'}
        suffix={'.com'}
      />
    </div>
  );
};

const TestPage = (props) => (
  <CanvasContainer>
    <CanvasStoryPadding>
      <InputStory {...props} />
    </CanvasStoryPadding>
    <CanvasStoryPadding bgcolor="light" textcolor="purple">
      <InputStory {...props} />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export default TestPage;
