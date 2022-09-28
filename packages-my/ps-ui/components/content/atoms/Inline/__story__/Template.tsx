import { css } from '@emotion/react';
import Inline from '@ps/ui/components/content/atoms/Inline';

export default function (args: any) {
  return (
    <Inline {...args}>
      All Block props and conditional rules still work here.
    </Inline>
  );
}
