import cconsole from 'colorful-console-logger';
import contentful from 'contentful-management';

import { cf_migrateWordpressImagesThenPosts } from './lib/cf.js';
import { fetchData } from './lib/lib.js';
import { wp_categoryNames, wp_getApiDataType } from './lib/wp.js';
import {
  wp_bodyImagesToCloudinaryFormat,
  wp_featuredImageToCloudinaryFormat,
} from './lib/wpImages.js';

cconsole.updateOptions({ useTrace: true });
try {
  /**
   * All the datas
   * (e.g. /wp-json/wp/v2/${key})
   */
  const WP_ENDPOINT = `https://blogspiralus.wpcomstaging.com/wp-json/wp/v2/`;
  const WP_DATA = {
    categories: [],
    media: [],
    posts: [],
    tags: [],
  };
  let API_DATA = {};

  /**
   * Contentful API
   */
  const CF_CONSTS = {
    accessToken: '', //'CFPAT--Xx9N0o6pLLA0jFvNKtWY_U09GYqCF55IZzXergVKmc',
    environment: 'master',
    spaceId: '', //'e0h8mfd7o8nq',
  };
  const CF_CLIENT = contentful.createClient({
    accessToken: CF_CONSTS.accessToken,
  });

  /** ***************************************************************************************************
   * START
   */
  {
    const promises = [];

    // cconsole.log('-----');
    // cconsole.log(`Getting WordPress API data`);
    // cconsole.log('-----');

    // get all content from wordpress
    for (const [key, value] of Object.entries(WP_DATA)) {
      const wpUrl = `${WP_ENDPOINT}${key}?per_page=99`;
      promises.push(wpUrl);
    }
    Promise.all(promises.map(fetchData))
      .then((response) => {
        API_DATA = response;
        // Loop over our conjoined data structure and append data types to each child.
        for (const [index, [key, value]] of Object.entries(
          Object.entries(WP_DATA)
        )) {
          API_DATA[index].endpoint = key;
        }

        // Loop over ONLY the blog posts - migrate to Contentful
        const apiPosts = wp_getApiDataType(API_DATA, 'posts')[0];
        // Loop over posts - note: we probably /should/ be using .map() here.
        for (const [key, postData] of Object.entries(apiPosts.data)) {
          // cconsole.warn(`Parsing ${postData.slug}`);
          if (
            postData.slug === ''
            // postData.slug !== 'when-could-women-have-a-bank-account-a-short-history-of-financial-gender-equality-and-the-financial-road-ahead'
          ) {
            continue;
          }
          // Push to WP_DATA.posts
          const fieldData = {
            body: postData.content.rendered,
            categoriesText: wp_categoryNames(
              API_DATA,
              postData.categories,
              'categories'
            ).toString(),
            contentImages: wp_bodyImagesToCloudinaryFormat(postData),
            featuredImage: wp_featuredImageToCloudinaryFormat(
              API_DATA,
              postData
            ),
            id: postData.id,
            publishDate: postData.date_gmt + '+00:00',
            slug: postData.slug,
            summary: postData.excerpt.rendered,
            title: postData.title.rendered,
          };
          WP_DATA.posts.push(fieldData);
        }

        // cconsole.log(`...Done!`);
        // cconsole.log('-----');

        CF_CLIENT.getSpace(CF_CONSTS.spaceId)
          .then((space) => space.getEnvironment(CF_CONSTS.environment))
          .then((CF_ENV) => {
            cf_migrateWordpressImagesThenPosts(WP_DATA, CF_CONSTS, CF_ENV);
          })
          .catch((error) => {
            cconsole.log(error);
            return error;
          });
      })
      .catch((error) => {
        cconsole.log(error);
      });
  }
} catch (error) {
  cconsole.error(error);
}
