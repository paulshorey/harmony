import React from 'react';
import Div from '@ps/ui/components/layout/atoms/Div';
import { css } from '@emotion/react';

const colors = {
  gold: 'hsl(45deg 100% 45%)',
  offwhite: '#897DDB',
};
const containerStyleProps = {
  css: css`
    &,
    & > * {
      color: white;
    }
    a {
      color: ${colors.gold};
    }
    svg {
      display: inline;
      color: ${colors.gold};
      padding-left: 0;
      margin-left: 0;
      height: 12px;
      width: auto;
      position: relative;
      top: 2px;
    }
    h6 {
      margin-bottom: 0;
    }
    b {
      color: white;
      white-space: nowrap;
    }
    p {
      display: block;
      font-size: 0.67em;
      margin: 0.67rem 0;
    }
    pre {
      margin: 0;
      opacity: 0.5;
    }
    code {
      color: ${colors.gold};
    }
  `,
  cssSm: `
  p span {
    display: block;
    white-space: nowrap;
  }`,
};
const codeStyles = {
  css: css`
    text-indent: 1rem;
    display: none;
    font-size: 0.75em;
    &:after {
      content: ' = " display: block; "';
      padding-left: 1rem;
      color: white;
      opacity: 0.5;
    }
  `,
};

export const SimpleStyleStrings = ({ args }) => {
  return (
    <Div {...containerStyleProps}>
      <h5>
        <span>Here are the css props that would</span> apply to this current
        page size:
      </h5>
      <pre>{`<Div `}</pre>
      <Div as="code" {...codeStyles} style={{ display: 'block' }}>
        csss
      </Div>
      <Div as="code" {...codeStyles} cssLg="display:block;">
        cssLg
      </Div>
      <Div as="code" {...codeStyles} cssSm="display:block;">
        cssSm
      </Div>
      <Div as="code" {...codeStyles} cssDesktop="display:block;">
        cssDesktop
      </Div>
      <Div as="code" {...codeStyles} cssMobile="display:block;">
        cssMobile
      </Div>
      <Div as="code" {...codeStyles} cssLargeTablet="display:block;">
        cssLargeTablet
      </Div>
      <Div as="code" {...codeStyles} cssTablet="display:block;">
        cssTablet
      </Div>
      <Div as="code" {...codeStyles} cssPhone="display:block;">
        cssPhone
      </Div>
      <Div as="code" {...codeStyles} cssSmallPhone="display:block;">
        cssSmallPhone
      </Div>
      <Div as="code" {...codeStyles} cssLargeDesktop="display:block;">
        cssLargeDesktop
      </Div>
      <Div as="code" {...codeStyles} cssVeryLargeDesktop="display:block;">
        cssVeryLargeDesktop
      </Div>
      <Div as="code" {...codeStyles} cssIPhone="display:block;">
        cssIPhone
      </Div>
      <Div as="code" {...codeStyles} cssIPad="display:block;">
        cssIPad
      </Div>
      <Div as="code" {...codeStyles} cssAndroid="display:block;">
        cssAndroid
      </Div>
      <Div as="code" {...codeStyles} cssWindows="display:block;">
        cssWindows
      </Div>
      <Div as="code" {...codeStyles} cssMac="display:block;">
        cssMac
      </Div>
      <Div as="code" {...codeStyles} cssLinux="display:block;">
        cssLinux
      </Div>
      <Div as="code" {...codeStyles} cssPortrait="display:block;">
        cssPortrait
      </Div>
      <Div as="code" {...codeStyles} cssLandscape="display:block;">
        cssLandscape
      </Div>
      <Div as="code" {...codeStyles} cssIframe="display:block;">
        cssIframe
      </Div>
      <Div as="code" {...codeStyles} cssNotIframe="display:block;">
        cssNotIframe
      </Div>
      <Div as="code" {...codeStyles} cssNotPhone="display:block;">
        cssNotPhone
      </Div>
      <Div as="code" {...codeStyles} cssWebview="display:block;">
        cssWebview
      </Div>
      <Div as="code" {...codeStyles} cssNotWebview="display:block;">
        cssNotWebview
      </Div>
      <pre>&gt;</pre>
      <p>
        <span>☝️ Resize your screen. Above props will update. </span>
      </p>
      <Div as="p">
        <span>However, Storybook renders this in an iframe, </span>
        <span>so the above values might not reflect </span> your full browser
        size.{' '}
        <span>
          <a
            href="iframe.html?id=aboutcssprops--custom-style-props&viewMode=story"
            target="_blank"
          >
            Preview this component in its own tab{' '}
            <svg viewBox="0 0 1024 1024">
              <path
                fill="orange"
                d="M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z"
              ></path>
            </svg>
          </a>{' '}
        </span>
      </Div>
      <p>
        <span>Fun trick: on small device sizes </span>
        <span>all text will always wrap nicely </span>
        <span>in predefined break points. </span>
        <span>
          <a href="javascript:document.querySelector('.docblock-code-toggle').click();">
            Open the source code panel to see the trick ↘
          </a>
        </span>
      </p>
      <p>
        <span>
          <span>Scroll down for a full breakdown 🕺 of properties, </span>
          <span>DIY media query variables, themes, </span>
          <span>and recipes 😋</span>
        </span>
      </p>
    </Div>
  );
};

