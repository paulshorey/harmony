export default {
  default: `
  position:relative;
`,

  textColor: `
color: var(--color-text);
`,

  textGradient: `
background-color: var(--color-text);
background-image: var(--color-text-gradient);
background-size: 100%;
background-clip: text;
-webkit-text-fill-color: transparent;
`,

  textGradientUnderlined: `
position:relative;
color: var(--color-text);
background-color: var(--color-text);
background-image: var(--color-text-gradient);
background-size: 100%;
background-clip: text;
-webkit-text-fill-color: transparent;
&::after {
content: '';
position: absolute;
bottom: -0.125rem;
left: 0;
right: 0;
height: 0.125rem;
width:100%;
background-color: var(--color-text);
background-image: var(--color-text-gradient);
background-size: 100%;
}
`,

  bgColor: (props) => {
    // props['data-color'] = (props['data-color'] || '') + ' ondark';
    return `
  color: var(--color-text);
  background: var(--color-bg);
`;
  },

  bgGradient: (props) => {
    // props['data-color'] = (props['data-color'] || '') + ' ondark';
    return `
  color: var(--color-text);
  background: var(--color-bg);
  background-image: var(--color-bg-gradient);
`;
  },

  hoverTilt: (props) => `
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 50px rgb(17 17 17 / 20%);
    transform: rotate(-2deg) translateY(-2px) scale(1.05);
    // ${props.theme.mq.sm} {
    //   transform: rotate(-1.5deg) translateY(-1px) scale(1.025);
    // }
  }
`,

  card: (props) => `
    background-color: var(--color-bg);
    background: white;
    padding: 3rem 2rem 2.25rem 2.5rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.1);
`,

  //   textUnderlineBold: `
  // text-decoration: underline;
  // text-underline-offset: 0.25rem;
  // text-decoration-thickness: 0.1rem;
  // `,

  //   textUnderlineStrong: `
  // text-decoration: underline;
  // text-underline-offset: 0.25rem;
  // text-decoration-thickness: 0.125rem;
  // `,
};
