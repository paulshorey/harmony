import { withBox } from "@/components/content/atoms/Box";
import Button from ".";
export default (args: any) => {
  const Box = withBox({
    ss: "padding:1rem;",
    variant: "bg-white",
  });
  return (
    <div>
      <Box>
        <Button {...args}>Button text</Button>
      </Box>
      <Box variant="bg-gradient" color="cta1">
        <Button shade="onDark" {...args}>
          Button text
        </Button>
      </Box>
    </div>
  );
};
