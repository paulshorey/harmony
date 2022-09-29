import { addons } from '@storybook/addons';
import React from 'react';
import GlobalStyles from '../styles/global';
import Gradient from '../components/media/GradientBackground';
import { css } from '@emotion/react';
import theme from './storybook-theme';
import Block from '../components/content/atoms/Block';

const sortSidebarById = (a, b) => {
  // console.log('a', a, 'b', b);
  if (a && a[1]?.componentId.substring(0, 5) === 'intro') {
    return -2;
  }
  if (a && a[1]?.componentId.substring(0, 5) === 'about') {
    return -1;
  }
  return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
};

export const parameters = {
  layout: 'fullscreen', // to remove padding in canvas
  viewMode: 'docs',
  controls: {
    expanded: true,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : sortSidebarById(a, b)),
    // storySort: {
    //   order: ['aboutlibrary', 'aboutcssprops'],
    // },
  },
  docs: {
    theme,
  },
};

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
      <div
        css={css`
          background: white;
        `}
      >
        <GlobalStyles />
        {/* <Block
          ssLg={`
      padding: 30px 30px 40px 30px;
    `}
          ssSm={`
      padding: 20px 20px 30px 20px;
    `}
        >
          <Story {...context} />
        </Block> */}

        {/* <Block
          css={css`
            display: block;
            position: relative;
            color: black;
            font-size: 0.67rem;
            opacity: 0.67;
            font-weight: 600;
            background: white;
          `}
          ssLg={`
      padding: 0 30px 0 30px;
    `}
          ssSm={`
      padding: 0 20px 0 20px;;
    `}
        >
          Preview on dark background:
        </Block> */}

        <Gradient
          ssLg={`
      padding: 30px 30px 40px 30px;
    `}
          ssSm={`
      padding: 20px 20px 30px 20px;;
    `}
        >
          <Story {...context} />
        </Gradient>
      </div>
    );
  },
];
