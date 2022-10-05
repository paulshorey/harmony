export default {
  'default': (theme: theme) => `
    position: relative;
  `,
  'bg-white': (theme: theme) => `
    color: ${theme.getColor('text')};;
    background: white;
  `,
  'bg-gradient': (theme: theme) => `
    color: ${theme.getColor('text')};;
    background: ${theme.getColor('bg')};
    background-image: linear-gradient(
      330deg,
      ${theme.getColor('bgLight')} 0%,
      ${theme.getColor('bgDark')} 100%
    );
  `,
  'text-gradient': (theme: theme) => `
    color: ${theme.getColor('link')};
    @supports (--css: variables) {
      background-image: linear-gradient(
        to right,
        ${theme.getColor('subtle')},
        ${theme.getColor('bgLight')},
        ${theme.getColor('bgDark')}
      );
      color: transparent;
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
    }
  `,
  'centered': (theme: theme) => `
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > * {
      display: inline-block;
      margin-left: 0;
      margin-right: 0;
      > * {
        display: inline-block;
        margin-left: 0;
        margin-right: 0;
      }
    }
  `,
  'border-bottom': (theme: theme) => `
    text-decoration: none;
    padding: 0;
    color: ${theme.getColor('text')};
    border-bottom: solid 2px ${theme.getColor('text')};
    margin: 0 2px 4px;
    &:hover {
      border-color: transparent;
    }
  `,
  'code': (theme: theme) => `
    padding: 0.25rem;
    white-space: pre;
    font-family: ${theme.fonts.code};
    font-size: 0.9rem;
    font-style: normal;
    text-decoration: none;
    background: ${theme.getColor('subtle')};
    border: solid 1px #333;
    color: #111;
    border-radius: 4px;
  `,
};
