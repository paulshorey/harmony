import Block from '@ps/ui/components/Block';
import Link from '@ps/ui/components/Link';
import InfiniteCarousel from '@ps/ui/components/InfiniteCarousel';
import css from '@ps/ui/helpers/css';

const slides = [{}, {}, {}, {}];

const LatestProjectsCarousel = () => {
  return (
    <InfiniteCarousel>
      {slides.map((slide, i) => (
        <Link key={i} href="/" target="_blank" ss="display:inline-block;">
          <Block
            ss={css`
              background: linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.1),
                transparent,
                rgba(255, 255, 255, 0.1)
              );
              padding: 1px 1px 1rem;
              display: inline-block;
              border-radius: 1rem;
              border: solid 1px rgba(255, 255, 255, 0.33);
              cursor: pointer;
              background-position: left center;

              &:hover,
              &:focus:not(:hover) {
                background-image: linear-gradient(
                  45deg,
                  rgba(255, 255, 255, 0.1),
                  transparent,
                  rgba(255, 255, 255, 0.1),
                  rgba(255, 255, 255, 0.2),
                  rgba(255, 255, 255, 0.1),
                  transparent,
                  rgba(255, 255, 255, 0.1)
                );
                padding: 1px 1px 1rem;
                border: solid 1px rgba(255, 255, 255, 0.67);
                background-size: 300% auto;
                transition: background-position 500ms linear 0s,
                  background-size 500ms linear 0s;
                background-position: right center;
              }
            `}
          >
            <Block textgradient="rainbow" ss="padding: 0 2rem;">
              <h2>Harmony UI</h2>
              <p>Styling system / Component library / Monorepo setup</p>
            </Block>
          </Block>
        </Link>
      ))}
    </InfiniteCarousel>
  );
};

export default LatestProjectsCarousel;
