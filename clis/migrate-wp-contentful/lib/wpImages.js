import cconsole from 'colorful-console-logger';
import { wp_getApiDataType } from './wp.js';

export function wp_featuredImageToCloudinaryFormat(API_DATA, postData) {
  if (postData.featured_media > 0) {
    let mediaData = wp_getApiDataType(API_DATA, `media`)[0];

    let mediaObj = mediaData.data.filter((obj) => {
      if (obj.id === postData.featured_media) {
        return obj;
      }
    })[0];

    if (mediaObj) {
      return [cloudinaryObjectFromFilename(mediaObj.source_url)];
    }
  }
}

export function wp_bodyImagesToCloudinaryFormat(postData) {
  // remove new lines from content
  postData.content.rendered = postData.content.rendered.replace(/\n/g, '');
  // console.log(`- Getting content images`)
  let imageRegex = /<img\s[^>]*?src\s*=\s*['"]([^'"]*?)['"][^>]*?>/g;
  let bodyImages = [];
  let matchedImg;
  while ((matchedImg = imageRegex.exec(postData.content.rendered))) {
    let src = matchedImg[1];
    cconsole.info('img', matchedImg[0]);
    cconsole.info('src', src);
    // escape special characters that would break RegExp
    let srcRe = src.replace(/\?/g, '\\?');
    let re = `<img.*?src="${srcRe}".*?>`;
    postData.content.rendered = postData.content.rendered.replace(
      new RegExp(re),
      `<img class="wp-blog-body-image" src="${src}" width="750" height="600" />`
    );
    bodyImages.push(
      cloudinaryObjectFromFilename(src, {
        transformation: 'f_auto,q_auto,w_750,h_600',
      })
    );
  }
  postData.content.rendered = postData.content.rendered.replace(/&nbsp;/g, ` `);
  postData.content.rendered = postData.content.rendered.replace(/ ®/g, `®`);
  return bodyImages;
}

/*
 * PRIVATE LIB
 */

function cloudinaryObjectFromFilename(
  imageFile,
  { transformation = 'f_auto,q_auto' } = {}
) {
  let ext = imageFile.split('.').pop()?.split('?')[0];
  if (ext.length !== 3 && ext.length !== 4) {
    ext = 'jpg';
  }
  if (!imageFile.includes('res.cloudinary')) {
    cconsole.warn('\n\nNOT CLOUDINARY! imageFile', imageFile, '\n\n');
  } else {
    // replace extension of imageFile with ".webp"
    imageFile = imageFile.replace(/\.[^/.]+$/, '.webp');
    imageFile = imageFile.replace('w_750,h_600', 'w_750,h_600,c_scale');
    ext = 'webp';
  }
  return {
    url: imageFile,
    tags: [],
    type: 'upload',
    format: ext,
    duration: null,
    metadata: [],
    public_id: imageFile,
    created_at: new Date(),
    secure_url: imageFile,
    original_url: imageFile,
    resource_type: 'image',
    raw_transformation: transformation,
    original_secure_url: imageFile,
  };
}
