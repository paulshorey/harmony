**There are two ways to use a component from this library.**

1. `import { ssButton }` must be instantiated with common props which will apply to all instances, just like styled-components or @emotion/styled:  
   `const Button = ssButton({variant:"bgGradient"})`. Then for each instance you can add unique local props: `<Button color="cta2" />`.  
   <br />

2. `import Button` default export is ready to use: `<Button variant="bgGradient" color="cta2" />`  
   <br />

First way is actually even more useful than StyledComponents/EmotionJS. When instantiating, you can define a set of props (programmatically or manually) for all instances of the component. Then when rendering it, you can pass unique props to each instance. They can even be the same keys. The common props and unique instance props will be merged together intelligently.

The second way is simple and quick, when you're writing a lot of markup (for marketing) or if you prefer to use inline styles.

<br />
**Variants are like classNames but written in Typescript.**

- When this project gets a bit more finished, you'll be able to click any component in the menu and preview its variants and colors combinations.
- Each variant/color combination will be mocked with various content, unit-tested, and visual-regression-tested before every Git push.
