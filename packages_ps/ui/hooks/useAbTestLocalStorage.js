/*
 * THESE ARE HELPERS FOR OUR CUSTOM AB TESTING FRAMEWORK
 * See /src/components/AbTest, usage in /pages
 * That framework is experimental!
 *
 * THIS NEEDS FURTHER DEVELOPMENT AND TESTING. NOT FINISHED.
 */

/**
 * Set which variant to render so next page load, the page will render the same content,
 *    even if the variant will be missing from the url.
 * @param {string} experimentKey - key
 * @param {string} experimentVariant - value
 */
export const setABVariant = function (experimentKey, experimentVariant) {
  if (typeof window === 'undefined') return;
  // always save to localStorage as type string
  experimentVariant = experimentVariant ? experimentVariant + '' : '';
  window.localStorage.setItem('qs_' + experimentKey, experimentVariant);
  // for debugging:
  window.abVariants = window.abVariants || {};
  window.abVariants[experimentKey] = experimentVariant;
};

/**
 * Calculate which variant to render
 * @param name {String}
 * @param variants {Array<string>} - list of variants, in same order as weights
 * @param weights {Array<number>} - (optional) list of percentages, in same order as variants
 * @returns {string|undefined|null}
 *    if this was attempted on server-side (not allowed) - will return undefined
 *    if this has been run previously on client-side - use same variant as last time
 *    if this is run for the first time on client-side - use random variant by weights
 */
export const getABVariant = function getABVariant({ name, variants, weights }) {
  if (!variants || !name) return null;
  if (typeof window === 'undefined') return;
  let abVariant;
  // 1. read from URL queryString
  if (!abVariant) {
    if (typeof URLSearchParams === 'undefined') return;
    const urlParams = new URLSearchParams(window.location.search);
    abVariant = urlParams.get(name);
    if (abVariant) {
      setABVariant(name, abVariant);
    }
  }
  // 2. try to get from localStorage
  if (!abVariant) {
    abVariant = window.localStorage.getItem('qs_' + name);
  }
  // 3. no variant specified? decide which one to show
  if_decide: if (!abVariant) {
    if (weights && weights.length === variants.length) {
      // custom weights provided
      let total = weights.reduce((acc, n) => acc + n, 0);
      if (total === 0) {
        return 'disabled';
      }
      // Don't need to go through all numbers again,
      // just until the first one greater than random 0-1 value.
      let acc = 0;
      let random = Math.random();
      for (let i in weights) {
        acc += weights[i];
        let fraction = acc / total;
        if (random < fraction) {
          abVariant = variants[i];
          break;
        }
      }
    } else {
      // default: equal weights
      let i = Math.floor(Math.random() * variants.length);
      abVariant = variants[i];
    }
    setABVariant(name, abVariant);
  }
  //
  return abVariant;
};
