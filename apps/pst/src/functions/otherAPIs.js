import { get as fetcher_get } from 'src/functions/fetcher';
import cconsole from 'colorful-console-logger';

const CACHE_SECONDS = 360000;

export const getSitePreview = async (site) => {
  let data = {};
  try {
    data = await fetcher_get(
      `https://api.linkpreview.net/?key=bbd06238f76c782e6e6d8743255351be&q=${site}`, {
        ttl: CACHE_SECONDS
      }
    );
  } catch (e) {
    cconsole.error('Error getSitePreview()',e);
  }
  // siteName = siteName.replace('https://', '');
  // siteName = siteName.replace('http://', '');
  // siteName = siteName.replace('www.', '');
  return data || null;
};
