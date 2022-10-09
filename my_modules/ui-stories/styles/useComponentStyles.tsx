import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import style_to_string from "@ps/fn/browser/style/style_to_string";
// import obj_clone from '@ps/fn/io/obj/obj_clone';
// import obj_add from '@ps/fn/io/obj/obj_add';
import { returnDeviceInfo, deviceInfoType } from "@/hooks/useDeviceInfo";
import { useEffect, useState } from "react";
import {
  ssComponentPropsType,
  htmlContainerTags, // or maybe React.ElementType ?
  cssPropType,
  ssPropType,
} from "@/types/component";
// import { useEffect } from 'react';

/**
 * This is a HOC. It wraps any component in this library. Only for use with components in this library.
 * It takes all the custom ss props, plus styles, variants, css, and aggregates them into one css prop.
 */
export default (
  props: ssComponentPropsType,
  name: string,
  styles?: Record<string, ssPropType | cssPropType> // obj - style for each variant - Record<VariantKey, StyleString | FunctionThatReturnsString>
) => {
  let {
    // className = '',
    color = "",
    shade = "",
    size = "",
    onDark = false,
    onLight = false,
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
    "data-variants": dataVariants = "",
    ...otherProps
  } = props;
  /*
   *
   * theme.instance
   *
   */
  const theme: theme = useTheme(); // style() 1st argument
  props.theme = theme;
  // Many components extend another component (by returning a modified version of it).
  // In those cases, the final HTML/DOM element will have run through this function multiple times.
  // It will be sequential. Child after parent. So, keep the previous theme instance and add to it.

  if (!dataVariants) {
    // In @emotion/styled function, first argument is props.
    // Replicate that functionality, but without all these extra ss props.
    props.instance = {
      variants: { default: true },
      // @ts-ignore // checking if value exists for color
      color: ((color && !!theme.colors[color] && color) || "") + "",
      size,
      shade,
    }; // style() 2nd argument
  }
  let ssOutput = ""; // will be wrapped in `` before being passed to component props.css. High specificity.
  let ssExtra = ""; // global variants. Not sure it's a good idea to include. But might be useful. Low specificity.

  /*
   *
   * Variants
   *
   */
  if (styles) {
    const variantStrs = variant?.trim().split(/[^\w\d-_]+/) || [];
    // add tag name as a variant
    // not ready yet! it doesn't work if not explicitly passed (need to add Component's default like 'button' or 'input')
    // if (as) {
    // // @ts-ignore // was undefined, now defining it, so whats the problem?
    // theme.instance.variants[as] = true;
    // }
    if (name) {
      // @ts-ignore // was undefined, now defining it, so whats the problem?
      theme.instance.variants[name] = true;
    }
    if (props.hasOwnProperty("disabled")) {
      // @ts-ignore // was undefined, now defining it, so whats the problem?
      theme.instance.variants.disabled = true;
    }
    // props.variant (strings separated by spaces or any other illegal characters)
    if (variantStrs.length) {
      for (const str of variantStrs) {
        // @ts-ignore // was undefined, now defining it, so whats the problem?
        theme.instance.variants[str] = true;
      }
    }
    // props.variants (string[])
    if (variants?.length) {
      for (const str of variants) {
        // @ts-ignore // was undefined, now defining it, so whats the problem?
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
  dataVariants = theme.instance.variants ? Object.keys(theme.instance.variants).join("-") : "";
  if (shade) {
    dataVariants += "-" + shade;
  }
  if (color) {
    dataVariants += "-" + color;
  }

  // ssOutput += `\n&[data-variants="${dataVariants}"] {\n`;

  /*
   *
   * Media Queries
   *
   */
  // For each device and size, add a media query (but only if custom style for it is specified)
  const checkDeviceInfo = ssIframe || ssNotIframe || ssWebview || ssNotWebview || ssIPhone || ssIPad || ssMac || ssWindows || ssLinux || ssAndroid;

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
    ssOutput += `${theme.mq.desktop} { ${style_to_string(ssDesktop, props)} }\n`;
  }
  if (ssMobile) {
    ssOutput += `${theme.mq.mobile} { ${style_to_string(ssMobile, props)} }\n`;
  }
  if (ssTablet) {
    ssOutput += `${theme.mq.tablet} { ${style_to_string(ssTablet, props)} }\n`;
  }
  if (ssLargeTablet) {
    ssOutput += `${theme.mq.largeTablet} { ${style_to_string(ssLargeTablet, props)} }\n`;
  }
  if (ssNotPhone) {
    ssOutput += `${theme.mq.notPhone} { ${style_to_string(ssNotPhone, props)} }\n`;
  }
  if (ssPhone) {
    ssOutput += `${theme.mq.phone} { ${style_to_string(ssPhone, props)} }\n`;
  }
  if (ssSmallPhone) {
    ssOutput += `${theme.mq.smallPhone} { ${style_to_string(ssSmallPhone, props)} }\n`;
  }
  if (ssTinyPhone) {
    ssOutput += `${theme.mq.tinyPhone} { ${style_to_string(ssTinyPhone, props)} }\n`;
  }
  if (ssLargeDesktop) {
    ssOutput += `${theme.mq.largeDesktop} { ${style_to_string(ssLargeDesktop, props)} }\n`;
  }
  if (ssVeryLargeDesktop) {
    ssOutput += `${theme.mq.veryLargeDesktop} { ${style_to_string(ssVeryLargeDesktop, props)} }\n`;
  }
  if (ssPortrait) {
    ssOutput += `${theme.mq.portrait} { ${style_to_string(ssPortrait, props)} }\n`;
  }
  if (ssLandscape) {
    ssOutput += `${theme.mq.landscape} { ${style_to_string(ssLandscape, props)} }\n`;
  }
  if (ssMac) {
    ssOutput += `${deviceInfo?.device === "Mac" && `${style_to_string(ssMac, props)}`}\n`;
  }
  if (ssWindows) {
    ssOutput += `${deviceInfo?.device === "Windows" && `${style_to_string(ssWindows, props)}`}\n`;
  }
  if (ssLinux) {
    ssOutput += `${deviceInfo?.device === "Linux" && `${style_to_string(ssLinux, props)}`}\n`;
  }
  if (ssAndroid) {
    ssOutput += `${deviceInfo?.device === "Android" && `${style_to_string(ssAndroid, props)}`}\n`;
  }
  if (ssIPad) {
    ssOutput += `${deviceInfo?.device === "iOS" && `${style_to_string(ssIPad, props)}`}\n`;
  }
  if (ssIPhone) {
    ssOutput += `${deviceInfo?.device === "iPhone" && `${style_to_string(ssIPhone, props)}`}\n`;
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

  ssOutput += ssExtra;
  ssOutput = ssOutput.replace(/label:(.*?);/g, "").replace(/([;]+)/g, ";");

  /*
   *
   * Return component with props applied
   *
   */
  return [ssOutput, otherProps];
};
