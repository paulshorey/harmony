import Block from '@ps/ui/components/content/Block';
import Component from '.';

const Story = (props) => (
  <Block variant="centered">
    <Component
      variant={'titleImageTextImage'}
      image={
        <img src="https://cdn.mqtatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" />
      }
      text={
        <p>
          On desktop, this text is shown left of the image. <br /> But on
          mobile, this is rendered below the image.{' '}
        </p>
      }
      title={<h1>This is the title</h1>}
      {...props}
    />
  </Block>
);

export default Story;
