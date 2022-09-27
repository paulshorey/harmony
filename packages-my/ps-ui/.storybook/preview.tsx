import { addons } from '@storybook/addons';
import React from 'react';
import GlobalStyles from '../styles';
import Gradient from '@ps/ui/components/layout/molecules/GradientBackground';
import { css } from '@emotion/react';
import theme from './theme';

const sortSidebarById = (a, b) => {
  // console.log('a', a, 'b', b);
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
      <Gradient
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
          // &:after {
          //   content: '';
          //   color: #ffd454;
          //   position: absolute;
          //   bottom: 0;
          //   right: 0;
          //   width: 3.5rem;
          //   height: 0.67rem;
          //   font-size: 10px;
          //   border-radius: 20px;
          //   box-shadow: 0 0 30px 20px rgba(255, 255, 255, 0.25);
          // }
        `}
        cssLg={`
      padding: 30px 30px 40px 30px;
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
