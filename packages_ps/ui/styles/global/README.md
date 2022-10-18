## CSS stylesheets vs. Styled Components ???

Both avoid the problem of clashing classNames. Both need some NPM packages installed and configured for Next/Storybook. But...

#

## Regular old global CSS classes

### Benefits:

- easy to implement, but still supports JS logic and variables if used in a styled-components or @emotion/react global function
- no extra dependencies - this is actually very good for a library so the app using it won't have to install too many peer dependencies
- smallest bundle size - no extra JS code to parse and execute - and unused classNames will not be bundled (app must use purgeCSS)

### Issues:

- can't import the classNames as an array/object in JS
- potential for names clashing with 3rd party libraries, so must add a unique prefix to each class name

#

## SCSS modules

### Benefits

- same benefits as CSS classNames, but able to import the whole stylesheet as JS, and analyze its keys/values (useful when creating a styling hook) - so best of both worlds!

### Issues

- DOES NOT WORK WORK IN STORYBOOK (maybe could figure it out, but it's difficult to set up)

#

## Styled Components

### Benefits

- can use JS logic, interpret variables more intelligently

### Issues

- color syntax highlighting does not work. There's a plugin, but it only fixes it temporary after manually selecting file type
- prettier does not work

#

## Conclusion

I'd like to use SCSS modules because they offer better developer experience at the expense of using JS logic in the style block.

But it doesn't work in storybook. Styled Components is good enough.
