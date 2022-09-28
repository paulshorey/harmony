import React from 'react';
import Div from '@ps/ui/components/content/atoms/Div';
import { css } from '@emotion/react';
const containerStyleProps = {
  css: css``,
};

export const Philosophy = ({ args }) => {
  return (
    <Div {...containerStyleProps}>
      <h5>
        These <span className="gold">props </span> would apply styles to your
        current <span className="orange">page size</span>:
      </h5>
    </Div>
  );
};

export default {
  component: Div,
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
