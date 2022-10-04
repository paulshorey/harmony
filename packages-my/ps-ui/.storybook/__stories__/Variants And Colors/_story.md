**Variants are like classNames but written in Typescript.** So naturally, they have even more powerful than standard css classNames.

- When this project gets a bit more finished, you'll be able to click any component in the menu and preview its variants and colors combinations.
- Each variant/color combination will be mocked with various content, unit-tested, and visual-regression-tested before every Git push.

<br />

### In your css styles,

use both **theme variables** and **current component props**.

In the code below, notice this subtle feature: `theme.instance`. For any component, in any ss prop, or in a theme variant, you can see all other variants/colors/schemes that were passed to the component. Just like with classNames, but without any namespace collisions! This is powerful!

```
ss: (theme) => `padding: 1.2rem 1rem 1.9rem; ${
  theme.instance.variants.bg-gradient && `padding-top: 1.3rem;`}
}`
```

Pass `props.variants` to use predefine styles. Pass `props.ss` for general styles or `props.ssTablet`/`props.phone`/etc. for media queries.
In any case, you can define styles a function. The function returns a string or EmotionJS type. The first argument of the function is `theme`, which is just your normal predefined theme. However, for each component, a property `theme.instance` is updated in the theme.

- `theme.instance.variants` contains `Record<string, true>` all variants that were passed to the component
- `theme.instance.hue` contains the key of which color family will be used (`cta`, `accent`, `neutral`)
- `theme.instance.shade` contains the key of which color scheme will be used (`onDark`, `onLight`, you can define others in your app)
