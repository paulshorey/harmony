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
      display: inline-block;
      position: relative;
      padding: 0 1rem;
      margin: 0;
      line-height: ${props.theme.header.height};
      height: ${props.theme.header.height};
      position: absolute;
      left: 0.25rem;
      transform: scale(0.67);
      transform-origin: left;
    `,
  },
};
