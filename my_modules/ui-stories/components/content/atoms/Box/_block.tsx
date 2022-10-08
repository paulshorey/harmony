import useShowStorybookCode from "../../../../hooks/useShowStorybookCode";
import Box, { withBox } from ".";

export default function (args: any) {
  useShowStorybookCode();
  const Code = withBox({ as: "code", ...args });
  const U = withBox({ as: "u", variant: "text-color", ...args });
  return (
    <Box as="p" shade="onDark" ss="padding:2rem;">
      Box can be used as a <Code>div</Code>{" "}
      <U {...args}>
        or as a <Code>u</Code>
      </U>{" "}
      or as any other HTML container element.
    </Box>
  );
}
