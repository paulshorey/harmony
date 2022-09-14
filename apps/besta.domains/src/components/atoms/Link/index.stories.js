import React from 'react';
import Link from '.';
import Button from 'src/components/layout/molecules/Button';

export default {
  title: 'Design Systems/atoms/Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const External = Template.bind({});
External.args = {
  href: 'https://spiral.us',
  children: <>Link to external website</>,
};

export const Internal = Template.bind({});
Internal.args = {
  href: '/about',
  children: <>Link to internal page/route in NextJS app</>,
};

export const WithButton = Template.bind({});
WithButton.args = {
  href: 'https://apps.apple.com/US/app/id1526316317',
  children: <Button>Download our app</Button>,
};
