import { getOS } from 'src/functions/window';

/**
 * Fix for anchor tag href attribute, if it comes from Wordpress or some other content editor
 * @param {string} href
 * @returns {string} - modified href
 */
export const href_canonical = function href_canonical(href) {
  if (typeof window === 'undefined') return href;
  return href
    .replace('www.spiral.us', 'spiral.us') // ensure consistency, strip then add back in
    .replace(/^spiral.us/, 'https://spiral.us')
    .replace(`http//localhost:3000${window.location.pathname}`, '')
    .replace(`http//localhost:3000`, '')
    .replace(`${window.location.protocol}//${window.location.host}${window.location.pathname}`, '')
    .replace(`${window.location.protocol}//${window.location.host}`, '')
    .replace('//spiral.us', '//www.spiral.us')
    .replace('http://app.spiral.us', 'https://app.spiral.us')
    .replace('http://www.spiral.us', 'https://www.spiral.us'); // for consistency, always use canonical URL
};

/**
 * Gets value for ?utm_source= query param, from referer if possible, or make one up from referer domain.
 * @returns {string} - utm_source value
 */
export const getUTMSource = function getUTMSource() {
  let out = 'direct';
  let referer = decodeURIComponent(window.document.referrer);
  if (referer) {
    if (referer.includes('utm_source=')) {
      /* 
      If referer already contains a utm_source, like this facebook ad, then just use that.
      https://l.facebook.com/l.php?u=https://www.plaidsettlement.com/?utm_source=facebook&utm_medium=cpm&utm_campaign=plaid&utm_term=traffic&utm_content=ad_new1&fbclid=IwAR2R_FIM_IPWkNVMRLVv67Hv0Owh4VQ1mKhnw3KGrMS_DvJApFW_0Vbvt50
       */
      out = referer.split('utm_source=')?.[1]?.split(/[^\w]+/)?.[0] || ''; // get just the "facebook" part from ...?utm_source=facebook&...
    }
    if (out === 'direct') {
      /*
      Guess source from referer domain name
       */
      let host = referer?.split('/')?.[2] || '';
      if (host) {
        if (host.substring(0, 9) === 'localhost' || host.substr(-9) === 'spiral.us') {
          out = 'direct';
        } else {
          out = host;
        }
        if (
          host === 't.co' ||
          host.substring(0, 5) === '.t.co' ||
          host.substr(-11) === 'twitter.com'
        ) {
          out = 'twitter';
        }
        if (
          host === 'f.co' ||
          host.substring(0, 5) === '.f.co' ||
          host.substr(-12) === 'facebook.com'
        ) {
          out = 'facebook';
        }
        if (host.substr(-10) === 'tiktok.com') {
          out = 'tiktok';
        }
        if (host.substr(-12) === 'linkedin.com') {
          out = 'linkedin';
        }
        if (host.substr(-13) === 'instagram.com') {
          out = 'instagram';
        }
        if (host.substr(-10) === 'google.com') {
          out = 'google';
        }
        if (host.substr(-11) === 'youtube.com') {
          out = 'youtube';
        }
      }
    }
  }
  return out;
};

/**
 * Get the current marketing attribution variables like pid, c, referralCode, etc.
 * @param {object} queryParamsFromCode - set URL/localStorage query params to these keys/values
 *    instead of using new ones from URL/localStorage, use these params from NextJS /page data
 * @returns {object} - { pid, c, referralCode, ein, source } - marketing attribution variables
 */
export const getAttributionParams = function getAttributionParams(queryParamsFromCode = {}) {
  if (typeof window === 'undefined') return {};
  let out = {};

  // INPUT
  // from page
  let qs = { ...queryParamsFromCode };
  // from url
  if (typeof URLSearchParams !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    if (!qs.referralCode) qs.referralCode = urlParams.get('referralCode') || '';
    if (!qs.pid) qs.pid = (urlParams.get('pid') || '')?.toLowerCase();
    if (!qs.c) qs.c = (urlParams.get('c') || '')?.toLowerCase();
  }
  // from localstorage
  if (!qs.pid && !qs.ein && !qs.referralCode) {
    let cached = JSON.parse(window.localStorage.getItem('attributionParams') || '{}');
    // attribution params are cached for 24 hours. If expired, simply ignore the cache (localStorage).
    if (cached.expires && new Date().getTime() < cached.expires) {
      delete cached.expires;
      for (let key in cached) {
        if (!qs[key]) qs[key] = cached[key];
      }
    }
  }

  // OUTPUT - MUTUALLY EXCLUSIVE GROUPS OF PARAMETERS
  // partner
  if (qs.ein) {
    out = {
      source: 'partner',
      ein: qs.ein,
    };
  }
  // referral
  else if (qs.referralCode) {
    out = {
      pid: 'referral',
      referralCode: qs.referralCode,
      c: `${getUTMSource().toLowerCase()}_${getOS().toLowerCase()}`,
    };
  }
  // advertisement
  else if (qs.pid) {
    out = {
      pid: qs.pid,
      c: qs.c,
    };
  }
  // organic
  else {
    out = {
      pid: 'web_organic',
    };
  }
  // remember previous attribution params in localStorage
  let cache = {...out};
  cache.expires = new Date().getTime() + 1000 * 60 * 60 * 24; // 24 hours
  window.localStorage.setItem('attributionParams', JSON.stringify(cache));
  // return
  return out;
};

/**
 * Parse window.location URL parameters, get back value of a key
 * @param {string} key - key to get value of
 * @returns {string} value of the key
 */
export const getQueryParam = function getQueryParam(key) {
  if (typeof window === 'undefined') return undefined;
  if (typeof URLSearchParams === 'undefined') return undefined;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

/**
 * Data structure helper. Has nothing to do with window. For building URLs.
 * @param {object} obj - query string as an object
 * @returns {string} query string WITH A LEADING "&" INSTEAD OF "?"
 */
export const queryStringFromObject = function queryStringFromObject(obj) {
  let str = '';
  for (let key in obj) {
    if (obj[key]) {
      str += `&${key}=${obj[key]}`;
    }
  }
  str = '?' + (str ? str.substr(1) : '');
  return str;
};
