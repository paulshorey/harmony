import { withBox } from "@/components/content/atoms/Box";
import Button from ".";
export default (args: any) => {
  const Box = withBox({
    id: "BUTTON-TEST-PRVEIEW",
    ss: "padding:1rem;",
    variant: "bgWhite",
  });
  return (
    <div>
      <Box variant="bgWhite">
        <Button {...args}>Button text</Button>
      </Box>
      <Box variant="bgGradient" onDark>
        <Button onDark {...args}>
          Button text
        </Button>
      </Box>
    </div>
  );
};
