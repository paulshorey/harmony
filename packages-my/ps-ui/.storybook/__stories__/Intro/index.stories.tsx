import { css } from '@emotion/react';
import React from 'react';
import Block, { Component } from '@ps/ui/components/content/atoms/Block';

export default {
  component: Component,
  id: '1',
  title: 'Intro',
  parameters: {
    docs: {
      source: {
        code: ``,
      },
      description: {
        component: `
        `,
      },
    },
  },
};

const styles = {
  wrapper: (theme) => css`
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
      color: ${theme.getColor('onDark').accent};
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
    ol {
      margin: 0;
    }
  `,
  colorGold: (theme: t) => css`
    color: #fedb00;
    * {
      color: #fedb00;
    }
  `,
  codeResults: (theme: t) => css`
    display: none;
    font-size: 22px;
  `,
};

const Template = (args) => (
  <Block ss={styles.wrapper} variant="onDark bgDarkg" {...args}>
    <h2>This is not a UI Component Library...</h2>
    <hr />
    <h3>
      <b>
        This is a starter kit for easily making your own custom branded UI
        library
      </b>
      .
    </h3>
    <p>For any React application or website.</p>
    <p>
      Great for a mono-repo. This library can be imported by multiple apps and
      sites, each having slightly varrying style or functionality. You can
      extend the theme to adjust subtle things like breakpoints, spacing, or
      colors to match the unique needs of each application - all while
      developing and designing just one central library of components for all
      your future features. It's easy to customize all instances of a component
      or just one individual instance.
    </p>
    <p>
      This is only a start. It includes some nifty solutions for managing style
      and functionality.
    </p>
    <ul>
      <li>
        <a href="/">media queries</a> - easily style breakpoints (with inline
        JSX props or CSS-in-JS variables)
      </li>
      <li>
        <a href="/">variants and themes</a> - choose from multiple predefined
        variants (like classNames but with Typescript) or add/edit your own
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
    <p>
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
    </p>
    <hr />
    <h3>This is powered by EmotionJS</h3>
    <p>
      Emotion is great! But the css prop is difficult sometimes. With this, you
      DO NOT have to configure the css prop in your app Babel/Webpack. You may
      not even use Babel/Webpack. It's ok. Just use the provided ss props.{' '}
    </p>
    <p>
      These custom ss props will work in any React environment. They accept
      plain css strings.
    </p>
    <hr />
    <h3>Typescript and testing</h3>
    <p>
      Theme, colors, variants, css variables, hooks, functions, and everything
      else here is written in Typescript. But css properties themselves are old
      fashioned strings. That's really ok. With current tooling, it's actually
      not even possible to effectively type check CSS properties. Consider
      padding "1em 2em calc(1em+5px)" (forgot spaces around the plus) or "1ems"
      (typo s character). Type is correct, but it's not valid css. There are
      many edge cases that Typescript will not catch even if the variable type
      is correct. It's not worth the effort to do CSS-in-JS objects, because
      "visual regression testing" is much more reliable at preventing visual
      regressions, and with less effort. Set up visual regression tests to run
      during a pull request (for a deployed site) or before git push (for a
      library such as this). And rest assured that your production app or site
      looks as it should.
    </p>
    <p>
      Unit tests are important and coming to this library very soon. However,
      this library functionality is not yet stable. Test-driven-development is
      great, especially for a UI library or API. But, this project is
      experimental. The main goal of this is to set up the best way to generally
      manage branding and functionality, not to make some specific
      functionality. Unit tests are great for ensuring specific in/out
      functionality does not change. But for now in this project, functionality
      is still changing. The function library @ps/fn that's a sibling to this
      package does already have complete unit test coverage.
    </p>
  </Block>
);
export const Intro = Template.bind({});
Intro.args = {};
