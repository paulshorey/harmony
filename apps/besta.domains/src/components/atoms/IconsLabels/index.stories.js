import React from 'react';
import IconsLabels from '.';

export default {
  title: 'Design Systems/Atoms/IconsLabels',
  component: IconsLabels,
};

const Template = (args) => <IconsLabels {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      src: '/images/partners-page/join-next/1.svg',
      alt: 'promote',
      label: 'We agree to promote your work to our users.',
    },
    {
      src: '/images/partners-page/join-next/2.svg',
      alt: 'content',
      label: 'You agree to let us use your site content to do so.',
    },
    {
      src: '/images/partners-page/join-next/3.svg',
      alt: 'banking',
      label: 'You agree to share your banking details for faster payment.',
    },
  ],
};
