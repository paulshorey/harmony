`import Div from 'components/content/atoms/Div';` then render as any HTML element:
`<Div as="h2" ssTablet="padding:1rem;" ssPhone="font-size:1.25rem;" variant="highlighted" />`

By default this renders a `<div>`. Pass `props.as` to change the rendered HTML element tag name.
No styles are applied to this by default. So if you change to `props.as="span"` then it will **become an inline element instead of block.**

Accepts all props for `HTMLAttributes<HTMLDivElement>`. Plus custom props.
