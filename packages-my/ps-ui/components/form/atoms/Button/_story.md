`:hover`, then `:focus` on both light/dark variants. Then click at the top of the box and press keyboard `Tab` key to cycle through the buttons as if using an accessibility device. Looks beautiful with no ugly blue outlines! Yet, it is styled for accessibility.

---

Two ways to use all components in this library. First one is very similar to 'styled-components' or '@emotion/styled'.

1. `import { ssButton }` must be instantiated with common props which will apply to all instances: `Button = ssButton({variant:"gradient"})`  
   Then for each instance you can add more unique props which will be intelligently combined with the common ones `<Button color="cta2" />`
2. `import Button` ready to use, but you must manage props passed to multiple instances: `<Button variant="gradient" color="cta2" />`  
   So, the 1st way is best when you use many of the same component. 2nd way is better for a quick one-off.

Variants are like classNames but written in Typescript.
