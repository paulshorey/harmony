import { css } from '@emotion/react';

export default css`
  .hide-mobile {
    @media (max-width: 930px) {
      display: none !important;
    }
  }
  .show-mobile {
    @media (min-width: 931px) {
      display: none !important;
    }
  }

  .section {
    background: rgb(79, 79, 193);
    border: solid 1px white;
  }
  .slide {
    background: orange;
  }
  .section,
  .slide {
    @media (max-width: 930px) {
      padding: 50px 0;
    }
    p {
      color: white;
      font-size: 36px;
      padding: 20px 30px;
      margin: 0;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 1px;
      @media (max-width: 930px) {
        font-size: 24px;
      }
    }
  }
  @media (max-width: 930px) {
    .fp-section,
    .fp-slide,
    .fp-slides,
    .fp-slidesContainer {
      display: block !important;
      height: auto !important;
      width: auto !important;
      overflow: visible !important;
      float: none !important;
    }
    .fp-slidesContainer {
    }
  }
`;
