import React from 'react';
import Block from 'components/content/atoms/Block';
import { useEffect } from 'react';
// import useShowStorybookCode from 'hooks/useShowStorybookCode';

const styles = {
  wrapper: (theme: theme) => `
    padding: 50px 5vw 100px;
    h3 {
      font-size: inherit;
      margin: 1.5rem 0 1.5rem 0;
    }
    h4 {
      font-size: inherit;
      margin: 1rem 0 1rem 0;
    }
    hr {
      margin: 1.67rem 0;
    }
    b {
      font-weight: 700;
    }
    a {
      color: ${theme.getColor('accent', 'onDark')};
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
    ol {
      margin: 0;
    }
  `,
  colorGold: (theme: theme) => `
    color: #fedb00;
    * {
      color: #fedb00;
    }
  `,
  codeResults: (theme: theme) => `
    display: none;
    font-size: 22px;
  `,
};

export default (args: any) => {
  /*
   * Force this story to be full screen canvas, not just docs in the little iframe
   */
  useEffect(() => {
    let loc: any = window.top?.location || {};
    if (loc.search?.includes('/docs/')) {
      const goto = loc.pathname + loc.search.replace('/docs/', '/canvas/');
      console.log(
        '😆😭😋⏳⏳⏳🕺😎🚀 Refreshing the screen to force Storybook to show full-screen Canvas tab, instead of the Docs tab.'
      );
      if (window.top) {
        window.top.location.href = goto;
      }
    }
  }, []);

  /**
   * Inject a CSS string as a <style> tag into the DOM of the window.top frame
   */
  const injectCSS = `
.search-field { 
  top: -1px;
  left: -2px;
}
.sidebar-header * {
  display:none !important;
}
.sidebar-header:before {
  content: 'Styling Systems';
  color: white;
  font-size: 1.01rem;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0.5;
}
`;
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = injectCSS;
    window.top?.document.body.appendChild(style);
  }, []);

  /*
   * Render the story
   */
  return (
    <Block
      ss={styles.wrapper}
      variant="bg-gradient text-color"
      color="cta1"
      {...args}
    >
      <h2>This is not a UI Component Library...</h2>
      <hr />
      <h3>
        <b>
          It's a starter kit for easily making your own custom branded UI
          library.
        </b>
      </h3>
      <p>
        It's a styling-system, with some complementary JavaScript functionality.
        For any React app.
      </p>
      <p>
        Great for a mono-repo. This library can be imported by multiple apps.
        Each app can extend the base theme and functionality.
        {/* You can extend the theme to adjust subtle things like breakpoints, spacing, or
        colors to match the unique needs of each application - all while
        developing and designing just one central library of components for all
        your future features. It's easy to customize all instances of a
        component or just one individual instance. */}
      </p>
      <p>
        This is a work in progress, but already useful.{' '}
        <span className="nowrap">Read more:</span>
      </p>
      <ul>
        <li>
          <a href="/">media queries</a> - easily style breakpoints (with JSX
          props, JS variables, or Styled Components HOC)
        </li>
        <li>
          <a href="/">variants and themes</a> - use/extend multiple predefined
          variants (like classNames but with Typescript)
        </li>
      </ul>

      {/* <p>Here's an example app and monorepo that uses this:{' '}
      <a
        href="https://github.com/paulshorey/fe/apps/starter-site"
        target="_blank"
      >
        https://github.com/paulshorey/fe/apps/starter-site
      </a>
    </p> */}
      <hr />
      <h3>Funny thing...</h3>
      <p>
        The "C" in "CSS" stands for "Cascading" - each more specific set of
        rules inherits from / extends the previous. But, so-called CSS-in-JS
        solutions actually don't support the "C" part. They're usually just
        S-in-JS. But that's not as catchy. 😆{' '}
      </p>
      <p>
        This library attempts to bring back the Cascading functionality. It's
        not finished, but there's already some inheritance of variants. Variants
        are like classNames. Variant styles can see what other
        variants/colors/sizes/etc are used in the component just like classNames
        were able to refer to sibling or child classNames.
      </p>
      <hr />
      <h3>This project is made to replace the following patterns:</h3>
      <ol>
        <li>Install a 3rd-party open-source UI component library</li>
        <li>
          Find a compatible styling solution to customize that component
          library. You'll need to make a new component for each 3rd-party
          component to override its styles, essentially building your own custom
          component library. Or, if the component library uses class names, then
          you'll have to manage a long complex stylesheet of overrides.
        </li>
      </ol>
      <Block as="h4" ss="margin-top:0;">
        or
      </Block>
      <ol>
        <li>Build your own custom component library from scratch.</li>
        <li>Set up your own styling system, variables, and media queries.</li>
        <li>
          Manage functions/hooks/helpers to handle user interactions and device
          specific edge cases.
        </li>
      </ol>
      <h4>Instead, you can</h4>
      <ol>
        <li>
          Use this starter component library, or copy the entire mono-repo.
        </li>
        <li>
          As you build out your product/app/website, add a new component as
          needed with a good base functionality and styles to suit any of your
          apps. Add more properties to the theme, hooks, helpers, whatever you
          need.
        </li>
        <li>
          In each app, extend this library's theme to match the app's specific
          requirements.
        </li>
      </ol>
      <hr />
      <h3>This is powered by EmotionJS</h3>
      <p>
        You can pass an EmotionJS object or function to any of the `ss` props -
        without having to set up the `` prop in your own app. Just use `ss`
        instead. To style in a media query, pass `ssLg`/`ssSm`,
        `ssDesktop`/`ssMobile`, `ssPhone`, `ssSmallPhone`, etc. All ss props
        also accept string type. They will be inserted into an EmotionJS
        function after being wrapped in the appropriate media query.
      </p>
      <hr />
      <h3>Typescript and testing</h3>
      <p>
        Theme, colors, variants, css variables, hooks, functions, and everything
        else here is written in Typescript. But css properties themselves are
        old fashioned strings. That's actually ok. With current tooling, it's
        actually not even possible to effectively type check CSS properties.
        Consider padding "1em 2em calc(1em+5px)" (forgot spaces around the plus)
        or "1ems" (typo s character). Type is correct, but it's not valid css.
        There are many edge cases with styling that Typescript will not catch
        even if the variable type is correct. It's not worth the effort to do
        CSS-in-JS objects, because "visual regression testing" is much more
        effective at preventing styling regressions.
        {/* Set up
        visual regression tests to run during a pull request (for a deployed
        site) or before git push (for a library such as this). And rest assured
        that your production app or site looks as it should. */}
      </p>
      <p>
        Unit tests are important and coming soon to this library. But, this
        library is not yet stable. Unit tests are great for ensuring specific
        in/out functionality does not change. But right now functionality is
        still changing. The function library @ps/fn that's a sibling to this
        package does already have unit tests in place. Open that and run `yarn
        dev`. The goal is to have the same with this library.
      </p>
      <p>
        Since this library is mostly visual however, the more immediate plan is
        to put in visual regression tests that run before Git can push changes.
        Coming son.
      </p>
    </Block>
  );
};
