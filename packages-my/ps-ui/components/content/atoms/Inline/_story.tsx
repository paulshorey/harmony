//
import Block from 'components/content/atoms/Block';
import Inline from '.';

export default function (args: any) {
  return (
    <Block variant="padding bgColor textColor">
      <p>
        All Block props and conditional rules still work here.{' '}
        <Inline {...args}>But this renders the element inline,</Inline> by
        default.
      </p>
      <p>More styles (variants) coming soon.</p>
    </Block>
  );
}
