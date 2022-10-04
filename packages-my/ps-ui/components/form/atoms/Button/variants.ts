export default {
  'default': (theme: theme) => {
    const isDark =
      theme.instance.variants?.['bg-gradient'] ||
      theme.instance.shade === 'onDark';
    return `
      font-size: 1rem;
      overflow: hidden;
      border-radius: 7px;
      position: relative;
      display: inline-block;
      cursor: pointer;
      border: solid 1px;
      border-color: ${theme.getColor('bgDark')};
      box-shadow: 1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
      padding: 12px 24px;
      color: ${theme.getColor('bgDark')};
      // text-shadow: 1px 1px 1px rgba(255,255,255,0.15);
      ${
        isDark
          ? `
          background-image: linear-gradient(
            160deg,
            hsl(0, 0%, 95%) 0%,
            hsl(0, 0%, 77%) 67%,
            hsl(0, 0%, 80%) 100%
          )!important
        `
          : `
          background-image: linear-gradient(
            160deg,
            hsl(0, 0%, 93%) 0%,
            hsl(0, 0%, 85%) 67%,
            hsl(0, 0%, 93%) 100%
          ) !important;
        `
      };
      &:not(:hover):not(:focus) {
        border-top-color: transparent;
        border-left-color: transparent;
        > * {
          top: 0;
          left: 0;
        }
      }
      &:hover {
        ${
          isDark
            ? `
          box-shadow: 1.5px 2.25px 0 0 hsl(0, 0%, 33%, 0.67),
            1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
          `
            : `
          box-shadow: 1px 2px 0 0 hsl(0, 0%, 33%, 0.33),
            1px 2px 3px 0 hsl(0, 0%, 0%, 0.15);
          `
        };
      }
      &:focus {
        border-bottom-color: transparent;
        border-right-color: transparent;
        > * {
          position:relative;
          top: 1px;
          left: 1px;
        }
        box-shadow: inset 1px 2px 3px 0 hsl(0, 0%, 0%, ${
          isDark ? '0.5' : '0.15'
        });
        > * {
          top: 1px;
          left: 1px;
        }
      }
      &:focus:hover,
      &:focus-visible:hover {
        outline: none !important;
      }
      &:focus:not(:hover),
      &:focus-visible:not(:hover) {
        outline-style: double !important;
        outline-width: 1px !important;
        outline-color: ${theme.getColor('bgDark')} !important;
      }
    `;
  },
  'bg-gradient': (theme: theme) => `
    color: ${theme.getColor('buttonText')};
    text-shadow: 1px 1px 1px ${theme.getColor('bgDark')};
    background-size: 200% auto;
    & {
      background-image: linear-gradient(
        150deg,
        ${theme.getColor('bgLight')} -10%,
        ${theme.getColor('bgDark')} 60%,
        ${theme.getColor('bgLight')} 100%
      ) !important;
    }
    &:hover,
    &:focus:not(:hover) {
      transition: background-position 300ms linear 0s;
      background-position: right center;
      border-color: ${theme.getColor('bgLight')};
    }
    &:focus {
    }
  `,
  'disabled': (theme: theme) => {
    const shadowColor =
      theme.instance.shade === 'onDark'
        ? 'hsla(0, 0%, 80%)'
        : 'hsla(0, 0%, 90%)';
    return `
      cursor: not-allowed;
      text-shadow: none;
      &,
      &:hover,
      &:focus {
        border: none !important;
        box-shadow: none !important;
        background: ${shadowColor};
        color: ${theme.getColor('subtle', 'default', 'onLight')};
      }
    `;
  },
  'link': (theme: theme) => {
    return `
      border: none !important;
      box-shadow: none !important;
      background: none !important;
      color: ${theme.getColor('link')};
      &:hover:not(:focus) {
        color: ${theme.getColor('border')};
        ${
          theme.instance.shade === 'onDark'
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
  'pulsing': (theme: theme) => {
    const shadowColor = theme.instance.shade === 'onDark' ? 255 : 0;
    return `
      padding: 12px 24px;
      border-radius: 7px;
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
  'loading-circle': (theme: theme) => `
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