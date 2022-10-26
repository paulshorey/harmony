import React, { useState, useRef, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';
import { pictureFromSrc } from 'src/functions/pictureFromSrc';
import { getQueryParam } from 'src/functions/url';
import Div from 'src/components/layout/atoms/Div';

const styles = {
  wrapper: ({ width, widthSm, heightWidthRatio, heightWidthRatioSm, widthMobileBreakpoint }) => css`
    position: relative;
    display: inline-block;
    text-align: center;
    box-sizing: content-box;
    max-width: 100%;
    overflow: hidden;
    width: ${width + 'px'};

    ${!!widthMobileBreakpoint &&
    !!widthSm &&
    `
      @media (max-width:${widthMobileBreakpoint}px) {
        width: ${widthSm + 'px'};
      }
    `}
    &::after {
      /* show transparent of correct aspect ratio while waiting for image to load (prevent CLS) */
      content: '';
      display: block;
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: ${heightWidthRatio * 100 + '%'};
      ${!!widthMobileBreakpoint &&
      !!heightWidthRatioSm &&
      `
        @media (max-width:${widthMobileBreakpoint}px) {
          padding-bottom: ${heightWidthRatioSm * 100 + '%'};
        }
      `}
    }

    picture {
      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      max-width: 100vw;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }

    video {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  videoCenterRef: css`
    display: block;
    position: absolute;
    top: 40%;
    left: 0;
    width: 0;
    height: 20%;
    opacity: 0;
  `,
};

const Multimedia = ({
  image,
  imageM,
  imageProps = {},

  video,
  videoM,
  videoProps = {},
  videoControls = {},

  width = 900,
  widthSm = 450,
  widthMobileBreakpoint = 736,
  heightWidthRatio,

  notLazy,
  className,
  ...props
}) => {
  let theme = useTheme();
  const [windowReady, set_windowReady] = useState(false);

  /*
   * Do not render video if ?qaStatic queryString flag is set
   */
  const [doNotStart, set_doNotStart] = useState(false);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    let qaStatic = getQueryParam('qaStatic');
    if (qaStatic !== null) {
      set_doNotStart(true);
    }
  }, []);

  /*
   * IMAGE DATA:
   */
  let picture = pictureFromSrc({
    src: image,
    srcSm: imageM,

    width,
    widthSm,

    heightWidthRatio,
  });
  if (!picture) {
    return null;
  }

  /*
   * VIDEO DATA:
   */
  const videoRef = useRef(null); // watch entire video element when it comes into view
  const videoCenterRef = useRef(null); // watch only center of video element when it comes into view
  const [videoPlaying, set_videoPlaying] = useState(false);
  const [videoSrc, set_videoSrc] = useState(video);
  const [isIntersectingCenter, set_isIntersectingCenter] = useState(false); // controls PAUSE/PLAY
  const [isIntersectingWhole, set_isIntersectingWhole] = useState(false); // controls RESTARTING video from the beginning
  const [wasIntersecting, set_wasIntersecting] = useState(false); // whether show the <video src="???"> at all

  if (video) {
    useEffect(() => {
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }
      // observe Center
      const observerCenter = new IntersectionObserver(([entry]) => {
        if (!!entry.isIntersecting && !wasIntersecting) {
          set_wasIntersecting(true);
        }
        set_isIntersectingCenter(entry.isIntersecting);
      });
      if (videoCenterRef && videoCenterRef.current) {
        observerCenter.observe(videoCenterRef.current);
      }
      // observe Whole
      const observerWhole = new IntersectionObserver(([entry]) => {
        set_isIntersectingWhole(entry.isIntersecting);
      });
      if (videoRef && videoRef.current) {
        observerWhole.observe(videoRef.current);
      }
    }, []);
    // observe Center
    useEffect(() => {
      // PLAY when middle of video is visible in viewport
      if (!!isIntersectingCenter && !videoPlaying) {
        videoControls.play();
      }
      // PAUSE when hidden from view
      if (!isIntersectingCenter && videoPlaying) {
        videoControls.pause();
      }
    }, [isIntersectingCenter]);
    // observe Whole
    useEffect(() => {
      // REWIND TO BEGINNING when entire video is visible again
      if (!!isIntersectingWhole && !videoPlaying) {
        videoControls.rewind();
      }
    }, [isIntersectingWhole]);
  }
  // USE MOBILE video src on mobile devices
  if (video && videoM) {
    const eventListenerFunction = () => {
      let newWidth = window?.document?.documentElement?.clientWidth;
      if (newWidth && newWidth <= widthMobileBreakpoint) {
        set_videoSrc(videoM);
      } else {
        set_videoSrc(video);
      }
    };
    useEffect(() => {
      eventListenerFunction();
      window?.addEventListener('resize', eventListenerFunction);
      // show video after window/DOM loaded
      if (typeof set_windowReady === 'function') {
        set_windowReady(true);
      }
      return () => {
        window?.removeEventListener('resize', eventListenerFunction);
      };
    }, [typeof window === 'object' && window?.document?.documentElement?.clientWidth]);
  }

  /*
   * VIDEO CONTROLS
   * Usable by parent element (just pass an empty object, see props)
   */
  videoControls.pause = () => {
    set_videoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  videoControls.play = () => {
    set_videoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  videoControls.rewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  /*
   * RENDER:
   */
  return (
    <Div
      className={'Multimedia' + (className ? ' ' + className : '')}
      css={styles.wrapper({
        width,
        heightWidthRatio,
        imagePreview: picture.src_preview,
        imagePreviewSm: picture.src_preview_sm,
        widthMobileBreakpoint,
      })}
      {...props}
    >
      {/* show this is the blurry tiny image - while waiting for the full size image to load */}
      {!!picture.src_preview && (
        <>
          <picture>
            {!!picture.src_preview_sm && picture.type_sm !== 'image/svg' && (
              <source
                media={`(max-width:${widthMobileBreakpoint}px)`}
                srcSet={picture.src_preview_sm}
                type="image/webp"
              />
            )}
            <img alt="background is loading" src={picture.src_preview} />
          </picture>
        </>
      )}
      {/* show full size image - while waiting for the video to load */}
      <picture>
        {!!picture.src_webp_sm && picture.type_sm !== 'image/svg' && (
          <source
            media={`(max-width:${widthMobileBreakpoint}px)`}
            srcSet={picture.src_webp_sm}
            type="image/webp"
          />
        )}
        {!!picture.src_webp && picture.type !== 'image/svg' && (
          <source
            media={`(min-width:${widthMobileBreakpoint + 1}px)`}
            srcSet={picture.src_webp}
            type="image/webp"
          />
        )}
        {!!picture.src && (
          <source media={`(min-width:${widthMobileBreakpoint + 1}px)`} srcSet={picture.src} />
        )}
        <img
          loading={!notLazy ? 'lazy' : ''}
          width={widthMobileBreakpoint || width}
          src={picture.src_sm}
          {...imageProps}
        />
      </picture>
      {/* video element observer (is intersecting?) */}
      {!!videoSrc && <div ref={videoCenterRef} css={styles.videoCenterRef} />}
      {/* show the video - after images have loaded */}
      {!!videoSrc && (
        <video
          ref={videoRef}
          src={(!!windowReady && !!wasIntersecting && !doNotStart && videoSrc) || undefined}
          muted={true}
          autoPlay={false}
          loop={true}
          playsInline={true}
          preload="auto"
          {...videoProps}
        />
      )}
    </Div>
  );
};

export default Multimedia;
