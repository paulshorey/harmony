import { css } from '@emotion/react';
import React from 'react';

export default {
  title: 'Styling',
  parameters: {
    docs: {
      source: {
        code: ``,
      },
      description: {
        component: ``,
      },
    },
  },
};

const styles = {
  wrapper: css`
    b {
      font-weight: 700;
    }
    a {
      // color: #94dacf;
      text-decoration: underline;
    }
  `,
  colorGold: css`
    color: #fedb00;
    * {
      color: #fedb00;
    }
  `,
  codeResults: css`
    display: none;
    font-size: 22px;
  `,
};

const Template = (args) => <div css={styles.wrapper} {...args}></div>;
export const Styling = Template.bind({});
Styling.args = {};
