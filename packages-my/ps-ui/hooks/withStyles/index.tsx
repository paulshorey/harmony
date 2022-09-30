import { css, useTheme } from '@emotion/react';
import style_to_string from '@ps/fn/browser/style/style_to_string';
import useDeviceInfo from '@ps/ui/hooks/useDeviceInfo';
import { StylesFile } from '@ps/ui/types/component';
import { ComponentType, FC, forwardRef } from 'react';
import { themeType } from 'styles/theme';

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
      const theme: themeType = useTheme();
      let variantsDict: Record<string, boolean>;

      // Partial output
      let ssString = '';
      if (cssFromProps) {
        ssString += style_to_string(cssFromProps) + '\n';
      }

      // Variants
      if (styles) {
        const variantStrs = variant?.split(' ') || [];
        variantsDict = {
          default: true,
        };
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
          if (variant) {
            if (styles[variant]) {
              // @ts-ignore // tsFixMe // Why it's saying may be undefined?
              ssString += style_to_string(styles[variant], theme, variantsDict);
            }
            // tsFixMe // Not really a typescript issue, but need to think of a better way
            // to merge the two sets of variants. If 3rd party app extends the theme, then
            // that should be more important than the predefined local variants. But those would be ignored.
            // So, need a way for 3rd party app to extend local component variants too. Ideally. Not high priority.
            else if (theme.variants?.[variant]) {
              ssString += style_to_string(
                // @ts-ignore // tsFixMe // Why it's saying may be undefined?
                theme.variants[variant],
                theme,
                variantsDict
              );
            }
          }
        }
      }

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

      // Generic style string is less important than below size specific ones

      if (ss) {
        ssString += `\n${style_to_string(ss)}\n`;
      }

      // Device-specific + theme.mq size-specific
      ssString += `\n& {\n`;
      if (ssLg) {
        ssString += `${theme.mq.lg} { ${style_to_string(ssLg)} }\n`;
      }
      if (ssSm) {
        ssString += `${theme.mq.sm} { ${style_to_string(ssSm)} }\n`;
      }
      if (ssDesktop) {
        ssString += `${theme.mq.desktop} { ${style_to_string(ssDesktop)} }\n`;
      }
      if (ssMobile) {
        ssString += `${theme.mq.mobile} { ${style_to_string(ssMobile)} }\n`;
      }
      if (ssTablet) {
        ssString += `${theme.mq.tablet} { ${style_to_string(ssTablet)} }\n`;
      }
      if (ssLargeTablet) {
        ssString += `${theme.mq.largeTablet} { ${style_to_string(
          ssLargeTablet
        )} }\n`;
      }
      if (ssNotPhone) {
        ssString += `${theme.mq.notPhone} { ${style_to_string(ssNotPhone)} }\n`;
      }
      if (ssPhone) {
        ssString += `${theme.mq.phone} { ${style_to_string(ssPhone)} }\n`;
      }
      if (ssSmallPhone) {
        ssString += `${theme.mq.smallPhone} { ${style_to_string(
          ssSmallPhone
        )} }\n`;
      }
      if (ssTinyPhone) {
        ssString += `${theme.mq.tinyPhone} { ${style_to_string(
          ssTinyPhone
        )} }\n`;
      }
      if (ssLargeDesktop) {
        ssString += `${theme.mq.largeDesktop} { ${style_to_string(
          ssLargeDesktop
        )} }\n`;
      }
      if (ssVeryLargeDesktop) {
        ssString += `${theme.mq.veryLargeDesktop} { ${style_to_string(
          ssVeryLargeDesktop
        )} }\n`;
      }
      if (ssPortrait) {
        ssString += `${theme.mq.portrait} { ${style_to_string(ssPortrait)} }\n`;
      }
      if (ssLandscape) {
        ssString += `${theme.mq.landscape} { ${style_to_string(
          ssLandscape
        )} }\n`;
      }
      if (ssMac) {
        ssString += `${
          deviceInfo?.device === 'Mac' && `${style_to_string(ssMac)}`
        }\n`;
      }
      if (ssWindows) {
        ssString += `${
          deviceInfo?.device === 'Windows' && `${style_to_string(ssWindows)}`
        }\n`;
      }
      if (ssLinux) {
        ssString += `${
          deviceInfo?.device === 'Linux' && `${style_to_string(ssLinux)}`
        }\n`;
      }
      if (ssAndroid) {
        ssString += `${
          deviceInfo?.device === 'Android' && `${style_to_string(ssAndroid)}`
        }\n`;
      }
      if (ssIPad) {
        ssString += `${
          deviceInfo?.device === 'iOS' && `${style_to_string(ssIPad)}`
        }\n`;
      }
      if (ssIPhone) {
        ssString += `${
          deviceInfo?.device === 'iPhone' && `${style_to_string(ssIPhone)}`
        }\n`;
      }
      if (ssIframe && deviceInfo?.inIframe) {
        ssString += `${style_to_string(ssIframe)}\n`;
      }
      if (ssNotIframe && !deviceInfo?.inIframe) {
        ssString += `${style_to_string(ssNotIframe)}\n`;
      }
      if (ssWebview && deviceInfo?.inWebview) {
        ssString += `${style_to_string(ssWebview)}\n`;
      }
      if (ssNotWebview && !deviceInfo?.inWebview) {
        ssString += `${style_to_string(ssNotWebview)}\n`;
      }
      ssString += `\n}\n`;

      return (
        <Component
          {...props}
          className={(label || '') + ' ' + (className || '')}
          css={css(ssString)}
          ref={ref}
          // variant={variant}
          // variants={variants}
          // styles={styles}
        />
      );
    }
  );
