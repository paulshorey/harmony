import React from 'react';
import Notion from 'src/components/templates/Notion';
import {
  getStaticPaths_fromNotionPages,
  getStaticProps_fromNotionPages,
} from 'src/functions/pagesRoutes';

/**
 * For each path, get data, pass to component as props:
 */
export async function getStaticProps() {
  await getStaticPaths_fromNotionPages({ pageId: '7893c77c97794abf82deb18b226b4122', depth: 0 });
  let context = {
    params: {
      page_path1: '',
    },
  };
  const obj = await getStaticProps_fromNotionPages(context);
  obj.props.page.url = '/blog';
  obj.props.page.title = 'Blog';
  return obj;
}

/*
 * Render page
 */
export default Notion;
