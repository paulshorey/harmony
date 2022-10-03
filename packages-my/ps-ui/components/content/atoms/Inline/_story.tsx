// import { css } from '@emotion/react';
import Block from '@ps/ui/components/content/atoms/Block';
import Inline from '.';

export default function (args: any) {
  return (
    <Block variant="padding">
      <p>
        All Block props and conditional rules still work here.{' '}
        <Inline {...args}>But this renders the element inline,</Inline> by
        default.
      </p>
      <p>
        It's really not that useful now. Styles (variants) coming soon to add
        functionality.
      </p>
    </Block>
  );
}
