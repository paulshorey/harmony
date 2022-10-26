import React from 'react';
import TheCarousel from './TheCarousel';
import { getQueryParam } from 'src/functions/url';

/*
 * Something changed with the browser/node/package code...
 * The infinite-react-carousel no longer works on first render.
 * It needs to wait until the DOM has mounted.
 */
const InfiniteCarousel = ({ ...props }) => {
  const [showCarousel, set_showCarousel] = React.useState(false);
  React.useEffect(() => {
    // disable for Search Engines, QA, LightHouse test, and other bots
    let disableForBots = /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(
      window.navigator.userAgent
    );
    if (disableForBots && disableForBots !== null) {
      // disable
    } else {
      // enable
      set_showCarousel(true);
    }
    // pause for QA
    let qaStatic = getQueryParam('qaStatic');
    if (qaStatic && qaStatic !== null) {
      // pause
      props.options.autoplay = false;
    }
  }, []);
  return showCarousel ? <TheCarousel {...props} /> : null;
};

export default InfiniteCarousel;
