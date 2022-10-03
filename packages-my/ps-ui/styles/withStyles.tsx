import { css, useTheme } from '@emotion/react';
import style_to_string from '@ps/fn/browser/style/style_to_string';
import obj_clone from '@ps/fn/io/obj/obj_clone';
import obj_add from '@ps/fn/io/obj/obj_add';
import useDeviceInfo from '@ps/ui/hooks/useDeviceInfo';
import { StylesType } from '@ps/ui/types/component';
import { ComponentType, FC, forwardRef } from 'react';
import { themeType as t, optionsType as o } from 'styles/theme';

/**
 * This is a HOC. It wraps any component in this library. Only for use with components in this library.
 * It takes all the custom ss props, plus styles, variants, css, and aggregates them into one css prop.
 */
export default (
  Component: ComponentType | FC<any>,
  label: string,
  styles?: StylesType
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
      const theme: t = useTheme(); // style() 1st argument
      theme.instance = {
        variants: { default: true },
        shade: '',
        hue: ((color && !!theme.colors[color] && color) || '') + '',
      }; // style() 2nd argument
      let ssOutput = ''; // will be wrapped in css`` before being passed to component props.css

      // In case EmotionJS props.css handling is not set up for all elements, this handles it at least for this component
      if (cssFromProps) {
        ssOutput += style_to_string(cssFromProps) + '\n';
      }

      // Variants
      if (styles) {
        const variantStrs = variant?.trim().split(/[^\w\d-_]+/) || [];
        // add tag name and component name variants
        if (as) {
          obj_add(theme.instance.variants, as, true);
        }
        if (label) {
          obj_add(theme.instance.variants, label, true);
        }
        // props.variant (strings separated by spaces or any other illegal characters)
        if (variantStrs.length) {
          for (const str of variantStrs) {
            obj_add(theme.instance.variants, str, true);
          }
        }
        // props.onDark (passed as its own prop for shorthand)
        if (onDark !== false) {
          obj_add(theme.instance.variants, 'onDark', true);
          theme.instance.shade = 'onDark';
        }
        if (onLight !== false) {
          obj_add(theme.instance.variants, 'onLight', true);
          theme.instance.shade = 'onLight';
        }
        if (props.hasOwnProperty('disabled')) {
          obj_add(theme.instance.variants, 'disabled', true);
        }
        // props.variants (string[])
        if (variants?.length) {
          for (const str of variants) {
            obj_add(theme.instance.variants, str, true);
          }
        }

        // check variant for shade specification
        // @ts-ignore // it may not exist. that's why its in an if statement
        if (theme.instance?.variants?.onDark) {
          theme.instance.shade = 'onDark';
          theme.instance.onDark = true;
        }
        // @ts-ignore // it may not exist. that's why its in an if statement
        else if (theme.instance.variants?.onLight) {
          theme.instance.shade = 'onLight';
          theme.instance.onLight = true;
        }

        // Apply variants
        for (const variant in theme.instance.variants) {
          if (variant) {
            // Apply component-specific styles
            if (styles[variant]) {
              ssOutput += style_to_string(
                // @ts-ignore // styles[variant] is defined, so use it
                styles[variant],
                theme
              );
            }
            // If component-specific style is not defined,
            // then apply a global style from theme
            else if (theme.variants[variant]) {
              ssOutput += style_to_string(
                // @ts-ignore // theme.variants[variant] is defined, so use it
                theme.variants[variant],
                theme
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

      ssOutput += `\n&.${label} {\n`;

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
          className={(label || '') + (className ? ' ' + className : '')}
          // assemble the string above, then wrap it all in EmotionCSS function just one time here
          css={css(ssOutput)}
          // variant={variant}
          // variants={variants}
          // styles={styles}
        />
      );
    }
  );
