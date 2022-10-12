import { get as fetcher_get } from "../fetcher";
import cconsole from "@ps/cconsole";

const CACHE_SECONDS = 360000;

export default async (site) => {
  let data = {};
  try {
    data = await fetcher_get(`https://api.microlink.io/?url=${site}`, {
      ttl: CACHE_SECONDS
    });
  } catch (e) {
    cconsole.error("Error getSitePreview()", e);
  }
  // siteName = siteName.replace('https://', '');
  // siteName = siteName.replace('http://', '');
  // siteName = siteName.replace('www.', '');
  return data || null;
};
