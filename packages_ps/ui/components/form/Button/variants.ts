export default {
  default: (props: any) => `
    font-size: 1.1rem;
    overflow: hidden;
    border-radius: 7px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    border: solid 1px;
    border-color: var(--color-bg);
    box-shadow: 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
    padding: 0.7rem 1.4rem;
    color: var(--color-text);
    font-weight: 500;
    vertical-align: middle;
    &:hover {
      > * {
        position:relative;
        top: -1px;
        left: -1px;
      }
    }
    &:not(:hover):not(:focus) {
      border-top-color: transparent;
      border-left-color: transparent;
      > * {
        position:relative;
        top: -1px;
        left: -1px;
      }
    }
    &:focus {
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: transparent;
      border-right-color: transparent;
      box-shadow: inset 1px 2px 3px 0 hsl(0, 0%, 0%, 0.25);
      > * {
        position:relative;
        top: 0;
        left: 0;
      }
    }
    &:focus,
    &:focus:not(:hover),
    &:focus-visible:not(:hover) {
      outline-style: double !important;
      outline-width: 1px !important;
      outline-color: var(--color-info) !important;
    }
    &[data-bgGradient] {
      background-size: 200% auto;
      background-image: var(--color-bg-gradient);
      &:hover,
      &:focus:not(:hover) {
        transition: background-position 300ms linear 0s;
        background-position: right center;
        border-color: var(--color-bg);
      }
    }
  `,
  outlined: (props: any) => `
    color: var(--color-bg);
    background: none;
    background-image: none !important;
    border-color: var(--color-bg) !important;
    border-width: 2px;
  `,
  icon: (props: any) => `
    padding: 0;
    height: 3rem;
    width: 3rem;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    align-items: baseline;
    text-align: center;
    line-height: 3rem;
  `,
  disabled: (props: any) => {
    const shadowColor = props?.onDark ? 'hsla(0, 0%, 80%)' : 'hsla(0, 0%, 90%)';
    return `
      cursor: not-allowed;
      text-shadow: none;
      &,
      &:hover,
      &:focus {
        border: none !important;
        box-shadow: none !important;
        background: ${shadowColor};
        color: var(--color-subtle);
      }
    `;
  },
  link: (props: any) => {
    return `
      border: none !important;
      box-shadow: none !important;
      background: none !important;
      color: var(--color-bg);
      &:hover:not(:focus) {
        color: var(--color-bg);
        ${
          props?.onDark
            ? `
            box-shadow: 1px 2px 1px 1px hsl(0, 0%, 33%, 0.33),
              2px 2px 3px 0 hsl(0, 0%, 0%, 0.2) !important;
            `
            : `
            box-shadow: 1px 2px 1px 1px hsl(0, 0%, 33%, 0.33),
              2px 2px 3px 0 hsl(0, 0%, 0%, 0.15) !important;
            `
        };
      }
      &:focus {
        box-shadow: inset 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15) !important;
      }
    `;
  },
  pulsing: (props: any) => {
    const shadowColor = props?.onDark ? 255 : 0;
    return `
      padding: 12px 24px;
      box-shadow: 0 0 0 0
        rgba(${shadowColor}, ${shadowColor}, ${shadowColor}, 0.1);
      animation: pulse 4s infinite cubic-bezier(0.66, 0, 0, 1);
      @keyframes pulse {
        to {
          box-shadow: 0 0 0 30px
            rgba(${shadowColor}, ${shadowColor}, ${shadowColor}, 0);
        }
      }
    `;
  },
  loadingCircle: (props: any) => `
      @keyframes donut-spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      display: inline-block;
      border: 4px solid rgba(255, 255, 255, 0.1);
      border-left-color: white;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: donut-spin 1.2s linear infinite;
`,
};
