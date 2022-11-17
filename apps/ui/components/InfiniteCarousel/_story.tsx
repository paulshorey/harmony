import React from 'react';
import Block from '@ps/ui/components/Block';
import Component from '.';

const Story = (props) => (
  <Block variant="centered" textcolor="light">
    <Component smallerDots={true}>
      <span data-zoom="/photos/aboutus.jpg">
        <img
          height={200}
          width={200}
          src="https://besta.domains/photos/aboutus.jpg"
        />
      </span>
      <span data-zoom="/photos/desk-paul.jpg">
        <img
          height={200}
          width={200}
          src="https://besta.domains/photos/desk-paul.jpg"
        />
      </span>
      <span data-zoom="/photos/desk-samira.jpg">
        <img
          height={200}
          width={386}
          src="https://besta.domains/photos/desk-samira.jpg"
        />
      </span>
      <span data-zoom="/photos/city-samira-paul.jpg">
        <img
          height={200}
          width={334}
          src="https://besta.domains/photos/city-samira-paul.jpg"
        />
      </span>
      <span data-zoom="/photos/aboutus-utah-road.jpg">
        <img
          height={200}
          width={200}
          src="https://besta.domains/photos/aboutus-utah-road.jpg"
        />
      </span>
      <span data-zoom="/photos/about-paul-rocks.jpg">
        <img
          height={200}
          width={200}
          src="https://besta.domains/photos/about-paul-rocks.jpg"
        />
      </span>
    </Component>
  </Block>
);

export default Story;
