import { withBox } from "@/components/content/atoms/Box";
import Button from ".";
export default (args: any) => {
  const Box = withBox({
    ss: "padding:1rem;",
    variant: "bgWhite",
  });
  return (
    <div>
      <Box>
        <Button {...args}>Button text</Button>
      </Box>
      <Box variant="bgGradient" color="cta1">
        <Button shade="onDark" {...args}>
          Button text
        </Button>
      </Box>
    </div>
  );
};
