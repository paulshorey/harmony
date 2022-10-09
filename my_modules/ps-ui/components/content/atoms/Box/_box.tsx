import useShowStorybookCode from "../../../../hooks/useShowStorybookCode";
import Box, { Code, withBox } from ".";

export default function (args: any) {
  useShowStorybookCode();
  const U = withBox({ as: "u", ...args });
  return (
    <Box as="p" onDark ss="padding:2rem;">
      Box can be used as a <Code>div</Code>{" "}
      <U {...args}>
        or as a <Code>u</Code>
      </U>{" "}
      or as any other HTML container element.
    </Box>
  );
}