export default {
  component: Div,
  id: 'aboutcssprops',
  title: 'Simple Style Strings',
  argTypes: {},
  isExpanded: true,
  parameters: {
    docs: {
      description: {
        component: `A more efficient way to style your React components. Pass \`props.cssDesktop\` to style desktop. Pass \`props.cssPhoneSmall\` to style smallPhones. Pass \`props.css\` to style all sizes. No need to remember media queries or which index number controls which breakpoint.
          `,
      },
      source: {
        code: `
const containerStyleProps = {
  // Predefine styles for multiple breakpoints here. Or do it inline.
  cssLg: ':after { content:"this will only show on large screens"; }',
  // To control how text wraps in small screens:
  cssSm: 'p span { display: block; white-space: nowrap; }',
  // A good way to start is with plain default \`css\` prop.
  // Then override specific properties like text-align, display, white-space, etc. 
  // with custom props such as cssSmallPhone, cssLargeTablet, etc.
  css: css\`
    &,
    & > * {
      color: white;
    }
    a {
      color: \${colors.gold};
    }
    svg {
      display: inline;
      color: \${colors.gold};

... 

// Pass all css rules declared previously (maybe in another file, not inline)
// or inline, one at a time <Div css="display:none;" cssLg="display:block;" />
<Div {...containerStyleProps}>

...

      <Div as="code" {...codeStyles} cssLg="display:block;">
        cssLg
      </Div>
      <Div as="code" {...codeStyles} cssSm="display:block;">
        cssSm
      </Div>
      <Div as="code" {...codeStyles} cssDesktop="display:block;">
        cssDesktop
      </Div>
      <Div as="code" {...codeStyles} cssMobile="display:block;">
        cssMobile
      </Div>
      <Div as="code" {...codeStyles} cssLargeTablet="display:block;">
        cssLargeTablet
      </Div>
      <Div as="code" {...codeStyles} cssTablet="display:block;">
        cssTablet
      </Div>
      <Div as="code" {...codeStyles} cssPhone="display:block;">
        cssPhone
      </Div>
      <Div as="code" {...codeStyles} cssSmallPhone="display:block;">
        cssSmallPhone
      </Div>

... 

<p>
  <span>Fun trick: on small screens </span>
  <span>all text will always wrap nicely </span>
  <span>in predefined break points. </span>
  <span>
    <Link javascript="document.querySelector('.docblock-code-toggle').click();">
      Open the source code panel to see the trick ↘
    </Link>
  </span>
</p>
        `,
      },
    },
  },
};
