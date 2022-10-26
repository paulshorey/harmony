<h3 style="color:hsl(45deg 85% 65%)">🎭 &nbsp;Variants</h3>
Like classNames, but not only for styling. They are also used in the component code. They can change logic or layout. Each component directory has a `variants.ts` file in it. In this storybook stories, open any component, then scroll down and select a variant to see what each one does.

You can add/edit variants by setting `theme.variants[ComponentName][variantName]` when you set up your theme.

<h3 style="color:hsl(45deg 85% 65%)">💅 &nbsp;Variables</h3>

In your `ss`/`ssTablet`/`ssPhone` props, which define custom styles... Pass a function that takes theme as the first argument and returns a string.

In your style function, you can access your app's `theme` object. You can also read dynamic variables of the current component instance. Use `theme.instance.color` to see the color family (primary, secondary, accent, cta, etc.). Use `theme.instance.shade` to see if the current component is onLight or onDark background. There's also `theme.instance.size` and more coming soon. These can help you write smarter/richer style rules.

Another helpful utility accessible in your style function is `theme.getColor`. Pass the color key as the first argument. It will automatically read the color group and shade of your current component instance, and return the value from the correct `theme.colors` object.

<h3 style="color:hsl(45deg 85% 65%)">😈 Subtle details</h3>

Notice `theme.instance.variants` in the example below. In any component style function, or a custom variant style, you can see all current variants used by the current component. Like with CSS classNames `&.math.physics`, but without any namespace collisions! This is powerful!

```
ss: (theme) => `padding: 1.2rem 1rem 1.9rem; ${
  theme.instance.variants['bggradient'] && `padding-top: 1.4rem;`}
}`
```
