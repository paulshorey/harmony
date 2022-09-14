# Static website codebase 
> no login or anything

### To do:

https://www.reddit.com/r/reactjs/comments/mdgkes/how_to_actually_create_a_static_site_with_nextjs/ 

Export the app as a "real" static website, not just "next export" which pre-renders the pages, but still requires javascript to work.

### Why?

Because SEO. Even though Google/Bing will be able to read everything just fine in a "next export" site, the "time to interactive" and other statistics are pretty bad with all that JavaScript bundled into an otherwise regular website.

### But then why even use React / Next.js?

Because Webpack hot-module-reloading (and Emotion SCSS and other fancy stuff) makes development so much more pleasant! And React components if used simply and organized neatly, can actually be great building blocks for generating a HTML/CSS final product.

