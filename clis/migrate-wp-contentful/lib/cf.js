import axios from 'axios';
import TurndownService from 'turndown';
import cconsole from 'colorful-console-logger';

// Aggregate API responses
let CF_DATA = [];

// Convert HTML to Markdown
const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
});
// Convert HTML codeblocks to Markdown codeblocks.
turndownService.addRule('fencedCodeBlock', {
  filter: function (node, options) {
    return (
      options.codeBlockStyle === 'fenced' &&
      node.nodeName === 'PRE' &&
      node.firstChild &&
      node.firstChild.nodeName === 'CODE'
    );
  },
  replacement: function (content, node, options) {
    let className = node.firstChild.getAttribute('class') || '';
    let language = (className.match(/language-(\S+)/) || [null, ''])[1];

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
  replacement: function (content, node, options) {
    let assetUrl = CF_DATA.assets.filter((asset) => {
      let assertFileName = asset.split('/').pop();
      let nodeFileName = node.getAttribute('src').split('/').pop();

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
export function cf_migrateWordpressImagesThenPosts(
  WP_DATA,
  CF_CONSTS,
  CF_CLIENT
) {
  let assetPromises = [];

  // cconsole.info('Building Contentful Asset Objects');

  // For every image in every post, create a new asset.
  for (let blog of WP_DATA.posts) {
    let imagesToUpload = [blog.featuredImage, ...blog.contentImages];
    for (const image of imagesToUpload) {
      if (!image || !image.url) {
        continue;
      }
      let filename = image.url.split('/').pop();
      let assetObj = {
        title: {
          'en-US': filename,
        },
        file: {
          'en-US': {
            contentType: 'image/' + image.format,
            fileName: filename,
            upload: encodeURI(image.url),
          },
        },
      };

      assetPromises.push(assetObj);
    }
  }

  let assets = [];

  // UPLOAD IMAGES
  // cconsole.info(`Create and UPLOAD assets to Contentful...`);
 // cconsole.log('-----');

  // Promise.all(
  //   assetPromises.map(
  //     (asset, index) =>
  //       new Promise(async (resolve) => {
  //        // cconsole.log('createContentfulAssets promise asset', asset);
  //         let newAsset;
  //         //// cconsole.log(`Creating: ${post.slug['en-US']}`)
  //         setTimeout(() => {
  //           try {
  //             newAsset = CF_CLIENT.createAsset({
  //               fields: asset,
  //             })
  //               .then((asset) => asset.processForAllLocales())
  //               .then((asset) => asset.publish())
  //               .then((asset) => {
  //                // cconsole.log(
  //                   `Published Asset: ${asset.fields.file['en-US'].fileName}`
  //                 );
  //                 assets.push({
  //                   assetId: asset.sys.id,
  //                   fileName: asset.fields.file['en-US'].fileName,
  //                 });
  //               });
  //           } catch (error) {
  //             throw Error(error);
  //           }
  //           resolve(newAsset);
  //         }, 1000 + 5000 * index);
  //       })
  //   )
  // ).then((result) => {
 // cconsole.log(`...Done!`);
 // cconsole.log('-----');
  // cconsole.info(`Uploading /public/assets to Contentful...`);
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
      //// cconsole.log(result)
      CF_DATA.assets = [];
      for (const item of result.data.items) {
        CF_DATA.assets.push(item.fields.file['en-US'].url);
        // cconsole.log('CF_DATA.assets', CF_DATA.assets);
      }

      /*
       * AFTER ASSETS HAVE BEEN UPLOADED, now migrate the Blog Posts
       */
      cf_migrateWordpressBlogsToContentful(WP_DATA, CF_CLIENT, assets);
    })
    .catch((err) => {
      cconsole.error(err);
      return error;
    });
 // cconsole.log(`...Done!`);
 // cconsole.log('-----');
  // });
}

/*
 * POST to Contentful
 */
export function cf_migrateWordpressBlogsToContentful(
  WP_DATA,
  CF_CLIENT,
  assets
) {
 // cconsole.log(`Creating Contentful Posts...`);
 // cconsole.log('-----');

  let blogPosts = [];
  for (const post of WP_DATA.posts) {
    let postFields = {};

    for (let [postKey, postValue] of Object.entries(post)) {
      //// cconsole.log(`postKey: ${postValue}`)
      if (postKey === 'content') {
        postValue = turndownService.turndown(postValue);
      }

      let keysToSkip = ['id', 'type', 'contentImages', 'contentfulAssetImage'];

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
              type: 'Link',
              linkType: 'Asset',
              id: assets.filter((asset) => {
                let assertFileName = asset.fileName;
                let nodeFileName = postValue.split('/').pop();

                if (assertFileName === nodeFileName) {
                  return asset.assetId;
                }
              })[0],
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
      if (!post.slug) return;
      return new Promise(async (resolve) => {
        let newPost;

        setTimeout(() => {
          try {
            newPost = CF_CLIENT.createEntry('blogPost', {
              fields: post,
            })
              .then((entry) => {
               // cconsole.log(`Posted`, entry);
                entry.publish();
              })
              .then((entry) => {
               // cconsole.log(`Published`, entry);
              })
              .catch((error) => {
                cconsole.error(`Could not post`, error);
              });
          } catch (error) {
            throw new Error(error);
          }

          resolve(newPost);
        }, 1000 + 5000 * index);
      });
      // cconsole.warn('WTF?');
    })
  ).then((result) => {
   // cconsole.log('-----');
   // cconsole.log(`Done!`);
   // cconsole.log('-----');
   // cconsole.log(`The migration has completed.`);
   // cconsole.log('-----');
  });
}
