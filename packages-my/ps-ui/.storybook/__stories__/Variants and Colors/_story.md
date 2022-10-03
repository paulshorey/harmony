**Variants are like classNames but written in Typescript.**

- When this project gets a bit more finished, you'll be able to click any component in the menu and preview its variants and colors combinations.
- Each variant/color combination will be mocked with various content, unit-tested, and visual-regression-tested before every Git push.

**Pass props.variant or props.variants to use predefine styles. Pass props.color or onDark/onLight, and the styles use those variables**

In the code below, notice this subtle feature: `theme.instance`. For any component, in any ss prop, or in a theme variant, you can see all other variants/colors/schemes that were passed to the component. Just like with classNames, but without any namespace collisions! This is powerful!

```
ss: (theme) => `padding: 1.2rem 1rem 1.9rem; ${
  theme.instance.variants.gradient && `padding-top: 1.3rem;`}
}`
```
