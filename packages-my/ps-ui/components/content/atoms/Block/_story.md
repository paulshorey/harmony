`import Block from '@ps/ui/components/content/atoms/Block';` then render:
`<Block as="h2" ssTablet="padding:1rem;" ssPhone="font-size:1.25rem;" variant="highlighted" />`

This accepts all props for `HTMLAttributes<HTMLDivElement>` plus custom props explained below.  
All components in this library also accept the custom style props explained here.

<!-- **This library uses EmotionJS**. This component supports Emotion's css prop, but also adds custom props. Each mq prop injects styles into a predefined media query. Use Emotion's css\`\` type or a plain string. Each starts with "css" prefix. Use `react/jsx-sort-props` to sort your React props alphabetically, to keep all css props together. See also `as` and `variants` props. <a href="#anchor--content-atoms-block--block">Scroll down to read about mq props.</a> -->

<!-- **If you like inline styles**, you should definitely try this. **If not,** this library also includes some great tools for managing stylesheets, variables, and themes. -->

<!-- **See also [PaulShorey.com/blog/best-css-in-js-system](https://paulshorey.comm/blog/best-css-in-js-system) to read about hooks, variants, themes, and variables** which are difficult to show in Storybook.
Basically, this library also provides functionality to recreate the benefits of **cascading stylesheets and classNames** but without any of the issues. -->

**The ss (style-strings) props are provided** to target different sizes. `ssPhone` <= 499px. `ssSmallPhone` <= 399px. `ssTinyPhone` <= 359px. `ssTablet` is 500-1024. `ssLargeTablet` is 931-1024. Start by choosing a pair: `ssLg / ssSm` for a 930px breakpoint, or `ssDesktop / ssMobile` for a 1024px breakpoint. Then, add media queries for edge cases like tablets. Scroll down for all sizes.

---

This renders a `<div>` element, with default `display:block;position:relative;` style. But you can restyle this however you like. There are also Inline, Flex, Grid, Input, Select, Button, etc. with other default styles. All components (molecules/organisms) in this library use one of these building blocks.
