import { css } from '@emotion/react';

export default {
  default: css`
    position: relative;
  `,

  card: css`
    background-color: var(--color-text);
    background: white;
    border-radius: 0.5rem;
    box-shadow: 1px 2px 3px 2px rgba(0, 0, 0, 0.1);
    padding: 0.75rem 0.75rem 0.95rem 1rem;
  `,

  hoverTilt: (props) => css`
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 0 50px rgb(17 17 17 / 20%);
      transform: rotate(-2deg) translateY(-2px) scale(1.05);
      ${props.theme.mq.sm} {
        transform: rotate(-1.5deg) translateY(-1px) scale(1.025);
      }
    }
  `,

  articleX: (props) => css`
    font-size: 1rem;
    width: 100%;
    max-width: 930px;
    margin-left: auto !important;
    margin-right: auto !important;
    /* padding-top: 2.5rem;
  padding-bottom: 5rem; */

    @media (max-width: 990px) {
      width: calc(100% - 60px);
      padding-left: 30px;
      padding-right: 30px;
      /* padding-top: 2rem;
    padding-bottom: 4rem; */
    }

    ${props.theme.mq.phone} {
      width: calc(100% - 40px);
      padding-left: 20px;
      padding-right: 20px;
      /* padding-top: 1.5rem;
    padding-bottom: 3rem; */
    }
  `,

  pageX: (props) => css`
    font-size: 1rem;
    width: 100%;
    max-width: 1170px;
    margin-left: auto !important;
    margin-right: auto !important;
    /* padding-top: 2.5rem;
  padding-bottom: 5rem; */

    @media (max-width: 1230px) {
      width: calc(100% - 60px);
      padding-left: 30px;
      padding-right: 30px;
      /* padding-top: 2rem;
    padding-bottom: 4rem; */
    }

    ${props.theme.mq.phone} {
      width: calc(100% - 40px);
      padding-left: 20px;
      padding-right: 20px;
      /* padding-top: 1.5rem;
    padding-bottom: 3rem; */
    }
  `,
};
