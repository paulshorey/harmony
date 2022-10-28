import Box from '@ps/ui/components/display/Box';
import Link from '@ps/ui/components/display/Link';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

export default function (props) {
  useShowStorybookCode();
  return (
    <Box
      variant="padding"
      textcolor="dark"
      bggradient="light"
      ss="padding:1rem 2rem;margin:0;"
    >
      <p>
        <Link href="#" target="_blank" {...props}>
          Link
        </Link>{' '}
        component accepts all the props that an anchor tag would. Plus a few for
        analytics/tracking.
      </p>
      <p>Requires only props.href</p>
      <ul>
        <li>href starts with # = link to anchor on same page</li>
        <li>
          href starts with mailto: or tel: = link to open communication app
        </li>
        <li>href stats with http.* = link to external site in a new tab </li>
        <li>else = link to internal page </li>
      </ul>
      <p>
        It adds/edits props so that the rendered anchor tag is valid and
        accessible.
      </p>
    </Box>
  );
}
