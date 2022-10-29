import Button from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';

export default (props) => (
  <CanvasContainer ss="overflow:hidden;">
    <CanvasStoryPadding>
      <Button {...props} />
    </CanvasStoryPadding>
    <CanvasStoryPadding bgcolor="light" textcolor="purple">
      <Button {...props} />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export const code = ``;
