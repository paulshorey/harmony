const variables = (theme) => `
:root {
  --font-family-text: 'Roboto', sans-serif;
  --font-family-title: 'Roboto', sans-serif;
  --font-family-code: 'Roboto Mono', monospace;

  --color-error: #e30000;
  --color-warning: #e38935;
  --color-success: #27b30d;
  --color-info: #1e90ff;
  --color-notice: #c336e5;
}

:root,
[data-color='light'] {
  --color-text: #666;
  --color-text-lighter: #999;
  --color-text-darker: rgb(153, 153, 153, 0.153);

  --color-bg: #efefef;
  --color-bg-lighter: #efefef;
  --color-bg-darker: #ccc;
  --color-bg-text: #333;

  --color-button: hsl(171, 56%, 37%);
  --color-button-lighter: hsl(171, 61%, 43%);
  --color-button-darker: hsl(171, 52%, 31%);
  --color-button-text: white;

  --color-cta: hsl(171, 56%, 37%);
  --color-cta-lighter: hsl(171, 61%, 43%);
  --color-cta-darker: hsl(171, 52%, 31%);
  --color-cta-text: white;

  /* color: var(--color-text); */
}

[data-color='dark'] {
  --color-text: #fff;
  --color-subtle: #999;
  --color-shadow: rgb(222, 222, 222, 0.22);
  --color-cta: gold;
  --color-border: hsl(45, 88%, 44%);

  --color-bg: hsl(226 0% 25%);
  --color-bg-lighter: hsl(226 0% 30%);
  --color-bg-darker: hsl(226 0% 20%);
  --color-bg-text: #efefef;

  /* color: var(--color-text); */
}

[data-color='purple'] {
  --color-text: #715fe4;
  --color-subtle: #7463f1;

  --color-bg: #715fe4;
  --color-bg-lighter: hsl(272 51% 54%);
  --color-bg-darker: #7463f1;
  --color-bg-text: white;

  /* color: var(--color-text); */
}
[data-color='dark'] [data-color='purple'],
[data-color='dark'][data-color='purple'] {
  /* reverse light/dark */
  --color-subtle: #715fe4;
  --color-text: #7463f1;

  /* color: var(--color-text); */
}

[data-color='orange'] {
  --color-cta: hsl(39deg 95% 50%);

  /* color: var(--color-text); */
}
[data-color='dark'] [data-color='orange'],
[data-color='dark'][data-color='orange'] {
  --color-cta: gold;

  /* color: var(--color-text); */
}

[data-color='archive'] {
  --color-cta: #6556cc;
  --color-cta-lighter: hsl(226 70% 55.5%);
  --color-cta-darker: hsl(272 51% 54%);
  --color-cta-text: white;

  --color-hero2: hsl(239 75% 70%);
  --color-hero2-from: hsl(226 75% 63%);
  --color-hero2-to: hsl(272 60% 67%);
  --color-hero2-text: white;

  /* color: var(--color-text); */
}

`;
export default variables;
