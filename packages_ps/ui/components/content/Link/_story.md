Intelligently parses props and fills in missing props/attributes to ensure the rendered anchor tag is valid, uses correct \_target, has good accessibility, and uses the correct canonical domain/protocol.

This uses NextJS next/link component. This already renders an `<a>` anchor tag, so no need to wrap your code in anchor tags. No need to add passHref or any other props that can be easily figured out programmatically. This takes care of the busy work.
