import React, { useEffect, useState } from 'react';
import LottiePlayer from 'react-lottie-player';
// import { getQueryParam } from 'src/functions/url';

/**
 * Pass filename OR filedata.
 * Or both if you want filedata to be the initial (lightweight) state, then replace with filename (heavy) state on page load.
 */
const Lottie = ({ filename, filedata, className, ...props }) => {
  const [animationData, setAnimationData] = useState(filedata);

  /*
   * Do not animate if ?qaStatic queryString flag is set
   */
  const [play, set_play] = useState(false);
  useEffect(() => {
    // if lazy-loaded (by default), then import the data from file
    if (filename) {
      // disable for Search Engines, QA, LightHouse test, and other bots
      if (
        /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(window.navigator.userAgent)
      ) {
        // disable
        setAnimationData(undefined);
      } else {
        // enable
        import(`src/lottie/${filename}.json`).then(setAnimationData);
      }
    }
    // pause for QA
    // let qaStatic = getQueryParam('qaStatic');
    // if (qaStatic && qaStatic !== null) {
    //   // for test automation
    //   set_play(false);
    // } else {
    //   // for human
    //   if (filedata) {
    //     // play after pause (if loaded animation immediately)
    //     setTimeout(() => {
    //       set_play(true);
    //     }, 2000);
    //   } else {
    //     // play immediately (if deferred/lazy loaded)
    //     set_play(true);
    //   }
    // }
  }, []);

  if (!animationData) return null;
  return (
    <LottiePlayer
      {...props}
      className={'Lottie' + (className ? ' ' + className : '')}
      play={play}
      animationData={animationData}
    />
  );
};
export default Lottie;
