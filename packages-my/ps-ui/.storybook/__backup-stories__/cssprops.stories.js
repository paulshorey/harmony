import { css } from '@emotion/react';
import React from 'react';

import Block from '@ps/ui/components/content/atoms/Block';

export default {
  component: Block,
  title: 'CSS Props',
  parameters: {
    // viewMode: 'canvas',
    // previewTabs: {
    //   canvas: { hidden: true },
    // },
    docs: {
      source: {
        code: `
<h2 css={styles.topTitle}>
    <Block as="span" ssIframe="display:none;" css={styles.colorGold}>
      Your screen size{' '}
    </Block>
    <Block as="span" ssNotIframe="display:none;">
      This page <span css={styles.colorGold}></span>
    </Block>
    matches following <span css={styles.colorGold}>media queries</span>:
</h2>

<Block as="code" css={styles.codeResults} ssLg="display:block;">
  ssLg
</Block>
<Block as="code" css={styles.codeResults} ssSm="display:block;">
  ssSm
</Block>
<Block as="code" css={styles.codeResults} ssDesktop="display:block;">
  ssDesktop
</Block>
<Block as="code" css={styles.codeResults} ssMobile="display:block;">
  ssMobile
</Block>
<Block as="code" css={styles.codeResults} ssLargeTablet="display:block;">
  ssLargeTablet
</Block>
<Block as="code" css={styles.codeResults} ssTablet="display:block;">
  ssTablet
</Block>
<Block as="code" css={styles.codeResults} ssPhone="display:block;">
  ssPhone
</Block>
<Block as="code" css={styles.codeResults} ssSmallPhone="display:block;">
  ssSmallPhone
</Block>
<Block as="code" css={styles.codeResults} ssLargeDesktop="display:block;">
  ssLargeDesktop
</Block>
<Block as="code" css={styles.codeResults} ssVeryLargeDesktop="display:block;">
  ssVeryLargeDesktop
</Block>
<Block as="code" css={styles.codeResults} ssIPhone="display:block;">
  ssIPhone
</Block>
<Block as="code" css={styles.codeResults} ssIPad="display:block;">
  ssIPad
</Block>
<Block as="code" css={styles.codeResults} ssAndroid="display:block;">
  ssAndroid
</Block>
<Block as="code" css={styles.codeResults} ssWindows="display:block;">
  ssWindows
</Block>
<Block as="code" css={styles.codeResults} ssMac="display:block;">
  ssMac
</Block>
<Block as="code" css={styles.codeResults} ssLinux="display:block;">
  ssLinux
</Block>
<Block as="code" css={styles.codeResults} ssPortrait="display:block;">
  ssPortrait
</Block>
<Block as="code" css={styles.codeResults} ssLandscape="display:block;">
  ssLandscape
</Block>
<Block as="code" css={styles.codeResults} ssIframe="display:block;">
  ssIframe
</Block>
<Block as="code" css={styles.codeResults} ssNotIframe="display:block;">
  ssNotIframe
</Block>
<Block as="code" css={styles.codeResults} ssNotPhone="display:block;">
  ssNotPhone
</Block>
<Block as="code" css={styles.codeResults} ssWebview="display:block;">
  ssWebview
</Block>
<Block as="code" css={styles.codeResults} ssNotWebview="display:block;">
  ssNotWebview
</Block>
`,
      },
      /* \`<Block />\` is a building block. It is used by most of the other components in this library. It can actually ***render any HTML tag***, not just div. It uses EmotionJS css prop and adds a few other props to help style for multiple devices without having to remember and re-type any media queries.
      > **This component is best previewed outside of Storybook, <a href="iframe.html?id=layout-atoms-div-style-props--div-style-props&viewMode=story" target="_blank">in its own tab</a>.**
      Ex: \`<Block as="h2" ssSmallPhone="font-weight:900;">\`.
      It's probably compatible with CSS-in-JS libraries that pass a JS style object, but that is untested.
      */
      description: {
        component: `\`import Block from '@ps/ui/components/content/atoms/Block'; // Call the import Box, El, Span, P, whatever makes sense to you.\`  
Component is not called "Box" only because styled-system uses that name. So, you can use both libraries and gradually transition to your favorite.
        
Use \`<Block as="p" />\` to render a paragraph tag. Similar to Box component in \`styled-system\`. Also ***inspired by styled-system*** are the multiple props for targeting several devices quickly and easily. But, this uses real CSS and does not pollute the props name space. As an app grows, it gets many more styles added. If you manage each style rule as a prop, things get messy. It becomes difficult to quickly tell which props are for logic vs data vs style.
  
**This library uses EmotionJS** which is similar to styled-components. This component supports Emotion's css prop, but also adds custom props. Each custom css prop injects styles into a predefined media query. Use Emotion's css\\\`\\\` type or a plain string. Each starts with "css" prefix. Use \`react/jsx-sort-props\` to sort your React props alphabetically, to keep all css props together. See also \`as\`, \`variant\`, and \`variants\` props.

**If you like inline styles**, you should definitely try this. **If not,** this library also includes some great tools for managing stylesheets, variables, and themes.
\`<Block as="h2" css={defaultStyles} ssTablet="padding:1rem;" ssPhone="font-size:1.25rem;" variant="class1 class2 class3" />\`  

**See also [PaulShorey.com/blog/best-css-in-js-system](https://paulshorey.comm/blog/best-css-in-js-system) to read about hooks, variants, themes, and variables** which are difficult to show in Storybook.  
Basically, this library also provides functionality to recreate the benefits of **cascading stylesheets and classNames** but without any of the issues.

**Several css props are provided**, targeting different sizes. Some overlap. Start by simply choosing a pair: \`ssLg\`/\`ssSm\` for a 930px breakpoint, or \`ssDesktop\`/\`ssMobile\` for a 1024px breakpoint. To style only for tablet, use \`ssTablet\`. To style a large tablet, use \`ssLargeTablet\`.

Phone <= 499px. SmallPhone <= 399px. TinyPhone <= 359px. Tablet is 500-1024. LargeTablet is 931-1024... All props are documented below.

**The reason it's called Block** is it extends HTMLAttributes\\<HTMLBlockElement\\>. This type definition actually works for most HTML elements, even buttons, and supports user events like click and mouseover. For truly interactive elements like Input/Form/conteneditable, see components in the "Forms" section.
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
  <Block css={styles.wrapper} {...args}>
    <Block
      css={css`
        display: none;
      `}
      ssIframe={`display:block;`}
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
    </Block>
    <hr />
    <h2
      css={css`
        font-size: 30px;
      `}
    >
      <Block as="span" ssIframe="display:none;" css={styles.colorGold}>
        Your screen size{' '}
      </Block>
      <Block as="span" ssNotIframe="display:none;">
        This page <span css={styles.colorGold}></span>
      </Block>
      matches following <span css={styles.colorGold}>media queries</span>:
    </h2>
    <Block as="code" css={styles.codeResults} ssLg="display:block;">
      ssLg
    </Block>
    <Block as="code" css={styles.codeResults} ssSm="display:block;">
      ssSm
    </Block>
    <Block as="code" css={styles.codeResults} ssDesktop="display:block;">
      ssDesktop
    </Block>
    <Block as="code" css={styles.codeResults} ssMobile="display:block;">
      ssMobile
    </Block>
    <Block as="code" css={styles.codeResults} ssLargeTablet="display:block;">
      ssLargeTablet
    </Block>
    <Block as="code" css={styles.codeResults} ssTablet="display:block;">
      ssTablet
    </Block>
    <Block as="code" css={styles.codeResults} ssPhone="display:block;">
      ssPhone
    </Block>
    <Block as="code" css={styles.codeResults} ssSmallPhone="display:block;">
      ssSmallPhone
    </Block>
    <Block as="code" css={styles.codeResults} ssLargeDesktop="display:block;">
      ssLargeDesktop
    </Block>
    <Block
      as="code"
      css={styles.codeResults}
      ssVeryLargeDesktop="display:block;"
    >
      ssVeryLargeDesktop
    </Block>
    <Block as="code" css={styles.codeResults} ssIPhone="display:block;">
      ssIPhone
    </Block>
    <Block as="code" css={styles.codeResults} ssIPad="display:block;">
      ssIPad
    </Block>
    <Block as="code" css={styles.codeResults} ssAndroid="display:block;">
      ssAndroid
    </Block>
    <Block as="code" css={styles.codeResults} ssWindows="display:block;">
      ssWindows
    </Block>
    <Block as="code" css={styles.codeResults} ssMac="display:block;">
      ssMac
    </Block>
    <Block as="code" css={styles.codeResults} ssLinux="display:block;">
      ssLinux
    </Block>
    <Block as="code" css={styles.codeResults} ssPortrait="display:block;">
      ssPortrait
    </Block>
    <Block as="code" css={styles.codeResults} ssLandscape="display:block;">
      ssLandscape
    </Block>
    <Block as="code" css={styles.codeResults} ssIframe="display:block;">
      ssIframe
    </Block>
    <Block as="code" css={styles.codeResults} ssNotIframe="display:block;">
      ssNotIframe
    </Block>
    <Block as="code" css={styles.codeResults} ssNotPhone="display:block;">
      ssNotPhone
    </Block>
    <Block as="code" css={styles.codeResults} ssWebview="display:block;">
      ssWebview
    </Block>
    <Block as="code" css={styles.codeResults} ssNotWebview="display:block;">
      ssNotWebview
    </Block>
    <p>
      <br />
      Above values are responsive.{' '}
      <Block as="span" ssNotIframe="display:none;">
        Resize your screen or open this component{' '}
        <a
          href="iframe.html?id=layout-atoms-div-style-props--div-style-props&viewMode=story"
          target="_blank"
        >
          in its own tab
        </a>
        .
      </Block>
    </p>
    <Block as="p" ssNotIframe="display:none;" css={styles.colorGold}>
      If you{' '}
      <a
        href="iframe.html?id=layout-atoms-div-style-props--div-style-props&viewMode=story"
        target="_blank"
      >
        open this outside of Storybook
      </a>
      , all references to Storybook will become hidden!
    </Block>
    <p>
      <i
        css={css`
          font-size: 0.8em;
        `}
      >
        This story's source code is actually a great example of using this
        component to style for multiple devices.{' '}
        <Block as="b" ssNotIframe="display:none;" css={styles.colorGold}>
          {' '}
          Click "Show code" ↘↘↘
        </Block>
      </i>
    </p>
  </Block>
);
export const ssProps = Template.bind({});
CSSProps.args = {};
