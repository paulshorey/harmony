import axios from 'axios';
import cconsole from '@ps/cconsole';
import TurndownService from 'turndown';

// Aggregate API responses
const CF_DATA = [];

// Convert HTML to Markdown
const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
});
// Convert HTML codeblocks to Markdown codeblocks.
turndownService.addRule('fencedCodeBlock', {
  filter(node, options) {
    return (
      options.codeBlockStyle === 'fenced' &&
      node.nodeName === 'PRE' &&
      node.firstChild &&
      node.firstChild.nodeName === 'CODE'
    );
  },
  replacement(content, node, options) {
    const className = node.firstChild.getAttribute('class') || '';
    const language = (className.match(/language-(\S+)/) || [null, ''])[1];

    return (
      '\n\n' +
      options.fence +
      language +
      '\n' +
      node.firstChild.textContent +
      '\n' +
      options.fence +
      '\n\n'
    );
  },
});
// Convert inline HTML images to inline markdown image format.
turndownService.addRule('replaceWordPressImages', {
  filter: ['img'],
  replacement(content, node, options) {
    const assetUrl = CF_DATA.assets.filter((asset) => {
      const assertFileName = asset.split('/').pop();
      const nodeFileName = node.getAttribute('src').split('/').pop();

      if (assertFileName === nodeFileName) {
        return asset;
      }
    })[0];

    return `![${node.getAttribute('alt')}](${assetUrl})`;
  },
});

/*
 * POST to Contentful
 */
export function cf_migrateWordpressImagesThenPosts(WP_DATA, CF_CONSTS, CF_ENV) {
  const assetPromises = [];

  // cconsole.info('Building Contentful Asset Objects');

  // For every image in every post, create a new asset.
  for (const blog of WP_DATA.posts) {
    const imagesToUpload = [blog.featuredImage, ...blog.contentImages];
    for (const image of imagesToUpload) {
      cconsole.warn('image to upload ' + image);

      if (!image || !image.url) {
        continue;
      }
      const filename = image.url.split('/').pop();
      const assetObj = {
        file: {
          'en-US': {
            contentType: 'image/' + image.format,
            fileName: filename,
            upload: encodeURI(image.url),
          },
        },
        title: {
          'en-US': filename,
        },
      };

      cconsole.success(
        'assetObj to upload ' + JSON.stringify(assetObj, null, 2)
      );
      assetPromises.push(assetObj);
    }
  }

  const assets = [];

  // UPLOAD IMAGES
  // cconsole.info(`Create and UPLOAD assets to Contentful...`);
  // cconsole.log('-----');

  Promise.all(
    assetPromises.map(
      (asset, index) =>
        new Promise(async (resolve) => {
          cconsole.log('createContentfulAssets promise asset', asset);
          let newAsset;
          setTimeout(() => {
            try {
              newAsset = CF_ENV.createAsset({
                fields: asset,
              })
                .then((asset) => asset.processForAllLocales())
                .then((asset) => asset.publish())
                .then((asset) => {
                  cconsole.success(`Published Asset`, asset);
                  assets.push({
                    assetId: asset.sys.id,
                    fileName: asset.fields.file['en-US'].fileName,
                  });
                });
            } catch (error) {
              throw Error(error);
            }
            resolve(newAsset);
          }, 1000 + 5000 * index);
        })
    )
  )
    .then((result) => {
      cconsole.log(`Done uploading /public/assets to Contentful...`);
    })
    .catch((error) => {
      cconsole.error(error);
    });

  axios
    .get(
      `https://api.contentful.com/spaces/${CF_CONSTS.spaceId}/environments/${CF_CONSTS.environment}/public/assets`,
      {
        headers: {
          Authorization: `Bearer ${CF_CONSTS.accessToken}`,
        },
      }
    )
    .then((result) => {
      cconsole.success(
        'getAndStoreAssets result.data?.items',
        result.data?.items
      );
      // // cconsole.log(result)
      CF_DATA.assets = [];
      for (const item of result.data.items) {
        CF_DATA.assets.push(item.fields.file['en-US'].url);
        // cconsole.log('CF_DATA.assets', CF_DATA.assets);
      }

      /*
       * AFTER ASSETS HAVE BEEN UPLOADED, now migrate the Blog Posts
       */
      cf_migrateWordpressBlogsToContentful(WP_DATA, CF_ENV, assets);
    })
    .catch((err) => {
      cconsole.error(err);
      return error;
    });
}

/*
 * POST to Contentful
 */
export function cf_migrateWordpressBlogsToContentful(WP_DATA, CF_ENV, assets) {
  // cconsole.log(`Creating Contentful Posts...`);
  // cconsole.log('-----');

  const blogPosts = [];
  for (const post of WP_DATA.posts) {
    const postFields = {};

    for (let [postKey, postValue] of Object.entries(post)) {
      if (postKey === 'content') {
        postValue = turndownService.turndown(postValue);
      }

      const keysToSkip = [
        'id',
        'type',
        'contentImages',
        'contentfulAssetImage',
      ];

      // STANDARD TEXT TYPE
      if (!keysToSkip.includes(postKey)) {
        postFields[postKey] = {
          'en-US': postValue,
        };
      }

      // NOT STANDARD TEXT
      if (postKey === 'contentfulAssetImage') {
        postFields[postKey] = {
          'en-US': {
            sys: {
              id: assets.filter((asset) => {
                const assertFileName = asset.fileName;
                const nodeFileName = postValue.split('/').pop();

                if (assertFileName === nodeFileName) {
                  return asset.assetId;
                }
              })[0],
              linkType: 'Asset',
              type: 'Link',
            },
          },
        };
      }
    }
    // cconsole.log('postFields', postFields);
    blogPosts.push(postFields);
  }

  // cconsole.info(`Post objects created, attempting to create entries...`);
  // cconsole.log('promises', blogPosts);
  Promise.all(
    blogPosts.map((post, index) => {
      // cconsole.log('blogPost post', post);
      if (!post.slug) {
        return;
      }
      return new Promise(async (resolve) => {
        let newPost;

        setTimeout(() => {
          try {
            CF_ENV.getEntries({
              'content_type': 'blogPost',
              'fields.slug': post.slug['en-US'],
              'include': 10,
              'limit': 1,
            })
              .then((entries) => {
                const entry = entries.items[0];
                /*
                 * EDIT EXISTING POST
                 */
                if (entry) {
                  cconsole.info(`Editing existing post `, post.slug['en-US']);
                  entry.fields.body = { 'en-US': post.body['en-US'] };
                  return entry.update();
                }
                /*
                 * ADD NEW POST
                 */
                cconsole.info(`Creating new post `, post.slug['en-US']);
                return CF_ENV.createEntry('blogPost', {
                  fields: post,
                });
              })
              .then((entry) => {
                entry.publish();
                cconsole.success(`Published`);
              })
              .catch(cconsole.error);
          } catch (error) {
            throw new Error(error);
          }

          resolve(newPost);
        }, 1000 + 5000 * index);
      });
    })
  ).then((result) => {
    cconsole.success(`\n\n\nThe migration has completed.\n\n\n`);
  });
}
