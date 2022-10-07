`import Inline from 'components/content/atoms/Inline';`
Then use `<Inline as="code" />` to render a \<code\> tag.

> **It accepts all the same props as [Block](./?path=/docs/content-atoms-block--block).** But it renders a \<span\> by default and adds `display:inline-block` style.

<!-- It may seem like this is not useful. But this component comes with some helpful variants, all of which you can extend in your app's theme. Do `<Inline variant="code">{some:'code'}</Inline>` to render an inline code component like you would with a single backtick when using markdown. Or `<Inline variant="badge success">no errors</Inline>` or `<Inline variant="tag">saved</Inline>`. -->

<!-- Also it encourages you to style by explicitly passing a variable instead of referencing a tag name in a stylesheet (if you're into that sort of thing). -->

These UI components all have default styles that you can use. Just pass one or multliple variants. You can override these variants in your app theme.
