import React from 'react';
import GenericComponent from 'components/content/atoms/Block';

import Template from './_story';
import description from './_story.md';

export const MediaQueries = Template;
// MediaQueries.args = {
//   // variants: ['bgDarkg', 'onDark', 'padding'],
// };

export default {
  component: GenericComponent,
  id: '2',
  argTypes: {},
  isExpanded: true,
  parameters: {
    docs: {
      description: {
        component: description,
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
