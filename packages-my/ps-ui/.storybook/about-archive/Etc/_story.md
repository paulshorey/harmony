## This UI Library / Storybook testing app / Styling system ...

Should work just fine with Tailwind, Ant Design, Bootstrap, etc. whatever uses class names to apply styles.

### I just need to make sure that tree-shaking works in the library of choice, and this library itself too!

Then, the plan is to import components as needed from one or multiple libraries into this Storybook. Adjust styles. Allow them to be brandable. Document each in a Story. And of course set up testing for the new component (visual and functional).

### Here's a promising UI library

https://flowbite.com/docs/components/buttons/#gradient-outline

They use only global CSS/JavaScript though, not modular. So that's a commitment. I don't know if I like them that much to use all their components, and to have to import all their CSS/JavaScript on every page is my app only needs a few small components.

The title of this page is "Tailwind" but it really just means any class-name-based UI library. I have my doubts about the entire genre - because of the same reason - they all seem to require importing a large global stylesheet and JS file.

Ant design is very powerful and is in consideration. But it needs a lot of re-styling to make it brandable.
