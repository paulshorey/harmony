import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import style_to_string from '@ps/fn/browser/style/style_to_string';
import { returnDeviceInfo, deviceInfoType } from '@ps/ui/hooks/useDeviceInfo';
import { ssPropType, styledTags } from '@ps/ui/types/styles';
import styled from '@emotion/styled';
// import cconsole from '@ps/cconsole';
// import themeType from '@ps/ui/types/theme';

/**
 * This is a HOC. It wraps any component in this library. Only for use with components in this library.
 * It takes all the custom ss props, plus styles, variants, css, and aggregates them into one css prop.
 */
export default (
  inputProps: any,
  tagName: styledTags = 'div',
  componentName: string,
  variantStyles?: Record<string, ssPropType>,
  classStyles?: Record<string, string>
): [React.ElementType, Record<string, any>] => {
  const {
    textcolor = '',
    textgradient = '',
    bgcolor = '',
    bggradient = '',
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

  // className will be modified if using CSS modules
  if (!props.className) {
    props.className = '';
  }

  // theme
  // In @emotion/styled functions, first argument is props, which contains an injected theme property.
  // This library also includes that functionality. This also includes a bit of added functionality...
  // Style functions will be able to read not just the props and theme but also "instance" properties.
  const theme: any = useTheme(); // tsFix (causes notices when setting new properties, see @ps/ui/types/theme for types)
  if (typeof styled === 'undefined' || !styled?.div) {
    throw new Error(
      '@emotion/styled is not installed or is not recognized by Storybook.'
    );
  }
  // theme.instance
  // Extend the temporary theme.instance. If property already exists, do not overwrite it.
  // It may exist because some components in this library include a child component also from this library.
  // This hook is called for each component. Sometimes multiple nested components are combined to make one HTML element.
  if (!props['data-variants'] || !theme.instance) {
    props.theme = theme;
    props.theme.instance = { variants: {} };
  }
  // every component gets default variant style
  props.theme.instance.variants.default = true;

  // styled strings
  let ssVariants = '';
  let ssImportant = '';
  const ssGlobal = '';

  // variants
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
      if (variantStyles?.[variant]) {
        ssVariants += style_to_string(
          // @ts-ignore // styles[variant] is defined, so use it
          variantStyles[variant],
          props
        );
      }
      if (classStyles?.[variant]) {
        props.className += ' ' + classStyles[variant];
      }
      // // If component-specific style is not defined, apply a global style from theme
      // if (theme.variants[variant]) {
      //   ssGlobal += style_to_string(
      //     // @ts-ignore // theme.variants[variant] is defined, so use it
      //     theme.variants[variant],
      //     props
      //   );
      // }
    }
  }

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
    ssImportant += `\n${style_to_string(ss, props)}\n`;
  }
  if (ssAll) {
    ssImportant += `${theme.mq.all} { ${style_to_string(ssAll, props)} }\n`;
  }
  if (ssLg) {
    ssImportant += `${theme.mq.lg} { ${style_to_string(ssLg, props)} }\n`;
  }
  if (ssSm) {
    ssImportant += `${theme.mq.sm} { ${style_to_string(ssSm, props)} }\n`;
  }
  if (ssDesktop) {
    ssImportant += `${theme.mq.desktop} { ${style_to_string(
      ssDesktop,
      props
    )} }\n`;
  }
  if (ssMobile) {
    ssImportant += `${theme.mq.mobile} { ${style_to_string(
      ssMobile,
      props
    )} }\n`;
  }
  if (ssTablet) {
    ssImportant += `${theme.mq.tablet} { ${style_to_string(
      ssTablet,
      props
    )} }\n`;
  }
  if (ssLargeTablet) {
    ssImportant += `${theme.mq.largeTablet} { ${style_to_string(
      ssLargeTablet,
      props
    )} }\n`;
  }
  if (ssNotPhone) {
    ssImportant += `${theme.mq.notPhone} { ${style_to_string(
      ssNotPhone,
      props
    )} }\n`;
  }
  if (ssPhone) {
    ssImportant += `${theme.mq.phone} { ${style_to_string(ssPhone, props)} }\n`;
  }
  if (ssSmallPhone) {
    ssImportant += `${theme.mq.smallPhone} { ${style_to_string(
      ssSmallPhone,
      props
    )} }\n`;
  }
  if (ssTinyPhone) {
    ssImportant += `${theme.mq.tinyPhone} { ${style_to_string(
      ssTinyPhone,
      props
    )} }\n`;
  }
  if (ssLargeDesktop) {
    ssImportant += `${theme.mq.largeDesktop} { ${style_to_string(
      ssLargeDesktop,
      props
    )} }\n`;
  }
  if (ssVeryLargeDesktop) {
    ssImportant += `${theme.mq.veryLargeDesktop} { ${style_to_string(
      ssVeryLargeDesktop,
      props
    )} }\n`;
  }
  if (ssPortrait) {
    ssImportant += `${theme.mq.portrait} { ${style_to_string(
      ssPortrait,
      props
    )} }\n`;
  }
  if (ssLandscape) {
    ssImportant += `${theme.mq.landscape} { ${style_to_string(
      ssLandscape,
      props
    )} }\n`;
  }
  if (ssMac) {
    ssImportant += `${
      deviceInfo?.device === 'Mac' && `${style_to_string(ssMac, props)}`
    }\n`;
  }
  if (ssWindows) {
    ssImportant += `${
      deviceInfo?.device === 'Windows' && `${style_to_string(ssWindows, props)}`
    }\n`;
  }
  if (ssLinux) {
    ssImportant += `${
      deviceInfo?.device === 'Linux' && `${style_to_string(ssLinux, props)}`
    }\n`;
  }
  if (ssAndroid) {
    ssImportant += `${
      deviceInfo?.device === 'Android' && `${style_to_string(ssAndroid, props)}`
    }\n`;
  }
  if (ssIPad) {
    ssImportant += `${
      deviceInfo?.device === 'iOS' && `${style_to_string(ssIPad, props)}`
    }\n`;
  }
  if (ssIPhone) {
    ssImportant += `${
      deviceInfo?.device === 'iPhone' && `${style_to_string(ssIPhone, props)}`
    }\n`;
  }
  if (ssIframe && deviceInfo?.inIframe) {
    ssImportant += `${style_to_string(ssIframe, props)}\n`;
  }
  if (ssNotIframe && !deviceInfo?.inIframe) {
    ssImportant += `${style_to_string(ssNotIframe, props)}\n`;
  }
  if (ssWebview && deviceInfo?.inWebview) {
    ssImportant += `${style_to_string(ssWebview, props)}\n`;
  }
  if (ssNotWebview && !deviceInfo?.inWebview) {
    ssImportant += `${style_to_string(ssNotWebview, props)}\n`;
  }

  // cleanup classNames generated by Emotion
  // ssOutput = ssOutput.replace(/label:(.*?);/g, '').replace(/([;]+)/g, ';');

  /*
   * Modify props/attributes
   */
  props['data-variants'] = theme.instance.variants
    ? Object.keys(theme.instance.variants).join('-')
    : '';
  // will use this in CSS to target the component
  // props['data-component'] = componentName;
  props.className += ' ' + componentName;
  // color (put on data attribute to not clash with 3rd party classNames)
  if (bgcolor || bggradient) {
    props['data-bgcolor'] = bgcolor || bggradient;
    if (bggradient) {
      props['data-bggradient'] = true;
    }
  }
  if (textcolor || textgradient) {
    props['data-textcolor'] = textcolor || textgradient;
    if (textgradient) {
      props['data-textgradient'] = true;
    }
  }
  // set colorscheme
  if (props['data-textcolor'] === 'light') {
    props['data-colorscheme'] = 'ondark';
  } else if (props['data-textcolor'] === 'dark') {
    props['data-colorscheme'] = 'onlight';
  } else if (props['data-bgcolor'] === 'light') {
    props['data-colorscheme'] = 'onlight';
  } else if (props['data-bgcolor'] === 'dark') {
    props['data-colorscheme'] = 'ondark';
  }
  // return styled component
  let styledFunction = styled[tagName];
  if (typeof styledFunction !== 'function') {
    console.warn(`styled.${tagName} was not found. Using instead styled.div`);
    styledFunction = styled.div;
  }
  // apply styles
  const styledComponent = styledFunction`
    ${ssGlobal}
    ${ssVariants}
    &.${componentName} {
      ${ssImportant}
    }
  `;
  // return
  return [styledComponent, props];
};
