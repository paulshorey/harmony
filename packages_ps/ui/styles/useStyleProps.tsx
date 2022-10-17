import { useTheme } from '@emotion/react';
import style_to_string from '@ps/fn/browser/style/style_to_string';
import { returnDeviceInfo, deviceInfoType } from '@ps/ui/hooks/useDeviceInfo';
import { useEffect, useState } from 'react';
import { ssPropType, styledTags } from '@ps/ui/types/component';
import styledWithEmotion from '@emotion/styled';
import cconsole from '@ps/cconsole';
// import themeType from '@ps/ui/types/theme';

/**
 * This is a HOC. It wraps any component in this library. Only for use with components in this library.
 * It takes all the custom ss props, plus styles, variants, css, and aggregates them into one css prop.
 */
export default (
  inputProps: any,
  tagName: styledTags = 'div',
  componentName: string,
  styles?: Record<string, ssPropType>
): [React.ElementType, Record<string, any>] => {
  let {
    color = '',
    shade = '',
    size = '',
    dark = false,
    light = false,
    onDark = false, // old, deprecated, ignored
    onLight = false, // old, deprecated, ignored
    ss,
    ssAll,
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
  } = inputProps;

  /*
   *
   * theme.instance
   *
   */
  if (typeof styledWithEmotion === 'undefined' || !styledWithEmotion?.div) {
    throw new Error(
      '!styledWithEmotion ... typeof = ' + typeof styledWithEmotion
    );
  }
  const theme: any = useTheme(); // tsFix (causes notices when setting new properties, see @ps/ui/types/theme for types)
  if (!theme?.variants) {
    throw new Error(
      '!theme - Must include @emotion/react ThemeProvider, import theme from @ps/ui/styles/theme'
    );
  }

  // Extend the temporary props.theme.instance. If property already exists, do not overwrite it.
  // It may exist because some components in this library include a child component also from this library.
  // This hook is called for each component. Sometimes multiple nested components are combined to make one HTML element.
  if (!props['data-variants'] || !theme.instance) {
    // In @emotion/styled functions, first argument is props, which contains an injected theme property.
    // This library also includes that functionality. This also includes a bit of added functionality...
    // Style functions will be able to read not just the props and theme but also "instance" properties.
    props.theme = theme;
    props.theme.instance = {
      variants: { default: true },
      // @ts-ignore // checking if value exists for color
      color,
      size,
      shade,
    };
  }
  let ssOutput = ''; // will be wrapped in `` before being passed to component props.css. High specificity.
  let ssExtra = ''; // global variants. Not sure it's a good idea to include. But might be useful. Low specificity.

  /*
   *
   * Variants
   *
   */
  if (styles) {
    // special cases
    // if (dark && dark !== 'false') {
    //   theme.instance.variants['dark'] = true;
    // }
    // if (light && light !== 'false') {
    //   theme.instance.variants['light'] = true;
    // }
    // add custom specified (props.as) tag name as a variant
    // if (tagName) {
    //   theme.instance.variants[tagName] = true;
    // }
    // props.variants (string[])
    if (variants?.length) {
      for (const str of variants) {
        // @ts-ignore // was undefined, now defining it
        theme.instance.variants[str] = true;
      }
    }
    // props.variant (strings separated by spaces or any other illegal characters)
    const variantStrs = variant?.trim().split(/[^\w\d-_]+/) || [];
    if (variantStrs.length) {
      for (const str of variantStrs) {
        theme.instance.variants[str] = true;
      }
    }
    // Apply variants
    for (const variant in theme.instance.variants) {
      if (variant) {
        // Apply component-specific styles
        if (styles[variant]) {
          ssOutput += style_to_string(
            // @ts-ignore // styles[variant] is defined, so use it
            styles[variant],
            props
          );
        }
        // If component-specific style is not defined,
        // then apply a global style from theme
        if (theme.variants[variant]) {
          ssExtra += style_to_string(
            // @ts-ignore // theme.variants[variant] is defined, so use it
            theme.variants[variant],
            props
          );
        }
      }
    }
  }

  // Generate a unique selector, wrap css in it to make it more specific.
  // It helps the media queries work better, otherwise they may not have enough specificity.
  // And also it's nice to look in the DevTools and see what component name and variants belong to which DOM element.
  props['data-variants'] = theme.instance.variants
    ? Object.keys(theme.instance.variants).join('-')
    : '';
  if (shade) {
    props['data-variants'] += '-' + shade;
  }
  if (color) {
    props['data-variants'] += '-' + color;
  }

  /*
   *
   * props.ss
   *
   */

  // Increase specificity of ss props:
  // ssOutput += `\n&[data-variants="${props['data-variants']}"] {\n`;

  // For each device and size, add a media query (but only if custom style for it is specified)
  const checkDeviceInfo =
    ssIframe ||
    ssNotIframe ||
    ssWebview ||
    ssNotWebview ||
    ssIPhone ||
    ssIPad ||
    ssMac ||
    ssWindows ||
    ssLinux ||
    ssAndroid;

  const [deviceInfo, set_deviceInfo] = useState<deviceInfoType>();
  useEffect(() => {
    if (checkDeviceInfo) {
      set_deviceInfo(returnDeviceInfo());
    }
  }, []);

  if (ss) {
    ssOutput += `\n${style_to_string(ss, props)}\n`;
  }
  if (ssAll) {
    ssOutput += `${theme.mq.all} { ${style_to_string(ssAll, props)} }\n`;
  }
  if (ssLg) {
    ssOutput += `${theme.mq.lg} { ${style_to_string(ssLg, props)} }\n`;
  }
  if (ssSm) {
    ssOutput += `${theme.mq.sm} { ${style_to_string(ssSm, props)} }\n`;
  }
  if (ssDesktop) {
    ssOutput += `${theme.mq.desktop} { ${style_to_string(
      ssDesktop,
      props
    )} }\n`;
  }
  if (ssMobile) {
    ssOutput += `${theme.mq.mobile} { ${style_to_string(ssMobile, props)} }\n`;
  }
  if (ssTablet) {
    ssOutput += `${theme.mq.tablet} { ${style_to_string(ssTablet, props)} }\n`;
  }
  if (ssLargeTablet) {
    ssOutput += `${theme.mq.largeTablet} { ${style_to_string(
      ssLargeTablet,
      props
    )} }\n`;
  }
  if (ssNotPhone) {
    ssOutput += `${theme.mq.notPhone} { ${style_to_string(
      ssNotPhone,
      props
    )} }\n`;
  }
  if (ssPhone) {
    ssOutput += `${theme.mq.phone} { ${style_to_string(ssPhone, props)} }\n`;
  }
  if (ssSmallPhone) {
    ssOutput += `${theme.mq.smallPhone} { ${style_to_string(
      ssSmallPhone,
      props
    )} }\n`;
  }
  if (ssTinyPhone) {
    ssOutput += `${theme.mq.tinyPhone} { ${style_to_string(
      ssTinyPhone,
      props
    )} }\n`;
  }
  if (ssLargeDesktop) {
    ssOutput += `${theme.mq.largeDesktop} { ${style_to_string(
      ssLargeDesktop,
      props
    )} }\n`;
  }
  if (ssVeryLargeDesktop) {
    ssOutput += `${theme.mq.veryLargeDesktop} { ${style_to_string(
      ssVeryLargeDesktop,
      props
    )} }\n`;
  }
  if (ssPortrait) {
    ssOutput += `${theme.mq.portrait} { ${style_to_string(
      ssPortrait,
      props
    )} }\n`;
  }
  if (ssLandscape) {
    ssOutput += `${theme.mq.landscape} { ${style_to_string(
      ssLandscape,
      props
    )} }\n`;
  }
  if (ssMac) {
    ssOutput += `${
      deviceInfo?.device === 'Mac' && `${style_to_string(ssMac, props)}`
    }\n`;
  }
  if (ssWindows) {
    ssOutput += `${
      deviceInfo?.device === 'Windows' && `${style_to_string(ssWindows, props)}`
    }\n`;
  }
  if (ssLinux) {
    ssOutput += `${
      deviceInfo?.device === 'Linux' && `${style_to_string(ssLinux, props)}`
    }\n`;
  }
  if (ssAndroid) {
    ssOutput += `${
      deviceInfo?.device === 'Android' && `${style_to_string(ssAndroid, props)}`
    }\n`;
  }
  if (ssIPad) {
    ssOutput += `${
      deviceInfo?.device === 'iOS' && `${style_to_string(ssIPad, props)}`
    }\n`;
  }
  if (ssIPhone) {
    ssOutput += `${
      deviceInfo?.device === 'iPhone' && `${style_to_string(ssIPhone, props)}`
    }\n`;
  }
  if (ssIframe && deviceInfo?.inIframe) {
    ssOutput += `${style_to_string(ssIframe, props)}\n`;
  }
  if (ssNotIframe && !deviceInfo?.inIframe) {
    ssOutput += `${style_to_string(ssNotIframe, props)}\n`;
  }
  if (ssWebview && deviceInfo?.inWebview) {
    ssOutput += `${style_to_string(ssWebview, props)}\n`;
  }
  if (ssNotWebview && !deviceInfo?.inWebview) {
    ssOutput += `${style_to_string(ssNotWebview, props)}\n`;
  }
  // ssOutput += `\n}\n`;

  // add global variants, with lower specificity
  ssOutput += ssExtra;
  ssOutput = ssOutput.replace(/label:(.*?);/g, '').replace(/([;]+)/g, ';');

  /*
   *
   * Return component and props/attributes
   *
   */
  props['data-variants'] = props['data-variants'];
  props.className =
    (props.className ? props.className + ' ' : '') + componentName;
  if (color) {
    props.className += ' colors-' + color;
  }
  let styledFunction = styledWithEmotion[tagName];
  if (typeof styledFunction !== 'function') {
    cconsole.warn(`styled.${tagName} was not found. Using instead styled.div`);
    styledFunction = styledWithEmotion.div;
  }
  // apply styles
  const styledComponent = styledFunction`
    ${ssOutput}
  `;
  // return
  return [styledComponent, props];
};
