import Box from "@ps/ui/components/content/atoms/Box";
import Card from ".";
export default (args: any) => (
  <Box variant="bg paddingPage">
    <Card {...args}>
      Here is some text. Try :hover mouse-over this area. Storybook default variant is set to "hoverTilt". You can change the props below this example.
    </Card>
  </Box>
);
