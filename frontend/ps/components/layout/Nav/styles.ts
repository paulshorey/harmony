import css from '@ps/ui/helpers/css';

export default {
  Nav: {
    ss: ({ theme }) => css`
      position: fixed;
      top: 0;
      right: 0;
      z-index: 101;
      display: flex;
      margin: 1rem 0.1rem 0.9rem 1rem;
      > * {
        line-height: calc(${theme.header.height} - 2rem);
        display: inline-flex;
        margin-right: 1rem;
      }
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      .Dropdown {
        .Dropdown__menuContainer {
          margin-top: 1rem;
          margin-left: -1.25rem;
          margin-right: -1.25rem;
        }
        ${theme.mq.phone} {
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
    ss: ({ theme }) => css`
      display: flex;
      flex-direction: column;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem 1rem;
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
