import Block from '@ps/ui/components/Block';
import Link from '@ps/ui/components/Link';
import { css } from '@emotion/react';

const style = ({ theme }) => css`
  width: 620px;
  @media (max-width: 620px) {
    width: 100vw;
  }
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
`;

const LatestProjectsCarousel = () => {
  return (
    <Link href="/" target="_blank" ss="display:inline-block;">
      <Block width="cardX" data-color="transparentCard" ss={style}>
        <Block ss="padding: 0 2rem;" data-fggradient data-color="rainbow">
          <h2>Harmony UI</h2>
          <p>Styling system / Component library / Monorepo setup</p>
        </Block>
      </Block>
    </Link>
  );
};

export default LatestProjectsCarousel;
