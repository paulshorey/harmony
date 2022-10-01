import { css, useTheme } from '@emotion/react';
import style_to_string from '@ps/fn/browser/style/style_to_string';
import useDeviceInfo from '@ps/ui/hooks/useDeviceInfo';
import { StylesFile } from '@ps/ui/types/component';
import { ComponentType, FC, forwardRef } from 'react';
import { themeType } from 'styles/theme';
import { colorsKeyType } from 'styles/colors';

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
        color,
        onDark = false,
        onLight = false,
        as,
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
      const theme: themeType = useTheme(); // style() 1st argument
      const options: {
        variants: Record<string, boolean>;
        color: colorsKeyType;
      } = {
        variants: { default: true },
        color: theme.colorsKey,
      }; // style() 2nd argument
      let ssOutput = ''; // will be wrapped in css`` before being passed to component props.css

      // In case EmotionJS props.css handling is not set up for all elements, this handles it at least for this component
      if (cssFromProps) {
        ssOutput += style_to_string(cssFromProps) + '\n';
      }

      // Helpers for variants
      if (color) {
        // @ts-ignore // check if specified color is valid
        if (theme.colors[color]) {
          // @ts-ignore // if theme.colors[color], then set temporary custom color scheme from variant
          options.colorsKey = color;
          // this modified theme will be passed to the variant EmotionJS style function as second argument
        }
      }

      // Variants
      if (styles) {
        const variantStrs = variant?.trim().split(/[^\w\d-_]+/) || [];
        // props.variant (strings separated by spaces or any other illegal characters)
        if (variantStrs.length) {
          for (const str of variantStrs) {
            options.variants[str] = true;
          }
        }
        // props.onDark (passed as its own prop for shorthand)
        if (onDark !== false) {
          options.variants.onDark = true;
        }
        if (onLight !== false) {
          options.variants.onLight = true;
        }
        // props.variants (string[])
        if (variants?.length) {
          for (const str of variants) {
            options.variants[str] = true;
          }
        }
        // apply variants
        for (const variant in options.variants) {
          if (variant) {
            // Apply component-specific styles
            if (styles[variant]) {
              ssOutput += style_to_string(
                // @ts-ignore // styles[variant] is defined, so use it
                styles[variant],
                theme,
                options
              );
            }
            // If component-specific style is not defined,
            // then apply a global style from theme
            else if (theme.variants[variant]) {
              ssOutput += style_to_string(
                // @ts-ignore // theme.variants[variant] is defined, so use it
                theme.variants[variant],
                theme,
                options
              );
            }
          }
        }
      }

      // For each device and size, add a media query (but only if custom style for it is specified)
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

      ssOutput += `\n&.ss {\n`;

      if (ss) {
        ssOutput += `\n${style_to_string(ss, theme)}\n`;
      }

      if (ssLg) {
        ssOutput += `${theme.mq.lg} { ${style_to_string(ssLg, theme)} }\n`;
      }
      if (ssSm) {
        ssOutput += `${theme.mq.sm} { ${style_to_string(ssSm, theme)} }\n`;
      }
      if (ssDesktop) {
        ssOutput += `${theme.mq.desktop} { ${style_to_string(
          ssDesktop,
          theme
        )} }\n`;
      }
      if (ssMobile) {
        ssOutput += `${theme.mq.mobile} { ${style_to_string(
          ssMobile,
          theme
        )} }\n`;
      }
      if (ssTablet) {
        ssOutput += `${theme.mq.tablet} { ${style_to_string(
          ssTablet,
          theme
        )} }\n`;
      }
      if (ssLargeTablet) {
        ssOutput += `${theme.mq.largeTablet} { ${style_to_string(
          ssLargeTablet,
          theme
        )} }\n`;
      }
      if (ssNotPhone) {
        ssOutput += `${theme.mq.notPhone} { ${style_to_string(
          ssNotPhone,
          theme
        )} }\n`;
      }
      if (ssPhone) {
        ssOutput += `${theme.mq.phone} { ${style_to_string(
          ssPhone,
          theme
        )} }\n`;
      }
      if (ssSmallPhone) {
        ssOutput += `${theme.mq.smallPhone} { ${style_to_string(
          ssSmallPhone,
          theme
        )} }\n`;
      }
      if (ssTinyPhone) {
        ssOutput += `${theme.mq.tinyPhone} { ${style_to_string(
          ssTinyPhone,
          theme
        )} }\n`;
      }
      if (ssLargeDesktop) {
        ssOutput += `${theme.mq.largeDesktop} { ${style_to_string(
          ssLargeDesktop,
          theme
        )} }\n`;
      }
      if (ssVeryLargeDesktop) {
        ssOutput += `${theme.mq.veryLargeDesktop} { ${style_to_string(
          ssVeryLargeDesktop,
          theme
        )} }\n`;
      }
      if (ssPortrait) {
        ssOutput += `${theme.mq.portrait} { ${style_to_string(
          ssPortrait,
          theme
        )} }\n`;
      }
      if (ssLandscape) {
        ssOutput += `${theme.mq.landscape} { ${style_to_string(
          ssLandscape,
          theme
        )} }\n`;
      }
      if (ssMac) {
        ssOutput += `${
          deviceInfo?.device === 'Mac' && `${style_to_string(ssMac, theme)}`
        }\n`;
      }
      if (ssWindows) {
        ssOutput += `${
          deviceInfo?.device === 'Windows' &&
          `${style_to_string(ssWindows, theme)}`
        }\n`;
      }
      if (ssLinux) {
        ssOutput += `${
          deviceInfo?.device === 'Linux' && `${style_to_string(ssLinux, theme)}`
        }\n`;
      }
      if (ssAndroid) {
        ssOutput += `${
          deviceInfo?.device === 'Android' &&
          `${style_to_string(ssAndroid, theme)}`
        }\n`;
      }
      if (ssIPad) {
        ssOutput += `${
          deviceInfo?.device === 'iOS' && `${style_to_string(ssIPad, theme)}`
        }\n`;
      }
      if (ssIPhone) {
        ssOutput += `${
          deviceInfo?.device === 'iPhone' &&
          `${style_to_string(ssIPhone, theme)}`
        }\n`;
      }
      if (ssIframe && deviceInfo?.inIframe) {
        ssOutput += `${style_to_string(ssIframe, theme)}\n`;
      }
      if (ssNotIframe && !deviceInfo?.inIframe) {
        ssOutput += `${style_to_string(ssNotIframe, theme)}\n`;
      }
      if (ssWebview && deviceInfo?.inWebview) {
        ssOutput += `${style_to_string(ssWebview, theme)}\n`;
      }
      if (ssNotWebview && !deviceInfo?.inWebview) {
        ssOutput += `${style_to_string(ssNotWebview, theme)}\n`;
      }
      ssOutput += `\n}\n`;

      return (
        <Component
          {...props}
          ref={ref}
          as={as}
          // 'ss' className is important - above styles are wrapped in `&.ss` selector for slightly greater specificity
          className={(label || '') + ' ss ' + (className || '')}
          // assemble the string above, then wrap it all in EmotionCSS function just one time here
          css={css(ssOutput)}
          // variant={variant}
          // variants={variants}
          // styles={styles}
        />
      );
    }
  );
