import './css/roboto.css';
import './css/main.css';
import ThemeContextProvider from './utils/theme-context-provider';
import { addons } from '@storybook/addons';
import React from 'react';
import GlobalStyles from '../styles';
import Gradient from '@ps/ui/components/layout/molecules/Gradient';
import { css } from '@emotion/react';
import theme from './theme';
// import { addDecorator } from '@storybook/react';
// import { withTaffy } from '@degjs/storybook-addon-taffy';

export const parameters = {
  layout: 'fullscreen', // to remove padding in canvas
  viewMode: 'docs',
  controls: {
    expanded: true,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    // storySort: (a, b) =>
    //   a[1].kind === b[1].kind
    //     ? 0
    //     : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    storySort: {
      // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
      order: [
        'UI Library',
        'CSS Props',
        'Scroll Slide In',
        'layout/molecules/Buttons',
        'layout/molecules/GradientBackground',
      ],
    },
  },
  docs: {
    theme,
  },
};

// export const decorators = [
//   (Story) => (
//     <Gradient
//       css={css`
//         position: relative;
//         width: 100%;
//         height: 100%;
//       `}
//       cssLg={`
//       padding: 50px 50px 60px 50px;
//     `}
//       cssSm={`
//       padding: 20px 20px 30px 20px;;
//     `}
//     >
//       <GlobalStyles />
//       <Story />
//     </Gradient>
//   ),
// ];

const handleThemeSelected = (...inputs) => {
  console.log('handleThemeSelected', ...inputs);
};
const handlePlatformSelected = (...inputs) => {
  console.log('handlePlatformSelected', ...inputs);
};
const handleColorSchemeSelected = (...inputs) => {
  console.log('handleColorSchemeSelected', ...inputs);
};

export const decorators = [
  (Story, context) => {
    // addDecorator(withTaffy);

    React.useEffect(() => {
      const channel = addons.getChannel();
      channel.on('theme-selected', handleThemeSelected);
      channel.on('platform-selected', handlePlatformSelected);
      channel.on('color-scheme-selected', handleColorSchemeSelected);
      channel.emit('story-mounted');

      return () => {
        channel.off('theme-selected', handleThemeSelected);
        channel.off('platform-selected', handlePlatformSelected);
        channel.off('color-scheme-selected', handleColorSchemeSelected);
      };
    }, []);
    return (
      <Gradient
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
        `}
        cssLg={`
      padding: 50px 50px 60px 50px;
    `}
        cssSm={`
      padding: 20px 20px 30px 20px;;
    `}
      >
        <GlobalStyles />
        <Story {...context} />
      </Gradient>
    );
  },
];

//<ThemeContextProvider theme={theme}>
