// import { css } from '@emotion/react';
import Block from '@ps/ui/components/content/atoms/Block';
import Inline from '@ps/ui/components/content/atoms/Inline';

export default function (args) {
  return (
    <Block variant="gradientBg padding">
      <Inline {...args} variants={[...(args.variants || []), 'onDark']}>
        All Block props and conditional rules still work here.
      </Inline>
    </Block>
  );
}
