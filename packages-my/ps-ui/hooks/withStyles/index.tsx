import { css, useTheme } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';
import useDeviceInfo from '@ps/ui/hooks/useDeviceInfo';
import { StylesFile } from '@ps/ui/types/component';
import { ComponentType, FC, forwardRef } from 'react';

/**
 * This is a HOC. It wraps any component in this library. Only for use with components in this library.
 * It takes all the custom ss props, plus styles, variants, css, and aggregates them into one css prop.
 */
export default (
  Component: ComponentType | FC<any>,
  label: string,
  styles?: StylesFile
) =>
  forwardRef(
    (
      {
        className,
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
        variant,
        variants,
        ...props
      }: any,
      ref
    ) => {
      const theme = useTheme();

      // Partial output
      let ssString = `${cssFromProps && `${emotionToString(cssFromProps)};`}`;

      // Variants
      if (styles) {
        const variantStrs = variant?.split(' ') || [];
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
          if (variant && styles[variant]) {
            ssString += emotionToString(styles[variant], theme, variantsDict);
          }
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
      ssString += `
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
    `;
      return (
        <Component
          {...props}
          className={label + (className ? ' ' + className : '')}
          css={css`
            ${ssString}
          `}
          ref={ref}
        />
      );
    }
  );
