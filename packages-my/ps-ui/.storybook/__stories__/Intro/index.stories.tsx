import Template from './_story';

export default {
  component: () => {},
  id: '1',
  parameters: {
    docs: {
      source: {
        code: `<h1>Test</h1>`,
      },
      description: {
        component: `
        `,
      },
    },
  },
};

export const Intro = Template.bind({});
Intro.args = {};
