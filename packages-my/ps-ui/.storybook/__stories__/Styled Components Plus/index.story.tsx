// import disableDefaultArgs from '@ps/ui/.storybook/utils/disable-default-args';
import Template from './_story';
import description from './_story.md';
import { Component } from '@ps/ui/components/form/atoms/Button';
// import variants from './variants';

export const StyledComponentsPlus = Template.bind({});
// Button.argTypes = {
//   ...disableDefaultArgs,
//   variants: {
//     control: {
//       type: 'multi-select',
//     },
//     options: Object.keys(variants), // Automatically inferred when 'options' is defined
//   },
// };
// Button.args = {
//   variants: ['default', 'text'],
//   children: 'Submit',
// };

export default {
  component: Component,
  id: '4',
  parameters: {
    docs: {
      description: {
        component: description,
      },
      source: {
        code: `
import { ssBlock } from '@ps/ui/components/content/atoms/Block';
import { ssButton } from '@ps/ui/components/form/atoms/Button';

const Container = ssBlock({
  ss: (theme) =>
    \`padding: 1.2rem 1rem 1.9rem; \${
      theme.instance.variants.bgGradient && \`padding-top: 1.3rem;\`
    }\`,
});
const Content = ssBlock({ ss: \`padding: 0\` });
const Title = ssBlock({
  variant: 'textGradient',
  ss: \`padding: 0.125rem 0 0 0.25rem;\`,
});
const Button = ssButton({
  ss: \`margin: 1rem 1rem 0rem 0.25rem;\`,
});

export default (args: any) => (
  <div>
    <Container variant="bg">
      <Title color="cta1">onLight:</Title>
      <Content>
        <Button variant="bgGradient" color="cta1" {...args}>
          gradient cta1
        </Button>
        <Button color="cta1" {...args}>
          default cta1
        </Button>
        <Button {...args}>default</Button>
        <Button variant="link" color="cta1" {...args}>
          link
        </Button>
        <Button variant="disabled" color="cta1" {...args}>
          disabled
        </Button>
      </Content>
    </Container>
    <Container variant="bgGradient" color="cta1">
      <Title onDark color="cta2">
        onDark:
      </Title>
      <Content>
        <Button onDark variant="bgGradient" color="cta2" {...args}>
          gradient cta2
        </Button>
        <Button color="cta2" onDark {...args}>
          default cta2
        </Button>
        <Button onDark {...args}>
          default
        </Button>
        <Button onDark variant="link" color="cta2" {...args}>
          link
        </Button>
        <Button onDark variant="disabled" color="cta2" {...args}>
          disabled
        </Button>
      </Content>
    </Container>
  </div>
);
        
        `,
      },
    },
  },
};
