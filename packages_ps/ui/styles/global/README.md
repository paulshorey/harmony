## CSS stylesheets vs. Styled Components ???

Both avoid the problem of clashing classNames. Both need some NPM packages installed and configured for Next/Storybook. But...

#

## SCSS module benefits

- can import the whole stylesheet as JS, and analyze its keys/values (useful when creating a styling hook)

### SCSS module problems

- DOES NOT WORK WORK IN STORYBOOK (maybe could, but difficult to set up)

#

## Styled JS benefits

- can use JS logic, interpret variables more intelligently

## Styled JS problems

- color syntax highlighting does not work. There's a plugin, but it only fixes it temporary after manually selecting file type
- prettier does not work

#

## Conclusion

I'd like to use SCSS modules because they offer better developer experience at the expense of using JS logic in the style block.
But it doesn't work in storybook. Styled Components is good enough.
