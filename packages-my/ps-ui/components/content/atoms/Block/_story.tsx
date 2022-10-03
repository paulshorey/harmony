//
import Block from '.';
export default (args: any) => (
  <Block {...args}>
    This renders a {'<'}div{'>'} element, with default
    `display:block;position:relative;` style. But you can restyle this however
    you like. There are also Inline, Flex, Grid, Input, Select, Button, etc.
    with other default styles. All components (molecules/organisms) in this
    library use one of these building blocks.
  </Block>
);
