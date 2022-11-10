import css from '@ps/ui/helpers/css';

export default {
  Header: {
    as: 'header',
    ss: (props) => css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: ${props.theme.header.height};
      display: flex;
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
  Nav: {
    as: 'nav',
    ss: (props) => css`
      display: flex;
      margin: 1rem 1rem 0.9rem 1rem;
      > * {
        line-height: calc(${props.theme.header.height} - 2rem);
        display: inline-flex;
        margin-right: 1rem;
      }
      .Dropdown {
        .Dropdown__menuContainer {
          margin-top: 0.5rem;
          margin-left: -1.5rem;
        }
        ${props.theme.mq.phone} {
          .Dropdown__menuContainer {
            position: fixed !important;
            right: 0 !important;
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            text-align: center;
          }
        }
      }
    `,
  },
  ToggleMenu: {
    componentName: 'ToggleMenu',
    bggradient: 'purple',
    textcolor: 'light',
    ss: (props) => css`
      border-radius: 0.5rem;
      padding: 1rem;
      /* margin: 0.25rem 0 0 0; */
      background-color: transparent;
      backdrop-filter: blur(10px);
      a {
        display: block;
        padding: 0.25rem 0.5rem;
        margin: 0;
      }
    `,
  },
  Logo: {
    componentName: 'Logo',
    ss: (props) => css`
      position: relative;
      padding: 0 1rem;
      margin: 0;
      line-height: ${props.theme.header.height};
      height: ${props.theme.header.height};
      span:nth-child(1) {
        font-size: 2rem;
      }
      span:nth-child(2) {
        font-size: 1.5rem;
        font-weight: 700;
      }
    `,
  },
};
