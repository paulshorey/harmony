import { Component } from '.';
import Template from './_story';
import description from './_story.md';
import { argTypes } from '@ps/ui/styles/storybook';
import variants from './variants';
const variantKeys = Object.keys(variants);
const args = {
  code: `import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
  showNumbers: true,
  language: 'jsx',
  variants: ['transparentDark'],
  prismTheme: {},
  variant: '',
  color: '',
  shade: '',
  ss: '',
};

export const Code = Template.bind({});
Code.argTypes = argTypes(variantKeys);
Code.args = args;

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
        code: `import Code from '@ps/ui/components/content/Code';

<Code 
  code={\`import React, { useState } from "react"; ...\`}
  language="jsx"
/>
`,
      },
    },
  },
};
