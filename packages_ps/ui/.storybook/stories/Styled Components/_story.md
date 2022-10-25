**There are two ways to use these components:**

<br />

### #1 inline styles

`import Button from ... ` default export is ready to use: `<Button variant="bgGradient" color="cta2" ss="padding:1rem" />`  
 <br />

### #2 @emotion/styled

1. **Import:** `import { withButton } from ...` named export
2. **Instantiate:** <code>Button = withButton({ color:'cta', variant="gradient" ss:'font-size:1rem;' })</code> with "common" props
3. **Use:** `<Button variant="bgGradient" ss="font-size: 1.5rem;font-weight:bold;" />` with "specific" props for this instance

<br />
### This is just like StyledComponents <code>styled.button``</code>, but with added functionality...

The "common" vs "specific" props will be intelligently combined. Style props `ss`/`ssDesktop`/etc. will be added together, not overwritten (if both are strings). Other props will be overwritten like a typical deep merge. This lets you apply a style or set of styles to all instances, then fine tune just one.

```
  const DefaultButton = withButton({
      variant:"gradient",
      ss:`
        font-size: 1rem;
        font-weight: 400;
        padding: 1rem;
      `,
      onClick: cancelHandler
  })

  const CTAButton = withButton({
      color:'cta2',
      variant:"bgGradient",
      ss:`
        color: orange;
        border-color: orange;
      `,
      onClick: ctaHandler
  })

  <CTAButton> Click Me </CTAButton>
  <DefaultButton> or not </DefaultButton>

  <CTAButton ss="font-weight: 700; font-size: 2rem; color: red;"> NO, SERIOUSLY, CLICK ME </CTAButton>
  <DefaultButton ss="font-size: 0.5rem; opacity: 0.5;"> But you the boss. Do what you like. </DefaultButton>

```

This gets more interesting with [variants and variables](#)! Attempting to put the "C" back into "CSS".  
Also make sure to read about [media queries](#). If you style for multiple devices, this will save a lot of time!
