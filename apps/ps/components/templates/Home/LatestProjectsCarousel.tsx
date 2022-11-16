import { Fragment } from 'react';
// import HorizontalCarousel from '@ps/ui/components/HorizontalCarousel';
// import { css } from '@emotion/react';
import HarmonyUI from './HarmonyUI';

// const style = ({ theme }) => css`
//   margin: 2rem 0 3rem;
//   img {
//     height: 15rem;
//   }
//   .__prev,
//   .__next {
//     transform: scale(0.5, 0.67) !important;
//     color: white !important;
//     opacity: 0.5 !important;
//   }
// `;
// const slides = [{}, {}, {}, {}];

const LatestProjectsCarousel = () => {
  return (
    <Fragment>
      {/* <HorizontalCarousel ss={style}>
    {slides.map((slide, i) => (
       key={i} */}
      <HarmonyUI />
      {/* ))}
    </HorizontalCarousel>*/}
    </Fragment>
  );
};

export default LatestProjectsCarousel;
