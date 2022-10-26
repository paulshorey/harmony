import React, { useRef, useEffect, useState } from 'react';
import Slider from 'src/modules/infinite-react-carousel';
import { useSwipeable } from 'react-swipeable';
import { useInView } from 'react-cool-inview';
import styles from './styles';
import { css, useTheme } from '@emotion/react';
import { is_ios } from 'src/functions/window';
import { getQueryParam } from 'src/functions/url';

/**
 * Infinite Carousel slider (click previous/next to advance left/right, click the dots for a specific slide)
 * @param children {array} - pass only an ARRAY of JSX elements, NOT one wrapper element with its own children
 * @param variant {string} - empty by default. Pass "default" or "" to make it normal. Pass "white" to make the dots white.
 * @param customOptions {object} - see documentation for NPM package infinite-react-carousel. Pass whatever it accepts.
 * @param controls {object} - pass an empty but named object. It will get populated with functions obj.back and obj.next
 *    Call these functions from the parent component, to control the slideshow.
 * @param smallerDots {boolean} - false by default - make the dots a bit smaller
 * @param showArrows {boolean} - true by default - show left/right arrows
 * @param useSwipeOverlay {boolean} - true by default - renders a div with className="useSwipeOverlay" over the slideshow
 *    IMPORTANT: This blocks all user interaction! So, you may want to style it in CSS by using its className. Or disable.
 */
// DEBUG mobile Safari scroll interaction when InfiniteCarousel swiped:
// function throttle(callback, limit) {
//   var waiting = false; // Initially, we're not waiting
//   return function () {
//     // We return a throttled function
//     if (!waiting) {
//       // If we're not waiting
//       callback.apply(this, arguments); // Execute users function
//       waiting = true; // Prevent future invocations
//       setTimeout(function () {
//         // After a period of time
//         waiting = false; // And allow future invocations
//       }, limit);
//     }
//   };
// }
// function windowScrollDisableThrottled(disable) {
//   throttle(function () {
//     windowScrollDisable(disable);
//   }, 100);
// }

// Attempt to fix mobile Safari scroll interaction when InfiniteCarousel swiped
let windowScrollDisableTimeout;
function windowScrollDisable(disable) {
  clearTimeout(windowScrollDisableTimeout);
  if (typeof window === 'undefined') return;
  // this fix is ONLY for iOS (should only target Safari)
  var isIOS = is_ios();
  if (!isIOS) return;
  if (!disable) {
    window.document.body.classList.remove('overflowHidden');
    return;
  }
  window.document.body.classList.add('overflowHidden');
  windowScrollDisableTimeout = setTimeout(() => {
    window.document.body.classList.remove('overflowHidden');
  }, 300);
}

