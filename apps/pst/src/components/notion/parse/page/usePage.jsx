import React from 'react';
// import Text from './Text';
import cconsole from 'colorful-console-logger';
import Block from './Block';

const usePage = ({ data }) => {
  let parsed = {};
  if (!data) {
    cconsole.error('usePage !data');
    return parsed;
  }
  parsed.title = data?.title;
  parsed.url = data?.url;
  parsed.children = [];

  // blocks
  if (data.blocks) {
    for (let block of data.blocks) {
      parsed.children.push(() => Block({ data: block }));
    }
  }

  // paragraph
  // if (data.paragraph?.paragraph) {
  //   parsed.children.push(() => Text({ data: data.paragraph.paragraph }));
  // }

  return parsed;
};

export default usePage;
