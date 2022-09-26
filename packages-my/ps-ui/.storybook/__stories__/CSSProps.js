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
  return (
    <Div css={styles.wrapper} {...args}>
      <h2
        css={css`
          font-size: 30px;
        `}
      >
        <Div as="span" cssIframe="display:none;" css={styles.colorGold}>
          Your screen size{' '}
        </Div>
        <Div as="span" cssNotIframe="display:none;">
          This page <span css={styles.colorGold}></span>
        </Div>
        matches the following <span css={styles.colorGold}>media queries</span>:
      </h2>
      <Div as="code" css={styles.codeResults} cssLg="display:block;">
        cssLg
      </Div>
      <Div as="code" css={styles.codeResults} cssSm="display:block;">
        cssSm
      </Div>
      <Div as="code" css={styles.codeResults} cssDesktop="display:block;">
        cssDesktop
      </Div>
      <Div as="code" css={styles.codeResults} cssMobile="display:block;">
        cssMobile
      </Div>
      <Div as="code" css={styles.codeResults} cssLargeTablet="display:block;">
        cssLargeTablet
      </Div>
      <Div as="code" css={styles.codeResults} cssTablet="display:block;">
        cssTablet
      </Div>
      <Div as="code" css={styles.codeResults} cssPhone="display:block;">
        cssPhone
      </Div>
      <Div as="code" css={styles.codeResults} cssSmallPhone="display:block;">
        cssSmallPhone
      </Div>
      <Div as="code" css={styles.codeResults} cssLargeDesktop="display:block;">
        cssLargeDesktop
      </Div>
      <Div
        as="code"
        css={styles.codeResults}
        cssVeryLargeDesktop="display:block;"
      >
        cssVeryLargeDesktop
      </Div>
      <Div as="code" css={styles.codeResults} cssIPhone="display:block;">
        cssIPhone
      </Div>
      <Div as="code" css={styles.codeResults} cssIPad="display:block;">
        cssIPad
      </Div>
      <Div as="code" css={styles.codeResults} cssAndroid="display:block;">
        cssAndroid
      </Div>
      <Div as="code" css={styles.codeResults} cssWindows="display:block;">
        cssWindows
      </Div>
      <Div as="code" css={styles.codeResults} cssMac="display:block;">
        cssMac
      </Div>
      <Div as="code" css={styles.codeResults} cssLinux="display:block;">
        cssLinux
      </Div>
      <Div as="code" css={styles.codeResults} cssPortrait="display:block;">
        cssPortrait
      </Div>
      <Div as="code" css={styles.codeResults} cssLandscape="display:block;">
        cssLandscape
      </Div>
      <Div as="code" css={styles.codeResults} cssIframe="display:block;">
        cssIframe
      </Div>
      <Div as="code" css={styles.codeResults} cssNotIframe="display:block;">
        cssNotIframe
      </Div>
      <Div as="code" css={styles.codeResults} cssNotPhone="display:block;">
        cssNotPhone
      </Div>
      <Div as="code" css={styles.codeResults} cssWebview="display:block;">
        cssWebview
      </Div>
      <Div as="code" css={styles.codeResults} cssNotWebview="display:block;">
        cssNotWebview
      </Div>
      <p>
        <br />
        Above values are responsive.{' '}
        <Div as="span" cssNotIframe="display:none;">
          Resize your screen or open this component{' '}
          <a
            href="iframe.html?id=layout-atoms-div-style-props--div-style-props&viewMode=story"
            target="_blank"
          >
            in its own tab
          </a>
          .
        </Div>
      </p>
    </Div>
  );
};

// export default {
//   title: 'CSSProps',
// };

export default {
  component: Div,
  title: 'CSS Props',
  parameters: {
    // viewMode: 'canvas',
    // previewTabs: {
    //   canvas: { hidden: true },
    // },
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
