import Block from 'components/content/atoms/Block';
import Card from '.';
export default (args: any) => (
  <Block variant="bg" onLight>
    <Card {...args}>
      Here is some text. Try :hover mouse-over this area. Storybook default
      variant is set to "hoverTilt". You can change the props below this
      example.
    </Card>
  </Block>
);
