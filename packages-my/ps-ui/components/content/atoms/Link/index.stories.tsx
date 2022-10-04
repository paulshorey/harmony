import { Props } from '.';
import Template from './_story';
import description from './_story.md';
// import { argTypes } from 'styles/storybook';
// import variants from './variants';
// const variantKeys = Object.keys(variants);
// const args = {
//   ss: '',
//   variants: ['border-bottom'],
//   variant: '',
//   color: 'accent',
//   shade: '',
// };

const Component: React.FC<Props> = (props: Props) => <div>test</div>;

export const Link = Template.bind({});
// Link.argTypes = argTypes(variantKeys);
// Link.args = args;

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
        code: ``,
      },
    },
  },
};
