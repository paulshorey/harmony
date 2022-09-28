`import Block from '@ps/ui/components/content/atoms/Block';`
Then use `<Block as="p" />` to render a paragraph tag.

> This is defined using Typescript `HTMLAttributes<HTMLDivElement>` base type, plus custom props.  
> This renders a `<div>` element, with added `display:block;position:relative;` style.

**This library uses EmotionJS**. This component supports Emotion's css prop, but also adds custom props. Each mq prop injects styles into a predefined media query. Use Emotion's css\`\` type or a plain string. Each starts with "css" prefix. Use `react/jsx-sort-props` to sort your React props alphabetically, to keep all css props together. See also `as` and `variants` props. <a href="#anchor--content-atoms-block--block">Scroll down to read about mq props.</a>

**If you like inline styles**, you should definitely try this. **If not,** this library also includes some great tools for managing stylesheets, variables, and themes.
`<Block as="h2" css={defaultStyles} mqTablet="padding:1rem;" mqPhone="font-size:1.25rem;" variant="class1 class2 class3" />`

**See also [PaulShorey.com/blog/best-css-in-js-system](https://paulshorey.comm/blog/best-css-in-js-system) to read about hooks, variants, themes, and variables** which are difficult to show in Storybook.  
Basically, this library also provides functionality to recreate the benefits of **cascading stylesheets and classNames** but without any of the issues.

**Several css props are provided**, targeting different sizes. Some overlap. Start by simply choosing a pair: `mqLg`/`mqSm` for a 930px breakpoint, or `mqDesktop`/`mqMobile` for a 1024px breakpoint. To style only for tablet, use `mqTablet`. To style a large tablet, use `mqLargeTablet`.

Phone <= 499px. SmallPhone <= 399px. TinyPhone <= 359px. Tablet is 500-1024. LargeTablet is 931-1024. Scroll down for more sizes.

---

Just like with HTML tags, you can style this however you like. Display inline, flex, grid, etc. But consider using the provided atoms: Inline, Flex, Grid, Input, Select, Button, etc. They all have unique defaults and variants. Learn more in the <a href="/" style="color:orange;">variants and themes</a> page.
