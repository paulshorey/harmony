import Block from 'components/content/atoms/Block';
import Card from '.';
export default (args: any) => (
  <Block variant="bg" onLight>
    <Card {...args}>Here is some text. Bla bla lorem ipsum. Whatever...</Card>
  </Block>
);
