import Box from '@ps/ui/components/content/Box';
import Component from '.';

export default (props: props) => (
  <Box variant="centered">
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
  </Box>
);
