import Box from '@ps/ui/components/content/Box';
import Card from '.';
export default (args: any) => (
  <Box ss="padding:1.75rem 1.5rem 2.25rem;">
    <Card {...args}>
      Here is some text. Try :hover mouse-over this area. Storybook default
      variant is set to "hoverTilt". You can change the props below this
      example.
    </Card>
  </Box>
);
