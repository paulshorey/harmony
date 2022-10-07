import Block from 'components/content/atoms/Block';
import Component from '.';

export default (props: props) => (
  <Block variant="centered">
    <Component
      variant={'title-image-text-image'}
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
