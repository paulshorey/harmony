import Box from "@/components/content/atoms/Box";
import Link from "components/content/atoms/Link";
import useShowStorybookCode from "hooks/useShowStorybookCode";

export default function (args: any) {
  useShowStorybookCode();
  return (
    <Box variant="padding text-color" shade="onDark">
      <Box variant="bg-gradient text-white" color="cta1" ss="padding:1rem 2rem;margin:0;">
        <p>
          <Link href="#" target="_blank">
            Link
          </Link>{" "}
          component accepts all the props that an anchor tag would. Plus a few for analytics/tracking.
        </p>
        <p>Requires props.href</p>
        <ul>
          <li>href starts with # = link to anchor on same page</li>
          <li>href starts with mailto: or tel: = link to open communication app</li>
          <li>href stats with http.* = link to external site </li>
          <li>else = link to internal page </li>
        </ul>
        <p>It adds/edits props so that the rendered anchor tag is valid and accessible.</p>
      </Box>
    </Box>
  );
}
