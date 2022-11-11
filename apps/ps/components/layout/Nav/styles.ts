import css from '@ps/ui/helpers/css';

export default {
  Nav: {
    ss: (props) => css`
      position: fixed;
      top: 0;
      right: 0;
      z-index: 101;
      display: flex;
      margin: 1rem 0.1rem 0.9rem 1rem;
      > * {
        line-height: calc(${props.theme.header.height} - 2rem);
        display: inline-flex;
        margin-right: 1rem;
      }
      .Dropdown {
        .Dropdown__menuContainer {
          top: -1.25rem;
          margin-left: -1.25rem;
          margin-right: -1.25rem;
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
      display: flex;
      flex-direction: column;
      border-radius: 0.5rem;
      padding: 1rem;
      background-color: transparent;
      backdrop-filter: blur(10px);
      a {
        display: block;
        padding: 0.25rem 0.5rem;
        margin: 0;
      }
      .Button {
        padding: 0 0.5rem;
        > span {
          font-size: 1.125rem;
        }
      }
      > * {
        align-self: flex-end;
        text-align: right;
        margin: 0.25rem 0;
        display: block;
      }
    `,
  },
};
