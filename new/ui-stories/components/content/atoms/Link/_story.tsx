import Block from "components/content/atoms/Block";
import Link from "components/content/atoms/Link";
import useShowStorybookCode from "hooks/useShowStorybookCode";

export default function (args: any) {
  useShowStorybookCode();
  return (
    <Block variant="padding text-color" shade="onDark">
      <p>
        <Link href="#" target="_blank">
          Link
        </Link>{" "}
        component accepts all the props that an anchor tag would. Plus a few for analytics/tracking.
        <br />
        It edits or adds props so that the rendered anchor tag is valid and accessible.
      </p>
      <Block variant="bg-gradient text-white" color="cta1" ss="padding:1rem 2rem;margin:0;">
        Requires props.href
        <ul>
          <li>href starts with # = link to anchor on same page</li>
          <li>href starts with mailto: or tel: = link to open communication app</li>
          <li>href stats with http.* = link to external site </li>
          <li>else = link to internal page </li>
        </ul>
        Will output an anchor ({"<"}a{">"}) tag with correct set of attributes for UX and accessibility.
      </Block>
    </Block>
  );
}
