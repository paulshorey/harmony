// import { css } from '@emotion/react';
import Block from '@ps/ui/components/content/atoms/Block';
import Inline from '.';

export default function (args: any) {
  return (
    <Block variant="padding">
      All Block props and conditional rules still work here.{' '}
      <Inline {...args}>But this renders an inline element,</Inline> like a
      span.
    </Block>
  );
}
