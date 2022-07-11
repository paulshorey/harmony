import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect } from 'react';

import style from './style';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  require('src/assets/fullpage.scrollHorizontally.min');
};

const Fullpage = () => {
  useEffect(() => {
    const el = document.querySelector('body > div:last-child');
    if (el) {
      el.style = 'display:none;';
    }
  }, []);
  return (
    <div css={style}>
      <ReactFullpage
        controlArrows={false}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_JS_KEY}
        pluginWrapper={pluginWrapper}
        render={({ fullpageApi, state }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>1st section must be full-screen</p>
                <p className="show-mobile">( Except in mobile )</p>
              </div>
              <div className="section">
                <p>
                  Any section above the horizontal scroll MUST BE FULL-SCREEN!
                </p>
                <p className="show-mobile">( Except in mobile )</p>
              </div>
              <div className="section">
                <div className="slide">
                  <p>Horizontal scroll - SLIDE 1</p>
                </div>
                <div className="slide">
                  <p>Horizontal scroll - SLIDE 2</p>
                </div>
              </div>
              <div className="section">
                <p className="hide-mobile">&nbsp;</p>
                <p className="hide-mobile">&nbsp;</p>
                <p className="hide-mobile">&nbsp;</p>
                <p className="hide-mobile">&nbsp;</p>
                <p className="hide-mobile">&nbsp;</p>
                <p>&nbsp;</p>
                <p>The </p>
                <p>&nbsp;</p>
                <p>content </p>
                <p>&nbsp;</p>
                <p>after </p>
                <p>&nbsp;</p>
                <p>the </p>
                <p>&nbsp;</p>
                <p>horizontal </p>
                <p>&nbsp;</p>
                <p>scrolling </p>
                <p>&nbsp;</p>
                <p>can </p>
                <p>&nbsp;</p>
                <p>resume </p>
                <p>&nbsp;</p>
                <p>scrolling </p>
                <p>&nbsp;</p>
                <p>naturally, </p>
                <p>&nbsp;</p>
                <p>and </p>
                <p>&nbsp;</p>
                <p>does </p>
                <p>&nbsp;</p>
                <p>not</p>
                <p>&nbsp;</p>
                <p>need </p>
                <p>&nbsp;</p>
                <p>to be </p>
                <p>&nbsp;</p>
                <p>fullscreen.</p>
                <p>&nbsp;</p>
                <p className="show-mobile">( Except in mobile )</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
        responsiveSlides={true} /* Because we are using the extension */
        responsiveWidth={931}
        scrollHorizontally={true}
        scrollHorizontallyKey={process.env.NEXT_PUBLIC_FULLPAGE_HORIZONTAL_KEY}
        scrollingSpeed={1000}
      />
    </div>
  );
};

export default Fullpage;
