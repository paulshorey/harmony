Intelligently parses props and fills in missing props/attributes to ensure the rendered anchor tag is valid, uses correct \_target, has good accessibility, and uses the correct canonical domain/protocol.

This uses NextJS next/link component. This already renders an `<a>` anchor tag, so no need to wrap your code in anchor tags. No need to add passHref or any other props that can be easily figured out programmatically. This takes care of the busy work.

TODO: Separate this from NextJS. Maybe developer using this library could import their choice Router link in their app (from `next/link` or `react-router-dom` or anywhere), then pass it as a theme property. Then this library can use the router link from the theme, or render a plain `<a` anchor tag if none was provided.
