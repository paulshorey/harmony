/* eslint-disable no-console */
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const storybookUrl = 'http://localhost:6007';

initStoryshots({
  framework: 'react',
  suite: 'Imageshots',
  test: imageSnapshot({
    storybookUrl,
  }),
});
