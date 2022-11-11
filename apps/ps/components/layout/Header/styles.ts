import css from '@ps/ui/helpers/css';

export default {
  Header: {
    ss: (props) => css`
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100vw;
      height: ${props.theme.header.height};
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      a {
        color: var(--color-text) !important;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      > * {
        font-family: var(--font-family-title);
        letter-spacing: 0.5px;
      }
    `,
  },
  Logo: {
    ss: (props) => css`
      position: relative;
      padding: 0.125rem 1rem 0;
      margin: 0;
      line-height: ${props.theme.header.height};
      height: ${props.theme.header.height};
      span:nth-child(1) {
        font-size: 1.875rem;
      }
      span:nth-child(2) {
        font-size: 1.5rem;
        font-weight: 700;
      }
    `,
  },
};
