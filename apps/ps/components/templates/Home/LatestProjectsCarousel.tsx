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
  },
  {
    title: 'Harmony Fn',
    subtitle: 'Organize functions and code snippets for client and server',
  },
  {
    title: 'Colorful Cloud Logger',
    subtitle: 'Universal (NodeJS and browser) console logging solution',
  },
  {
    title: 'Responsive design preview',
    subtitle: 'Develop a website on different device sizes',
  },
  {
    title: 'Besta.domains',
    subtitle: 'Find the "best available domain names" for your business',
  },
  {
    title: 'Wordio.co',
    subtitle: 'Natural language processing API for developers',
  },
];

const LatestProjectsCarousel = () => {
  return (
    <Fragment>
      <HorizontalCarousel ss={style}>
        {slides.map(({ title, subtitle }, i) => (
          <FeatureSlide title={title} subtitle={subtitle} key={i} />
        ))}
      </HorizontalCarousel>
    </Fragment>
  );
};

export default LatestProjectsCarousel;
