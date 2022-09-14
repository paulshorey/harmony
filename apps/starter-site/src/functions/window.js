/*
 * NOTE: All these functions are meant to be used on client-side only, in useEffect()
 * Ok to use on server-side but will return undefined.
 */

/**
 * Returns true if page loaded on iPhone or iPod or iPad, including Xcode simulation
 * @returns {boolean}
 */
export const is_ios = function () {
  if (typeof window !== 'object') return undefined;
  return (
    ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
      window.navigator?.userAgentData?.platform || window.navigator?.platform || ''
    ) ||
    // iPad on iOS 13 detection
    (window.navigator.userAgent.includes('Mac') && 'ontouchend' in window.document)
  );
};

/**
 * Returns true if page loaded on iPhone or iPod, including Xcode simulation
 * @returns {boolean}
 */
export const is_iphone = function () {
  if (typeof window !== 'object') return undefined;
  // detects only iPhone (phone) device, not just any iOS device.
  // includes iPod as well (close enough to iPhone) but not iPad (tablet, not phone!)
  return (
    ['iPhone Simulator', 'iPod Simulator', 'iPhone', 'iPod'].includes(
      window.navigator?.userAgentData?.platform || window.navigator?.platform || ''
    ) ||
    // iPad on iOS 13 detection
    (window.navigator.userAgent.includes('Mac') && 'ontouchend' in window.document)
  );
};

/**
 * Which OS the page is currently loaded on
 * @returns {string} - MacOS|iOS|Android|Windows|Linux| empty string if not detected
 */
export const getOS = function getOS() {
  if (typeof window !== 'object') return undefined;
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = '';
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'MacOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }
  return os;
};

/**
 * A webpage sometimes opens in Facebook or other app's built-in "webview" browser
 *     This function detects if the current page is being opened in a webview
 * @returns {boolean}
 */
export const checkIfWebView = function checkIfWebView() {
  if (typeof window !== 'object') return undefined;
  // if not server-side, check userAgent
  if (typeof window === 'object') {
    if (/iPhone|iPad|iPod/.test(window.navigator.userAgent)) {
      if (
        !/Version|Chrome|CriOS|OPT|Firefox|Fxi|Kiwi|Dolphin|Opera/.test(window.navigator.userAgent)
      ) {
        console.log('IS WEBVIEW');
        return true;
      }
    }
  }
  return false;
};

/**
 * Wait for window property to exist before running script
 *     Because useEffect(function(){}, [typeof window === 'object' && window.myVariable]) is not reliable
 *     Usage (simple):
 *       waitForGlobal("myVariable", function() {
 *         console.debug("myVariable is defined: ", window.myVariable);
 *       });
 *     If you only need to wait for window/DOM, then definitely just keep using useEffect()
 * @param {string} globalVariableName - window.yourVariable
 * @param {function} callback - function to run when window property is defined
 * @param {string} variableType - (optional) wait until window variable becomes this type
 *    Do not pass "undefined" because it starts out as undefined. Do "object" "string" etc.
 *    Does not differentiate between Object or Array, only checks for basic typeof.
 */
export const waitForGlobal = function (globalVariableName, callback, variableType) {
  /*
   * NOT FINISHED - This timeout function needs to be canceled when user navigates to a different route.
   */
  if (typeof window !== 'object') return undefined;
  if (
    typeof window === 'object' &&
    window[globalVariableName] !== undefined &&
    (!variableType || typeof window[globalVariableName] === variableType)
  ) {
    callback();
  } else {
    setTimeout(function () {
      waitForGlobal(globalVariableName, callback);
    }, 100);
  }
};
