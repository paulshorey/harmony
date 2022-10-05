`import Box from 'components/content/atoms/Box';` then render:
`<Box as="h2" ssTablet="padding:1rem;" ssPhone="font-size:1.25rem;" variant="highlighted" />`

By default renders a `<div>`. Pass `props.as` to change the rendered HTML element tag name.

Accepts all props for `HTMLAttributes<HTMLDivElement>`. Plus custom props.

**The ss (style-strings) props are provided** to target different sizes. `ssPhone` <= 499px. `ssSmallPhone` <= 399px. `ssTinyPhone` <= 359px. `ssTablet` is 500-1024. `ssLargeTablet` is 931-1024. Start by choosing a pair: `ssLg / ssSm` for a 930px breakpoint, or `ssDesktop / ssMobile` for a 1024px breakpoint. Then, add media queries for edge cases like tablets. Scroll down for all sizes.
