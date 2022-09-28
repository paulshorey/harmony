import React from 'react';
import Div from '@ps/ui/components/content/atoms/Div';
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
    .gold {
      color: gold;
      font-weight: 600;
    }
    a, .orange {
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
      color: color: gold;
      margin: 0;
      opacity: 0.5;
    }
    code {
      color: gold;
      font-weight: 700;
    }
  `,
  mqIframe: `
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
      content: "='display:block'";
      padding-left: 1rem;
      color: white;
      opacity: 0.5;
      font-weight: 400;
    }
    &.cssDefaultCode {
      display: block;
      &:after {
        content: '={css\`display:block\`}';
      }
    }
  `,
};

export const MediaQueries = ({ args }) => {
  return (
    <Div {...containerStyleProps}>
      <h5>
        These <span className="gold">props </span> apply to your current{' '}
        <span className="orange">page size</span>:
      </h5>
      <pre>{`<Div `}</pre>
      <Div as="code" {...codeStyles} className="cssDefaultCode">
        css
      </Div>
      <Div as="code" {...codeStyles} mqLg="display:block;">
        mqLg
      </Div>
      <Div as="code" {...codeStyles} mqSm="display:block;">
        mqSm
      </Div>
      <Div as="code" {...codeStyles} mqDesktop="display:block;">
        mqDesktop
      </Div>
      <Div as="code" {...codeStyles} mqMobile="display:block;">
        mqMobile
      </Div>
      <Div as="code" {...codeStyles} mqLargeTablet="display:block;">
        mqLargeTablet
      </Div>
      <Div as="code" {...codeStyles} mqTablet="display:block;">
        mqTablet
      </Div>
      <Div as="code" {...codeStyles} mqPhone="display:block;">
        mqPhone
      </Div>
      <Div as="code" {...codeStyles} mqSmallPhone="display:block;">
        mqSmallPhone
      </Div>
      <Div as="code" {...codeStyles} mqLargeDesktop="display:block;">
        mqLargeDesktop
      </Div>
      <Div as="code" {...codeStyles} mqVeryLargeDesktop="display:block;">
        mqVeryLargeDesktop
      </Div>
      <Div as="code" {...codeStyles} mqIPhone="display:block;">
        mqIPhone
      </Div>
      <Div as="code" {...codeStyles} mqIPad="display:block;">
        mqIPad
      </Div>
      <Div as="code" {...codeStyles} mqAndroid="display:block;">
        mqAndroid
      </Div>
      <Div as="code" {...codeStyles} mqWindows="display:block;">
        mqWindows
      </Div>
      <Div as="code" {...codeStyles} mqMac="display:block;">
        mqMac
      </Div>
      <Div as="code" {...codeStyles} mqLinux="display:block;">
        mqLinux
      </Div>
      <Div as="code" {...codeStyles} mqPortrait="display:block;">
        mqPortrait
      </Div>
      <Div as="code" {...codeStyles} mqLandscape="display:block;">
        mqLandscape
      </Div>
      <Div as="code" {...codeStyles} mqIframe="display:block;">
        mqIframe
      </Div>
      <Div as="code" {...codeStyles} mqNotIframe="display:block;">
        mqNotIframe
      </Div>
      <Div as="code" {...codeStyles} mqNotPhone="display:block;">
        mqNotPhone
      </Div>
      <Div as="code" {...codeStyles} mqWebview="display:block;">
        mqWebview
      </Div>
      <Div as="code" {...codeStyles} mqNotWebview="display:block;">
        mqNotWebview
      </Div>
      <pre>&gt;</pre>
      <p>
        <span className="gold">
          ☝️ Try to resize. It's responsive. Styles use plain CSS, no JS.{' '}
        </span>
        <span>There are many preconfigured breakpoints, explained below. </span>
        <span>
          Only the media queries you use get rendered, not all of them.
        </span>
        <span>Pass EmotionCSS or a plain string. Up to you. </span>
      </p>

      <Div as="p" mqIframe="display:none;">
        <span className="gold">
          ⚠️ There used to be a paragraph in this spot. But now it's gone!
        </span>{' '}
        That was just an easy media query to check for iframe:{' '}
        <code>
          {`<`}Div as="p" mqNotIframe="display:none"{`>`}
        </code>
        . There are similar ones for WebView, Portrait mode, etc.
      </Div>
      <Div as="p" mqNotIframe="display:none;">
        <span className="gold">
          😭 The values above don't actually reflect your true screen size.{' '}
        </span>
        <span>
          Because this content is inside an iframe. Width of the sidebar is
          subtracted.{' '}
        </span>
        <span>
          <a
            href="iframe.html?id=5--better-media-queries&viewMode=story"
            target="_blank"
          >
            Click here to preview this component in its own tab{' '}
            <svg viewBox="0 0 1024 1024">
              <path
                fill="orange"
                d="M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z"
              ></path>
            </svg>
          </a>{' '}
          👈 Then, look back at this paragraph! 😏
        </span>
      </Div>
      {/* <p>
        <span>
          <span>
            Scroll down for a full breakdown 🕺 of properties and variables.
          </span>
        </span>
      </p> */}
    </Div>
  );
};

export default {
  component: Div,
  id: '5',
  title: 'Media Queries',
  argTypes: {},
  isExpanded: true,
  parameters: {
    docs: {
      //  Yes, the CSS rules themselves are not typed, but you should probably be using visual regression testing for visual regression bugs anyway. All props, variables, helpers, hooks, and components in this library do use Typescript.
      // No need for media queries (CSS/SCSS) or to remember which index number controls which breakpoint (styled-system).
      // Read more about the <a href="/" style="color:orange;">philosophy</a> of this project, and what problems it attempts to solve.
      description: {
        component: `This UI library makes it easier to style React components for multiple devices - with easy to remember JSX props. For convenience, all mq props accept EmotionCSS or string type.
        
