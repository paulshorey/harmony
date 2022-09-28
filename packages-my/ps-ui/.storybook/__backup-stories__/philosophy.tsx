import React from 'react';
import Block from '@ps/ui/components/content/atoms/Block';
import { css } from '@emotion/react';
const containerStyleProps = {
  css: css``,
};

export const Philosophy = ({ args }) => {
  return (
    <Block {...containerStyleProps}>
      <h5>
        These <span className="gold">props </span> would apply styles to your
        current <span className="orange">page size</span>:
      </h5>
    </Block>
  );
};

export default {
  component: Block,
  id: '9',
  title: 'Why Another UI Library ?/Philosophy',
  argTypes: {},
  isExpanded: true,
  parameters: {
    docs: {
      description: {
        component: `dafsfdfd
          `,
      },
      source: {
        code: `
        `,
      },
    },
  },
};
