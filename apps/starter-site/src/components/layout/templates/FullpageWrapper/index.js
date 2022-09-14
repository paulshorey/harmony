import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect } from 'react';
import Div from '../../atoms/Div';
import style from './style';

const pluginWrapper = () => {
  require('src/assets/fullpage.scrollHorizontally.min');
};

/**
 * IMPORTANT:
 * Each fullpage section must have className="section".
 * Horizontal sections must be children of a .section and have className="slide".
 */
const Fullpage = ({ className, children, ...props }) => {
  useEffect(() => {
    // setInterval(() => {
    //   const el = document.querySelector('body > div:last-child');
    //   if (el) {
    //     el.style = 'display:none;';
    //   }
    // }, 1000);
  }, []);
  return (
    <Div className={'Fullpage' + (className ? ` ${className}` : '')} css={style} {...props}>
      <ReactFullpage
        controlArrows={false}
        licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_JS_KEY}
        pluginWrapper={pluginWrapper}
        responsiveSlides={true} /* Because we are using the extension */
        responsiveWidth={931}
        scrollHorizontally={true}
        scrollHorizontallyKey={process.env.NEXT_PUBLIC_FULLPAGE_HORIZONTAL_KEY}
        scrollingSpeed={1000}
        render={({ fullpageApi, state }) => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
      />
    </Div>
  );
};

export default Fullpage;