Pass \`props.mqDesktop\` to style desktop devices, \`props.mqPhoneSmall\` for small phones, \`props.mqLargeTablet\` for large tablets, and \`props.css\` for everything else. If you don't like inline styles, that's cool. You can \`import vars from '@ps/ui/style/vars'\` and use \`vars.mq.desktop\`, \`vars.mq.phoneSmall\`, \`vars.mq.largeTablet\`, \`vars.mq.webView\`, etc. 

Fo more useful goodies, read <a href="/" style="color:orange;">variables and themes</a>. Scroll down below for more in-depth examples 👇
          `,
      },
      source: {
        code: `
const containerStyleProps = {
  // Predefine styles for multiple breakpoints here. Or do it inline.
  mqLg: ':after { content:"this will only show on large screens"; }',
  // To control how text wraps in small screens:
  mqSm: 'p span { display: block; white-space: nowrap; }',
  // A good way to start is with plain default \`css\` prop.
  // Then override specific properties like text-align, display, white-space, etc. 
  // with custom props such as mqSmallPhone, mqLargeTablet, etc.
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
// or inline, one at a time <Div css="display:none;" mqLg="display:block;" />
<Div {...containerStyleProps}>

...

      <Div as="code" {...codeStyles} mqLg="display:block;">
        mqLg
      </Div>
      <Div as="code" {...codeStyles} mqSm="display:block;">
        mqSm
      </Div>
      <Div as="code" {...codeStyles} mqDesktop="display:block;">
        mqDesktop
      </Div>
      <Div as="code" {...codeStyles} mqMobile="display:block;">
        mqMobile
      </Div>
      <Div as="code" {...codeStyles} mqLargeTablet="display:block;">
        mqLargeTablet
      </Div>
      <Div as="code" {...codeStyles} mqTablet="display:block;">
        mqTablet
      </Div>
      <Div as="code" {...codeStyles} mqPhone="display:block;">
        mqPhone
      </Div>
      <Div as="code" {...codeStyles} mqSmallPhone="display:block;">
        mqSmallPhone
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
