# Spiral UI

This package includes globally shareable UI component to help make building consistent interfaces easy.

## How to use this package?

1. To include a package to your app, include it in your `package.json` dependencies like so:

```
"dependencies": {
    "@ps/ui": "*",
    ...
 }
```

2. Next, make sure you import `ThemeProvider` to your app's main AppProvider, `.storybook/preview.js`, and `test-utils` Jest setup file.

This will make sure all global theming option

```
import ThemeProvider from 'ThemeProvider'
...

const MyApp = () => {

  return <ThemeProvider> ... </ThemeProvider>
}
```

## Guidelines for contribution

- Components added should be shareable to all apps/packages in the repo. (No custom rules or modification to support different behavior in apps)
- Components should be fully tested and strictly typed.
- Components must include a Story that explains all behavior
- Components must not have dependencies on other Apps or manually imported files (Spiral packages/utils/configs are ok)
