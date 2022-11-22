import { Fragment } from 'react';
import HorizontalCarousel from '@ps/ui/components/HorizontalCarousel';
import { css } from '@emotion/react';
import FeatureSlide from './FeatureSlide';

const style = ({ theme }) => css`
  margin: 2rem 0 3rem;
  img {
    height: 15rem;
  }
  .__prev,
  .__next {
    transform: scale(0.5, 0.67) !important;
    color: white !important;
    opacity: 0.5 !important;
  }
`;
const slides = [
  {
    title: 'Harmony UI',
    subtitle: 'Component library and styling system for micro front ends',
    href: 'https://ui.paulshorey.com',
  },
  {
    title: 'Harmony Fn',
    subtitle: 'Organize functions and code snippets for client and server',
    href: 'https://fn.paulshorey.com',
  },
  {
    title: 'Colorful Cloud Logger',
    subtitle: 'Universal (NodeJS and browser) console logging solution',
    href: 'https://github.com/paulshorey/colorful-console-logger',
  },
  {
    title: 'Responsive development',
    subtitle: 'Preview a website on multiple different sizes',
    href: 'https://responsive.paulshorey.com',
  },
  {
    title: 'Besta.domains',
    subtitle: 'Find the "best available domain names" for your business',
    href: 'https://besta.domains',
  },
  {
    title: 'Wordio.co',
    subtitle: 'Natural language processing API for developers',
    href: 'https://wordio.co',
  },
];

const LatestProjectsCarousel = () => {
  return (
    <Fragment>
      <HorizontalCarousel ss={style}>
        {slides.map((slide, i) => (
          <FeatureSlide slide={slide} key={i} />
        ))}
      </HorizontalCarousel>
    </Fragment>
  );
};

export default LatestProjectsCarousel;
