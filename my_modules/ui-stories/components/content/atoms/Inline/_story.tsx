import Inline from '.';
import useShowStorybookCode from '../../../../hooks/useShowStorybookCode';
import Block from '../Block';

export default function (args: any) {
  useShowStorybookCode();
  return (
    <Block as="p" shade="onDark" variant="text-color" ss="padding:2rem;">
      All Block props and conditional rules still work here.{' '}
      <Inline {...args}>But this renders the element inline</Inline> by default.
    </Block>
  );
}
