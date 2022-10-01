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
          CTA 1
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp {...args}>default</Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp variant="outline" color="cta1" {...args}>
          outline
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp variant="link" color="cta1" {...args}>
          link
        </Comp>
        &nbsp;&nbsp;&nbsp;
      </Content>
    </Container>
    <Container variant="gradient" color="cta1">
      <Title color="cta2">onDark:</Title>
      <Content>
        <Comp onDark variant="gradient" color="cta2" {...args}>
          CTA 2
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp onDark {...args}>
          default
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp onDark variant="outline" color="cta2" {...args}>
          outline
        </Comp>
        &nbsp;&nbsp;&nbsp;
        <Comp onDark variant="link" color="cta2" {...args}>
          link
        </Comp>
        &nbsp;&nbsp;&nbsp;
      </Content>
    </Container>
  </div>
);
