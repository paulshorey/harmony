import { css } from '@emotion/react';
import React from 'react';

import Div from '.';

export default {
  component: Div,
  title: 'CSS Props',
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
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
      /* \`<Div />\` is a building block. It is used by most of the other components in this library. It can actually ***render any HTML tag***, not just div. It uses EmotionJS css prop and adds a few other props to help style for multiple devices without having to remember and re-type any media queries.
      > **This component is best previewed outside of Storybook, <a href="iframe.html?id=layout-atoms-div-style-props--div-style-props&viewMode=story" target="_blank">in its own tab</a>.**
      Ex: \`<Div as="h2" cssSmallPhone="font-weight:900;">\`.
      It's probably compatible with CSS-in-JS libraries that pass a JS style object, but that is untested.
      */
      description: {
        component: `\`import Div from '@ps/ui/components/layout/atoms/Div'; // Call the import Box, El, Span, P, whatever makes sense to you.\`  
Component is not called "Box" only because styled-system uses that name. So, you can use both libraries and gradually transition to your favorite.
        
Use \`<Div as="p" />\` to render a paragraph tag. Similar to Box component in \`styled-system\`. Also ***inspired by styled-system*** are the multiple props for targeting several devices quickly and easily. But, this uses real CSS and does not pollute the props name space. As an app grows, it gets many more styles added. If you manage each style rule as a prop, things get messy. It becomes difficult to quickly tell which props are for logic vs data vs style.
  
**This library uses EmotionJS** which is similar to styled-components. This component supports Emotion's css prop, but also adds custom props. Each custom css prop injects styles into a predefined media query. Use Emotion's css\\\`\\\` type or a plain string. Each starts with "css" prefix. Use \`react/jsx-sort-props\` to sort your React props alphabetically, to keep all css props together. See also \`as\`, \`variant\`, and \`variants\` props.

**If you like inline styles**, you should definitely try this. **If not,** this library also includes some great tools for managing stylesheets, variables, and themes.
\`<Div as="h2" css={defaultStyles} cssTablet="padding:1rem;" cssPhone="font-size:1.25rem;" variant="class1 class2 class3" />\`  

**See also [PaulShorey.com/blog/best-css-in-js-system](https://paulshorey.comm/blog/best-css-in-js-system) to read about hooks, variants, themes, and variables** which are difficult to show in Storybook.  
Basically, this library also provides functionality to recreate the benefits of **cascading stylesheets and classNames** but without any of the issues.

**Several css props are provided**, targeting different sizes. Some overlap. Start by simply choosing a pair: \`cssLg\`/\`cssSm\` for a 930px breakpoint, or \`cssDesktop\`/\`cssMobile\` for a 1024px breakpoint. To style only for tablet, use \`cssTablet\`. To style a large tablet, use \`cssLargeTablet\`.

Phone <= 499px. SmallPhone <= 399px. TinyPhone <= 359px. Tablet is 500-1024. LargeTablet is 931-1024... All props are documented below.

**The reason it's called Div** is it extends HTMLAttributes\\<HTMLDivElement\\>. This type definition actually works for most HTML elements, even buttons, and supports user events like click and mouseover. For truly interactive elements like Input/Form/conteneditable, see components in the "Forms" section.
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
        This page <span css={styles.colorGold}></span>
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
export const CSSProps = Template.bind({});
CSSProps.args = {};
