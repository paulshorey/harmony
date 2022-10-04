import Block from 'components/content/atoms/Block';
import Inline from '.';
import useShowStorybookCode from '../../../../hooks/useShowStorybookCode';

export default function (args: any) {
  useShowStorybookCode();
  return (
    <Block variant="padding bg-color text-color">
      <p>
        All Block props and conditional rules still work here.{' '}
        <Inline {...args}>But this renders the element inline</Inline> by
        default.
      </p>
      {/* <p>
        Inline element is the highlighted one above. More styles (variants)
        coming soon.
      </p> */}
    </Block>
  );
}
