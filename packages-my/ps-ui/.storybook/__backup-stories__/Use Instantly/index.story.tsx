import Template from './_story';
import description from './_story.md';
import { Component } from '../../../components/form/atoms/Button';

export const UseInstantly = Template.bind({});

export default {
  component: Component,
  id: '4',
  parameters: {
    docs: {
      description: {
        component: description,
      },
      source: {
        code: `import { withBlock } from '../../../components/content/atoms/Block';
import { withButton } from '../../../components/form/atoms/Button';

...

const Container = withBlock({
  ss: (theme) =>
    \`padding: 1.2rem 1rem 1.9rem; \${
      theme.instance.variants.bg-gradient && \`padding-top: 1.3rem;\`
    }\`,
});
const Content = withBlock({ ss: \`padding: 0\` });
const Title = withBlock({
  variant: 'text-gradient',
  ss: \`padding: 0.125rem 0 0 0.25rem;\`,
});
const Button = withButton({
  ss: \`margin: 1rem 1rem 0rem 0.25rem;\`,
});

...

<Container variant="bg-color">
  <Title color="cta1">on light:</Title>
  <Content>
    <Button variant="bg-gradient" color="cta1" {...args}>
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

<Container variant="bg-gradient" color="cta1">
  <Title color="cta2">on gradient:</Title>
  <Content>
    <Button variant="bg-gradient" color="cta2" {...args}>
      gradient cta2
    </Button>
    <Button color="cta2" {...args}>
      default cta2
    </Button>
    <Button {...args}>default</Button>
    <Button variant="link" color="cta2" {...args}>
      link
    </Button>
    <Button variant="disabled" color="cta2" {...args}>
      disabled
    </Button>
  </Content>
</Container>

<Container variant="bg-color" shade="onDark">
  <Title shade="onDark">on dark:</Title>
  <Content>
    <Button variant="bg-gradient" color="cta1" {...args}>
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

        `,
      },
    },
  },
};
