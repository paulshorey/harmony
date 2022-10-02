import { ssBlock } from '@ps/ui/components/content/atoms/Block';
import Comp from '@ps/ui/components/form/atoms/Button';

const Container = ssBlock({ ss: `padding: 1rem;` });
const Content = ssBlock({ ss: `padding: 1rem;` });
const Title = ssBlock({
  variant: 'gradientText',
  ss: `padding: 0.125rem 0 0.25rem;`,
});

export default (args: any) => (
  <div>
    <Container variant="bg">
      <Title color="cta1">onLight:</Title>
      <Content>
        <Comp variant="gradient" color="cta1" {...args}>
          gradient cta1
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp color="cta1" {...args}>
          default cta1
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp {...args}>default</Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp variant="link" color="cta1" {...args}>
          link
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp variant="disabled" color="cta1" {...args}>
          disabled
        </Comp>
        &nbsp;&nbsp;&nbsp;
      </Content>
    </Container>
    <Container variant="gradient" color="cta1">
      <Title color="cta2">onDark:</Title>
      <Content>
        <Comp onDark variant="gradient" color="cta2" {...args}>
          gradient cta2
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp color="cta2" onDark {...args}>
          default cta2
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp onDark {...args}>
          default
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp onDark variant="link" color="cta2" {...args}>
          link
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp onDark variant="disabled" color="cta2" {...args}>
          disabled
        </Comp>
        &nbsp;&nbsp;&nbsp;
      </Content>
    </Container>
  </div>
);
