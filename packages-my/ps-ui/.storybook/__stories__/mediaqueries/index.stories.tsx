import React from 'react';
import Block from '@ps/ui/components/content/atoms/Block';
import { css } from '@emotion/react';
import BlockTemplate from '@ps/ui/components/content/atoms/Block/__story__/Template';

export const MediaQueries = BlockTemplate;

export default {
  component: Block,
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
        
Pass \`props.ssDesktop\` to style desktop devices, \`props.ssPhoneSmall\` for small phones, \`props.ssLargeTablet\` for large tablets, and \`props.css\` for everything else. If you don't like inline styles, it's ok. You can always \`useTheme()\` and use \`theme.mq.desktop\`, \`theme.mq.phoneSmall\`, \`theme.mq.largeTablet\`, \`theme.mq.webView\`, etc.

For usage, see <a href="/" style="color:orange;">Block</a> component story or click "Show code" below. Scroll down to see a full list of props and sizes.
          `,
      },
      source: {
        code: `
const containerStyleProps = {
  // Predefine styles for multiple breakpoints here. Or do it inline.
  ssLg: ':after { content:"this will only show on large screens"; }',
  // To control how text wraps in small screens:
  ssSm: 'p span { display: block; white-space: nowrap; }',
  // A good way to start is with plain default \`css\` prop.
  // Then override specific properties like text-align, display, white-space, etc. 
  // with custom props such as ssSmallPhone, ssLargeTablet, etc.
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
// or inline, one at a time <Block css="display:none;" ssLg="display:block;" />
<Block {...containerStyleProps}>

...

      <Block as="code" {...codeStyles} ssLg="display:block;">
        ssLg
      </Block>
      <Block as="code" {...codeStyles} ssSm="display:block;">
        ssSm
      </Block>
      <Block as="code" {...codeStyles} ssDesktop="display:block;">
        ssDesktop
      </Block>
      <Block as="code" {...codeStyles} ssMobile="display:block;">
        ssMobile
      </Block>
      <Block as="code" {...codeStyles} ssLargeTablet="display:block;">
        ssLargeTablet
      </Block>
      <Block as="code" {...codeStyles} ssTablet="display:block;">
        ssTablet
      </Block>
      <Block as="code" {...codeStyles} ssPhone="display:block;">
        ssPhone
      </Block>
      <Block as="code" {...codeStyles} ssSmallPhone="display:block;">
        ssSmallPhone
      </Block>

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
