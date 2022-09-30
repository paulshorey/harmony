import { Block } from '@ps/ui/components/content/atoms/Block';
import Comp from '@ps/ui/components/form/atoms/Button';

const Container = Block({ ss: `padding: 1rem;` });
const Content = Block({ ss: `padding: 1rem;` });
const Label = Block({
  variant: 'gradientText',
  ss: `padding: 0.125rem 0 0.25rem;`,
});

export default (args: any) => (
  <div>
    <Container ss="background:white;">
      <Label>onLight:</Label>
      <Content>
        <Comp {...args} />
      </Content>
    </Container>
    <Container variant="gradientBg onDark">
      <Label variant="onDark">onDark:</Label>
      <Content>
        <Comp {...args} variant={'onDark'} />
      </Content>
    </Container>
  </div>
);
