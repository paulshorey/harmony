import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import Box from '../Box';
import Flex from '../Flex';
import Button, { Props } from '.';

const handleClick = action('Button clicked');

export default {
  component: Button,
  title: 'Design Systems/Atoms/Button',
};

const Template: Story<Props> = ({ ...args }) => (
  <Flex flexDirection="column" mt={12} textAlign="center">
    <Box mb={'24px'}>
      <div>Small</div>
      <Flex>
        <Button size="sm" {...args} />
        <Button isLoading size="sm" {...args} />
        <Button disabled size="sm" {...args} />
      </Flex>
    </Box>

    <Box mb={'24px'}>
      <div>Medium (Default)</div>
      <Flex>
        <Button size="md" {...args} />
        <Button isLoading size="md" {...args} />
        <Button disabled size="md" {...args} />
      </Flex>
    </Box>

    <Box mb={'24px'}>
      <div>Large</div>
      <Flex>
        <Button size="lg" {...args} />
        <Button isLoading size="lg" {...args} />
        <Button disabled size="lg" {...args} />
      </Flex>
    </Box>

    <Box mb={'24px'}>
      <div>Color Support (All theme colors)</div>
      <Flex>
        <Button colorScheme="pink" {...args} />
        <Button colorScheme="black" {...args} />
        <Button colorScheme="teal" {...args} />
      </Flex>
    </Box>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  isLoading: false,
  label: 'Click me',
  onClick: handleClick,
};

export const Outline = Template.bind({});
Outline.args = {
  disabled: false,
  isLoading: false,
  label: 'Click me',
  onClick: handleClick,
  variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
  disabled: false,
  isLoading: false,
  label: 'Click me',
  onClick: handleClick,
  variant: 'ghost',
};

export const Link = Template.bind({});
Link.args = {
  disabled: false,
  isLoading: false,
  label: 'Click me',
  onClick: handleClick,
  variant: 'link',
};

export const BlueGradient = Template.bind({});
BlueGradient.args = {
  disabled: false,
  isLoading: false,
  label: 'Click me',
  onClick: handleClick,
  variant: 'blueGradient',
};

export const PinkGradient = Template.bind({});
PinkGradient.args = {
  disabled: false,
  isLoading: false,
  label: 'Click me',
  onClick: handleClick,
  variant: 'pinkGradient',
};
