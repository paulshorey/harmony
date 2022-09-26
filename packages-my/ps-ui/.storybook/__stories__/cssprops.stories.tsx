import React from 'react';
import Div from '@ps/ui/components/layout/atoms/Div';
import { css } from '@emotion/react';

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
    color: #94dacf;
  `,
};

export const CSSProps = (args) => {
  return <Div css={styles.wrapper} {...args}></Div>;
};

// export default {
//   title: 'CSSProps',
// };

export default {
  component: Div,
  title: 'CSS Props',
  parameters: {
    docs: {
      description: {
        component: `
            A more efficient way to style your React components. All CSS-in-JS
            solutions look good in a basic example, but this one gets more
            useful as you add more styles, more breakpoints, and more
            complexity!
          `,
      },
      source: {
        code: `
<h2 css={styles.topTitle}>
    <Div as="span" cssIframe="display:none;" css={styles.colorGold}>
      Your screen size{' '}
    </Div>
    <Div as="span" cssNotIframe="display:none;">
      This page <span css={styles.colorGold}></span>
    </Div>
    matches following <span css={styles.colorGold}>media queries</span>:
</h2>`,
      },
    },
  },
};
