import React from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-cool-inview';
import { getQueryParam } from 'src/functions/url';
// check if variable is inside the bounds of minimum and maximum values
const isBetween = (value, min, max) => value && value >= min && value <= max;

/**
 * EXPERIMENTAL - CURRENTLY DOES NOT WORK - EXPORT IS DISABLED
 */
const useIsInView = function ({}) {
  let enterLeaveTimeout;
  const ref1 = React.createRef();
  const [disabled, set_disabled] = useState(false);
  // observe
  // BY DEFAULT, all are visible, to prevent any SEO issues with bots and for people with JavaScript disabled
  const [visible, set_visible] = useState(true);
  const { observe: ref2 } = useInView({
    onEnter: () => {
      if (disabled) return;
      clearTimeout(enterLeaveTimeout);
      enterLeaveTimeout = setTimeout(() => {
        set_visible(true);
      }, 50);
    },
    onLeave: () => {
      if (disabled) return;
      clearTimeout(enterLeaveTimeout);
      enterLeaveTimeout = setTimeout(() => {
        set_visible(false);
      }, 50);
    },
  });
  useEffect(() => {
    // disable for QA and Search Engines
    let qaStatic =
      getQueryParam('qaStatic') ||
      /bot|googlebot|crawler|spider|robot|crawling/i.test(window.navigator.userAgent);
    if (qaStatic && qaStatic !== null) {
      set_visible(true);
      set_disabled(true);
    } else {
      // if enabled, then
      // hide all elements that are not in view
      // must do this manually, because useInView only works reliably for onEnter/onLeave, not actually inView
      if (ref1?.current && ref1.current.getBoundingClientRect) {
        const rect = ref1.current.getBoundingClientRect();
        if (rect && rect.top && rect.left && rect.bottom && rect.right) {
          if (
            isBetween(rect.top, 0, window.innerHeight) &&
            isBetween(rect.bottom, 0, window.innerHeight) &&
            isBetween(rect.left, 0, window.innerWidth) &&
            isBetween(rect.right, 0, window.innerWidth)
          ) {
            set_visible(true);
          } else {
            set_visible(false);
          }
        }
      }
    }
  }, []);

  return {
    visible,
    ref1,
    ref2,
  };
};

/**
 * THIS COMPONENT IS NOT READY YET! IT IS A WORK IN PROGRESS
 */
// export default useIsInView;
