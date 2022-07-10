/* eslint-disable no-console */
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const storybookUrl = 'http://localhost:6006';

const getMatchOptions = () => {
  return {
    failureThreshold: 0.08,
    failureThresholdType: 'percent',
  };
};

initStoryshots({
  framework: "react",
  suite: "Imageshots",
  test: imageSnapshot({
    storybookUrl,
    getMatchOptions
  }),
});

