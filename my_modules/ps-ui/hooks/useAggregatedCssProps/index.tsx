import { css, useTheme } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/style_to_string';
import useDeviceInfo from 'hooks/useDeviceInfo';
import theme from 'styles/theme'; // fixTheme
import { cssPropType } from 'types/component';

/**
 * All the props your component received. Just pass them along as one big object.
 */
type Input = Record<any, any>;
type Output = {
  /**
   * ss and other custom props aggregated into one EmotionJS CSS prop
   */
  cssProp: cssPropType;
  /**
   * all the remaining props that were not used
   */
  otherProps: Record<string, any>;
};

/**
 * Input: All the props your component received. Just pass them along as one big object.
 *
 * Output: { cssProp, otherProps }
 *
 * cssProp: ss and other custom props aggregated into one EmotionJS CSS prop.
 *
 * otherProps: all the other props that were not used
 */
export default ({
  css: cssFromProps,
  ss,
  ssAndroid,
  ssDesktop,
  ssIPad,
  ssIPhone,
  ssIframe,
  ssLandscape,
  ssLargeDesktop,
  ssLargeTablet,
  ssLg,
  ssLinux,
  ssMac,
  ssMobile,
  ssNotIframe,
  ssNotPhone,
  ssNotWebview,
  ssPhone,
  ssPortrait,
  ssSm,
  ssSmallPhone,
  ssTablet,
  ssTinyPhone,
  ssVeryLargeDesktop,
  ssWebview,
  ssWindows,
  styles,
  variant,
  variants,
  ...props
}: Input): Output => {
  // const theme = useTheme(); // fixTheme

  // Partial output
  let ssString = '';

  // Variants
  const variantStrs: Array<string> = variant?.split(' ') || [];
  const variantsDict: Record<string, boolean> = { default: true };
  if (variantStrs.length) {
    for (const str of variantStrs) {
      variantsDict[str] = true;
    }
  }
  if (variants?.length) {
    for (const str of variants) {
      variantsDict[str] = true;
    }
  }
  for (const variant in variantsDict) {
    if (variant && styles?.[variant]) {
      ssString += emotionToString(styles[variant], theme, variantsDict);
    }
  }

  // Device-specific styles
  const deviceInfo =
    ssIframe ||
    ssNotIframe ||
    ssWebview ||
    ssNotWebview ||
    ssIPhone ||
    ssIPad ||
    ssMac ||
    ssWindows ||
    ssLinux ||
    ssAndroid
      ? useDeviceInfo()
      : undefined;

  // Final output
  return {
    otherProps: props,
    cssProp: (theme: theme) => `
      ${cssFromProps && `${emotionToString(cssFromProps)};`}
      ${ssString};
      & {
        ${ss && emotionToString(ssIframe)}

        ${
          ssIframe &&
          `${deviceInfo?.inIframe && `${emotionToString(ssIframe)}`}`
        }

      ${
        ssNotIframe &&
        `${!deviceInfo?.inIframe && `${emotionToString(ssNotIframe)}`}`
      }

      ${
        ssWebview &&
        `${deviceInfo?.inWebview && `${emotionToString(ssWebview)}`}`
      }
        
      ${
        ssNotWebview &&
        `${!deviceInfo?.inWebview && `${emotionToString(ssNotWebview)}`}`
      }
        
      ${
        ssMac &&
        `${deviceInfo?.device === 'Mac' && `${emotionToString(ssMac)}`}`
      }
        
      ${
        ssWindows &&
        `${deviceInfo?.device === 'Windows' && `${emotionToString(ssWindows)}`}`
      }
        
      ${
        ssLinux &&
        `${deviceInfo?.device === 'Linux' && `${emotionToString(ssLinux)}`}`
      }
        
      ${
        ssAndroid &&
        `${deviceInfo?.device === 'Android' && `${emotionToString(ssAndroid)}`}`
      }
        
      ${
        ssIPad &&
        `${deviceInfo?.device === 'iOS' && `${emotionToString(ssIPad)}`}`
      }
        
      ${
        ssIPhone &&
        `${deviceInfo?.device === 'iPhone' && `${emotionToString(ssIPhone)}`}`
      }
        
      ${
        ssLg &&
        `${theme.mq.lg} {
        ${emotionToString(ssLg)}
      }
      `
      }
      ${
        ssSm &&
        `${theme.mq.sm} {
        ${emotionToString(ssSm)}
      }
      `
      }
      ${
        ssDesktop &&
        `${theme.mq.desktop} {
        ${emotionToString(ssDesktop)}
      }
      `
      }
      ${
        ssMobile &&
        `${theme.mq.mobile} {
        ${emotionToString(ssMobile)}
      }
      `
      }
      ${
        ssTablet &&
        `${theme.mq.tablet} {
        ${emotionToString(ssTablet)}
      }
      `
      }
      ${
        ssLargeTablet &&
        `${theme.mq.largeTablet} {
        ${emotionToString(ssLargeTablet)}
      }
      `
      }
      ${
        ssNotPhone &&
        `${theme.mq.notPhone} {
        ${emotionToString(ssNotPhone)}
      }
      `
      }
      ${
        ssPhone &&
        `${theme.mq.phone} {
        ${emotionToString(ssPhone)}
      }
      `
      }
      ${
        ssSmallPhone &&
        `${theme.mq.smallPhone} {
        ${emotionToString(ssSmallPhone)}
      }
      `
      }
      ${
        ssTinyPhone &&
        `${theme.mq.tinyPhone} {
        ${emotionToString(ssTinyPhone)}
      }
      `
      }
      ${
        ssLargeDesktop &&
        `${theme.mq.largeDesktop} {
        ${emotionToString(ssLargeDesktop)}
      }
      `
      }
      ${
        ssVeryLargeDesktop &&
        `${theme.mq.veryLargeDesktop} {
        ${emotionToString(ssVeryLargeDesktop)}
      }
      `
      }
      ${
        ssPortrait &&
        `${theme.mq.portrait} {
        ${emotionToString(ssPortrait)}
      }
      `
      }
      ${
        ssLandscape &&
        `${theme.mq.landscape} {
        ${emotionToString(ssLandscape)}
      }
      `
      }
      }
    `,
  };
};
