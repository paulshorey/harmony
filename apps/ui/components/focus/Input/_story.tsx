import Input from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';

export default (props) => (
  <CanvasContainer>
    <CanvasStoryPadding>
      <Input {...props} />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export const code = ``;
