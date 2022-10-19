import Card from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
export default (args: any) => (
  <CanvasContainer>
    <Card {...args}>
      Here is some text. Try :hover mouse-over this area. Storybook default
      variant is set to "hoverTilt". You can change the props below this
      example.
    </Card>
  </CanvasContainer>
);
