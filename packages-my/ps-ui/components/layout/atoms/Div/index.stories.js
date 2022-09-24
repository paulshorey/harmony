import { css } from '@emotion/react';
import React from 'react';

import Div from '.';

export default {
  component: Div,
  title: 'layout/atoms/Div Style Props',
  parameters: {
    docs: {
      source: {
        code: `
<h2 css={styles.topTitle}>
    <Div as="span" cssIframe="display:none;" css={styles.colorGold}>
      Your screen size{' '}
    </Div>
    <Div as="span" cssNotIframe="display:none;">
      This container <span css={styles.colorGold}></span>
    </Div>
    matches following <span css={styles.colorGold}>media queries</span>:
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
<Div as="code" css={styles.codeResults} cssLargePhone="display:block;">
  cssLargePhone
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
<Div as="code" css={styles.codeResults} cssVeryLargeDesktop="display:block;">
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
`,
      },
      /* \`<Div />\` is a building block. It is used by most of the other components in this library. It can actually ***render any HTML tag***, not just div. It uses EmotionJS css prop and adds a few other props to help style for multiple devices without having to remember and re-type any media queries.*/
      description: {
        component: `
> **This component is best previewed outside of Storybook, <a href="iframe.html?id=layout-atoms-div-style-props--div-style-props&viewMode=story" target="_blank">in its own tab</a>.**  
    

### Usage:
\`<Div as="p" />\` to render a paragraph tag like Box in \`styled-system\`. Also ***inspired by styled-system*** are these multiple props to style for many device quickly and easily. But, this uses real CSS and does not pollute the props name space. As an app grows, it gets many more styles added. If you manage each style rule as a prop, things get messy. It becomes difficult to quickly tell which props are for logic or data.

\`<Div css={defaultStyles} cssTablet="padding:1rem;" cssPhone="font-size:1.25rem;" data={someData} />\` 

There are several css props for different sizes. Some overlap. The simplest way to start is by choosing a pair: \`cssLg\`/\`cssSm\` for a 930px breakpoint, or \`cssDesktop\`/\`cssMobile\` for a 1024px breakpoint. To style only for tablet, use \`cssTablet\`. To style a large tablet, use \`cssLargeTablet\`.

***Scroll down to see all sizes/relationships***. Phone <= 499px. SmallPhone <= 399px. TinyPhone <= 359px. Tablet is between 500-1024. Etc.

Ex: \`<Div as="h2" cssSmallPhone="font-weight:900;">\`. The element could also be styled somewhere else like Bootstrap or Tailwind. It's ok. This solution focuses on simplicity, developer experience, and saves a lot of time when managing many rules for many devices, in a complex app.

BTW, the reason it's called Div is it extends HTMLAttributes\\<HTMLDivElement\\>. This type actually works well for most HTML elements. For interactive elements like Input/Form/conteneditable, see the forms section of this library.

All props accept EmotionJS css\\\`\\\`. For additional ease of use, custom props also accept a basic string type.
`,
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

const Template = (args) => (
  <Div css={styles.wrapper} {...args}>
    <Div
      css={css`
        display: none;
      `}
      cssIframe={`display:block;`}
    >
      <h3>
        📔 Storybook renders this component in an iFrame, not full screen.
      </h3>
      <p>
        🌟&thinsp;{' '}
        <span css={styles.colorGold}>
          <>Hit keyboard key "S"</> to toggle the left sidebar. Or open this
          component{' '}
          <a
            href="iframe.html?id=layout-atoms-div-style-props--div-style-props&viewMode=story"
            target="_blank"
          >
            in its own tab
          </a>
          .
        </span>{' '}
      </p>
    </Div>
    <hr />
    <h2
      css={css`
        font-size: 30px;
      `}
    >
      <Div as="span" cssIframe="display:none;" css={styles.colorGold}>
        Your screen size{' '}
      </Div>
      <Div as="span" cssNotIframe="display:none;">
        This container <span css={styles.colorGold}></span>
      </Div>
      matches following <span css={styles.colorGold}>media queries</span>:
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
    <Div as="code" css={styles.codeResults} cssLargePhone="display:block;">
      cssLargePhone
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
      Above values are responsive!{' '}
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
    <Div as="p" cssNotIframe="display:none;" css={styles.colorGold}>
      If you{' '}
      <a
        href="iframe.html?id=layout-atoms-div-style-props--div-style-props&viewMode=story"
        target="_blank"
      >
        open this outside of Storybook
      </a>
      , all references to Storybook will become hidden!
    </Div>
    <p>
      <i
        css={css`
          font-size: 0.8em;
        `}
      >
        This story's source code is actually a great example of using this
        component to style for multiple devices.{' '}
        <Div as="b" cssNotIframe="display:none;" css={styles.colorGold}>
          {' '}
          Click "Show code" ↘↘↘
        </Div>
      </i>
    </p>
  </Div>
);
export const DivStyleProps = Template.bind({});
DivStyleProps.args = {};
