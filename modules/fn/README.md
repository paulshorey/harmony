See the code: https://github.com/paulshorey/harmony/modules/fn. Clone the whole monorepo.

## A system for organizing utility functions - for use by multiple apps

> If something is missing, just add it to your mono-repo. Then use it in any app in the future.

## Categories

- `/io` - **universal** pure functions, no side effects, no dependencies, immutable
- `/browser` - relies on the window, location, user agent, OS, screen size, etc.
- `/requests` - external HTTP calls rely on installed NPM dependencies such as `axios`
- `/server` - relies on server-side dependencies and variables like `process`, `env`, `fs`

> This is currently a work in progress. May have bugs and edge cases.  
> `/io` is universal, most mature, has unit tests. `/browser` is stable, but not finished. `/requests` is experimental. `/server` only has one function, but more bash/shell utilities will be added soon.

## How to use

Everything is tree-shakeable. Import only the function you need, not the entire collection.

```js
import is_ios from "@ps/fn/browser/device/is_ios";

is_ios(); // true if client is iPhone, iPod, iPad, or emulator
```

## Notes

This is meant to be used in a monorepo by any JavaScript framework that supports ES Modules and ES2015+ (NodeJS on the server or Webpack/Babel/NextJS compiler on the client).

The goal of this is to keep a central repository of all the functions any website or application could ever need. Then each app can import only each little code snippet as needed - to keep the bundle size small.

In the future, when this is more mature, this module could be published as a standalone open-source NPM package for anyone anywhere to import to their own app. For now, just clone the entire mono-repo.

However, everyone's codebase has different needs and preferences. The challenge is to create a system that can be used by anyone, but also be customized to fit any project. So for now, I'm practicing organizing the code in my own repository, setting up standards and processes that in the future might meet the needs of a community of developers.

This has no affiliation with the <a href="https://harmonyjs.io/" target="_blank">HarmonyJS</a> framework. This will be called "Harmony UX", because it focuses on user experience and developer experience, rather than a specific programming technology.
