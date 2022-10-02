import React, { useContext, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useInView } from 'react-cool-inview';
// import { throttle } from '@ps/ui/functions/timeouts';

const styles = {
  wrapper: (theme: t, opt: o) => css`
    position: relative;
  `,
  observer: (theme: t, opt: o) => css`
    position: absolute;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    width: 10px;
    height: 10px;
    background: transparent;
    z-index: 100000000;
  `,
};

const scrollIntoView = ({ id }) => {
  console.log('scrollIntoView', id);
  let el = document.getElementById(id);
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

/**
 * EXPERIMENTAL - CURRENTLY DOES NOT WORK WELL - EXPORT IS DISABLED
 */
const ScrollSnap = ({
  id,
  children,
  snapUp = false,
  snapDown = true,
  ...props
}) => {
  const [realId, set_realId] = useState(id);
  useEffect(() => {
    if (!id) {
      // Generate unique DOM ID for rendered elemenet
      let realId = 'ScrollSnap_';
      for (let i = 0; i < 8; i++) {
        realId += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      }
      set_realId(realId);
    }
  }, []);
  // Scroll to this element
  const { observe: observeTop, inView: inviewTop } = useInView();
  const { observe: observeUp } = useInView({
    onEnter: () => {
      if (!snapUp) {
        return;
      }
      if (inviewBottom && !inviewTop) {
        scrollIntoView({ id: realId });
        // throttle(scrollIntoView, 1050)({ id: realId });
      }
    },
  });
  const { observe: observeDown } = useInView({
    onEnter: () => {
      if (!snapDown) {
        return;
      }
      if (inviewTop && !inviewBottom) {
        scrollIntoView({ id: realId });
        // throttle(scrollIntoView, 1050)({ id: realId });
      }
    },
  });
  const { observe: observeBottom, inView: inviewBottom } = useInView();

  return (
    <div css={styles.wrapper} {...props} id={realId}>
      {children}
      <div
        ref={observeTop}
        css={[
          styles.observer,
          css`
            top: 0;
            left: 0;
          `,
        ]}
      />
      <div
        ref={observeUp}
        css={[
          styles.observer,
          css`
            top: 45%;
            top: 10%;
            left: 10px;
          `,
        ]}
      />
      <div
        ref={observeDown}
        css={[
          styles.observer,
          css`
            top: 45%;
            top: 10%;
            left: 20px;
          `,
        ]}
      />
      <div
        ref={observeBottom}
        css={[
          styles.observer,
          css`
            bottom: 0;
            left: 30px;
          `,
        ]}
      />
    </div>
  );
};

/**
 * THIS COMPONENT IS NOT READY YET! IT IS A WORK IN PROGRESS
 */
// export default ScrollSnap;
