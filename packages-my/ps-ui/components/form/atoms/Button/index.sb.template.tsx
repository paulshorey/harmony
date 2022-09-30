import { ssBlock } from '@ps/ui/components/content/atoms/Block';
import Comp from '@ps/ui/components/form/atoms/Button';

const Container = ssBlock({ ss: `padding: 1rem;` });
const Content = ssBlock({ ss: `padding: 1rem;` });
const Label = ssBlock({
  variant: 'gradientText',
  ss: `padding: 0.125rem 0 0.25rem;`,
});

export default (args: any) => (
  <div>
    <Container variant="bg">
      <Label>onLight:</Label>
      <Content>
        <Comp {...args} />
      </Content>
    </Container>
    <Container variant="gradientBg" data-context="onDark">
      <Label>onDark:</Label>
      <Content>
        <Comp {...args} />
      </Content>
    </Container>
  </div>
);
