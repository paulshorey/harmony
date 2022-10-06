import { Props } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from 'styles/storybook';
import variants from './variants';
import { ReactElement } from 'react';
import Block from '../Block';
const variantKeys = Object.keys(variants);
// const args = {
//   ss: '',
//   variants: ['border-bottom'],
//   variant: '',
//   color: 'accent',
//   shade: '',
// };

export const Link: (props: Props) => ReactElement = (props: Props) => (
  <Block
    variant="bg-gradient text-white"
    color="cta1"
    ss="padding:1rem 2rem;margin:0;"
  >
    Requires props.href
    <ul>
      <li>href starts with # = link to anchor on same page</li>
      <li>href starts with mailto: or tel: = link to open communication app</li>
      <li>href stats with http.* = link to external site </li>
      <li>else = link to internal page </li>
    </ul>
    Will output an anchor ({'<'}a{'>'}) tag with correct set of attributes for
    UX and accessibility.
  </Block>
);

// export const Link = Template.bind({});
// Link.argTypes = argTypes(variantKeys);
// Link.args = args;

export default {
  component: Link,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: description,
      },
      source: {
        code: ``,
      },
      args: { href: '#' },
    },
    args: { href: '#' },
  },
};