const InfiniteCarousel = ({
  children,
  variant,
  options: customOptions = {},
  className,
  controls,
  smallerDots = false,
  showArrows = true,
  useSwipeOverlay = true,
  ...props
}) => {
  if (!children) {
    return null;
  }
  const theme = useTheme();
  const options = {
    autoplay: false,
    autoplaySpeed: 4800,
    overScan: 1,
    dots: true,
    msResumeAfterHover: 1000,
    ...customOptions,
  };
  if (customOptions.slowerOnDesktop && typeof window === 'object') {
    let width = window?.document?.documentElement?.clientWidth || window?.innerWidth;
    if (width > 800) {
      options.autoplaySpeed = options.autoplaySpeed * customOptions.slowerOnDesktop;
    }
  }
  if (!options.msResumeWhileHover) {
    options.msResumeWhileHover = options.autoplaySpeed * 2.5;
  }
  let slideshowPauseTimeout;
  let componentRef; // will be created by useInView() instead of useRef()
  const slideshowRef = useRef();
  /*
   * Do not animate if ?qaStatic queryString flag is set
   */
  const [doNotStart, set_doNotStart] = useState(false);
  useEffect(() => {
    if (slideshowRef?.current?.slickPause) {
      slideshowRef?.current?.slickPause();
    }
    let qaStatic = getQueryParam('qaStatic');
    if (qaStatic !== null) {
      set_doNotStart(true);
    }
  }, []);
  /*
   * Only animate/enable when in view (otherwise consumes a lot of processing power and slows down the whole page!)
   */
  const { observe, inView } = useInView({
    onEnter: () => {
      window.dispatchEvent(new Event('resize'));
    },
  });
  componentRef = observe;
  useEffect(() => {
    if (!!inView) {
      if (!doNotStart) {
        if (slideshowRef?.current?.slickPlay) {
          slideshowRef?.current?.slickPlay();
        }
      }
    } else {
      if (slideshowRef?.current?.slickPause) {
        slideshowRef?.current?.slickPause();
      }
    }
  }, [inView]);
  /*
   * Pause slideshow on mobile, when touched
   */
  const onMouseOut = () => {
    // on mouse out, resume slideshow
    // (not reliable, so debounce it after 1 second - if onMouseOver happens before that, ok )
    clearTimeout(slideshowPauseTimeout);
    slideshowPauseTimeout = setTimeout(() => {
      if (!doNotStart) {
        if (slideshowRef?.current?.slickPlay) {
          slideshowRef?.current?.slickPlay();
        }
      }
    }, options.msResumeAfterHover);
  };
  const onHover = () => {
    // pause slideshow on hover - built-in functionality ignores .carousel-dots
    clearTimeout(slideshowPauseTimeout);
    if (slideshowRef?.current?.slickPause) {
      slideshowRef?.current?.slickPause();
      // on mouse out, resume slideshow
      // (not possible to do on mouse out, so just wait 10 seconds)
      slideshowPauseTimeout = setTimeout(() => {
        if (!doNotStart) {
          if (slideshowRef?.current?.slickPlay) {
            slideshowRef?.current?.slickPlay();
          }
        }
      }, options.msResumeWhileHover);
    }
  };
  useEffect(() => {
    // start listener on componentDidMount
    if (componentRef && componentRef.current && componentRef?.current?.addEventListener) {
      componentRef?.current?.addEventListener('touchstart', onHover);
    }
    // cleanup on componentWillUnmount
    return () => {
      if (slideshowPauseTimeout) {
        clearTimeout(slideshowPauseTimeout);
      }
      if (componentRef && componentRef.current && componentRef?.current?.addEventListener) {
        componentRef?.current?.removeEventListener('touchstart', onHover);
      }
    };
  }, []);
  /*
  /*
   * Detect swipe (pause on start of swipe)
   */
  let swipeHandlers;
  if (useSwipeOverlay) {
    swipeHandlers = useSwipeable({
      onSwiped: (eventData) => {
        if (eventData.dir === 'Right') {
          slideshowRef?.current?.slickPrev();
        }
        if (eventData.dir === 'Left') {
          slideshowRef?.current?.slickNext();
        }
        setTimeout(() => {
          if (!doNotStart) {
            slideshowRef?.current?.slickPlay();
          }
        }, 300);
      },
      onSwiping: (eventData) => {},
      onSwipeStart: (eventData) => {
        windowScrollDisable(eventData.absX * 5 > eventData.absY); // if swipe left even a little bit (5x multiplier), disable
        slideshowRef?.current?.slickPause();
      },
      trackTouch: true,
      trackMouse: true,
    });
  }
  /*
   * Custom controls in parent component
   */
  if (typeof controls === 'object') {
    controls.back = () => {
      slideshowRef?.current?.slickPrev();
    };
    controls.next = () => {
      slideshowRef?.current?.slickNext();
    };
  }
  /*
   * Render
   */
  return (
    <div
      {...props}
      css={[styles[variant], styles.container(smallerDots, showArrows)]}
      onMouseOut={onMouseOut}
      onClick={onHover}
      onMouseOver={onHover}
      ref={componentRef}
      className={'InfiniteCarousel' + (className ? ' ' + className : '')}
    >
      {!!useSwipeOverlay && (
        <div css={styles.swipeable} className="useSwipeOverlay" {...swipeHandlers} />
      )}
      <Slider
        ref={slideshowRef}
        autoplay={options.autoplay}
        autoplaySpeed={options.autoplaySpeed}
        overScan={options.overScan}
        dots={options.dots}
        css={styles.slideshow}
      >
        {children}
      </Slider>
    </div>
  );
};
export default InfiniteCarousel;
