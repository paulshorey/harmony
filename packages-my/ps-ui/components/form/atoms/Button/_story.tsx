import { withBlock } from 'components/content/atoms/Block';
import Button from '.';
export default (args: any) => {
  const Block = withBlock({
    ss: 'padding:1rem;',
    variant: 'bg-white',
  });
  return (
    <div>
      <Block>
        <Button {...args}>Button text</Button>
      </Block>
      <Block variant="bg-gradient" color="cta1">
        <Button {...args}>Button text</Button>
      </Block>
    </div>
  );
};
