import { css } from '@emotion/react';

export default css`
  .hide-sm {
    @media (max-width: 930px) {
      display: none !important;
    }
  }
  .show-mobile {
    @media (min-width: 931px) {
      display: none !important;
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
