## A system for organizing utility functions

> If something is missing, just add it here instead of to your app. Then use it in any app in the future.

## Folder structure

**Categories:**

- `/io` - **universal** pure functions, no side effects, no dependencies, immutable
- `/browser` - relies on the window, location, user agent, OS, screen size, etc.
- `/requests` - external HTTP calls rely on installed NPM dependencies such as `axios`
- `/server` - relies on server-side dependencies and variables like `process`, `env`, `fs`

> This is currently a work in progress. May have bugs and edge cases.  
> Only `/io` is universal and has tests. Others rely on the platform or have side effects.

## How to use

Everything is tree-shakeable. Import only the function you need, not the entire collection.

```js
import is_ios from "@ps/fn/browser/device/is_ios";

is_ios(); // true if you're using iPhone, iPod, iPad, or emulator
```

## Notes

This is meant to be used in a monorepo by any JavaScript framework that supports ES Modules and ES2015+ (NodeJS on the server or Webpack/Babel/NextJS compiler on the client). Although, it's easy enough to publish to NPM as a standalone package. However, the goal of this project is not to make a finished product, but to create a system to manage utility functions for multiple apps.

The goal of this is to keep a central repository of all the functions any website or application could ever need, but to import only piece by piece, to keep the bundle size small.

This could be useful to publish to NPM for anyone anywhere to import to their own app. However, everyone's codebase has different needs and preferences. It's easy enough to find a good algorithm or script online. This is meant to be a system of organizing and testing code snippets copied from the internet, extracted from popular libraries like Underscore, or developed in house.
