import Block from 'components/content/atoms/Block';
import Link from 'components/content/atoms/Link';
import useShowStorybookCode from 'hooks/useShowStorybookCode';

export default function (args: any) {
  useShowStorybookCode();
  return (
    <Block variant="padding text-color" shade="onDark">
      <p>
        <Link href="#asdf">Link</Link> component accepts all the props that an
        anchor tag would. Plus a few for analytics/tracking.
        <br />
        It edits or adds props so that the rendered anchor tag is valid and
        accessible.
      </p>
    </Block>
  );
}
