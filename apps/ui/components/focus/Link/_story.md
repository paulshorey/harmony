Intelligently parses props and fills in missing props/attributes to ensure the rendered anchor tag is valid, uses correct \_target, has good accessibility, and uses the correct canonical domain/protocol.

This uses NextJS next/link component. This already renders an `<a>` anchor tag, so no need to wrap your code in anchor tags. No need to add passHref or any other props that can be easily figured out programmatically. This takes care of the busy work.

TODO: Separate this from NextJS. Developer using this library could import their choice Router link in their app (from `next/link` or `react-router-dom` or anywhere), then pass it as a theme property. Then this library can use the router link from the theme, or render a plain `<a` anchor tag if none provided.

THIS DOES NOT ADD ANY STYLE, only functionality, but it does accept the ss props like all other components. There's also the standard style prop. But the best way to make a uniquely styled button or link is with a separate component. Pass anything to this as `props.children` to make it into a link.
