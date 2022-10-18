import { Component } from '.';
import _box from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);

export const Box = _box.bind({});
Box.argTypes = argTypes(variantKeys);
Box.args = {
  className: 'textGradient',
  ss: 'display:inline;',
};

export default {
  component: Component,
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
        code: `import Box, { withBox } from '.';

const Heading = withBox({ as: 'h2', ...args });
const Code = withBox({ as: 'code', ...args });
        
<Box {...args}>
  Box can be used <Heading> as h2</Heading>,{' '}
  <Code> or as &lt;code&gt;</Code>, or as any other HTML
  container element. By default, it's a div.
</Box>`,
      },
    },
  },
};
