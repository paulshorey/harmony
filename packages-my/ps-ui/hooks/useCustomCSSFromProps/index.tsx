import { css } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';
import { CustomCSSProps } from '@ps/ui/components/types';
import useDeviceInfo from '@ps/ui/hooks/useDeviceInfo';
import vars from '@ps/ui/styles/vars';
// import { useState } from 'react';

type Props = CustomCSSProps;

const useOpen = ({
  cssAndroid = '',
  cssDesktop = '',
  cssIPad = '',
  cssIPhone = '',
  cssIframe = '',
  cssLandscape = '',
  cssLargeDesktop = '',
  cssLargeTablet = '',
  cssLg = '',
  cssLinux = '',
  cssMac = '',
  cssMobile = '',
  cssNotIframe = '',
  cssNotPhone = '',
  cssNotWebview = '',
  cssPhone = '',
  cssPortrait = '',
  cssSm = '',
  cssSmallPhone = '',
  cssTablet = '',
  cssTinyPhone = '',
  cssVeryLargeDesktop = '',
  cssWebview = '',
  cssWindows = '',
  ...otherProps
}: Props) => {
  // const [outputCSS, set_outputCSS] = useState<boolean>(
  //   Boolean(props?.outputCSS)
  // );

  const deviceInfo =
    cssIframe ||
    cssNotIframe ||
    cssWebview ||
    cssNotWebview ||
    cssIPhone ||
    cssIPad ||
    cssMac ||
    cssWindows ||
    cssLinux ||
    cssAndroid
      ? useDeviceInfo()
      : undefined;

  const outputCSS = css`
    /* Must wrap the custom styles in &.Div {} to make specificity more important than default props.css. */
    &.Div {
      ${cssIframe &&
      `
      ${
        deviceInfo?.inIframe &&
        `
        ${emotionToString(cssIframe)}
      `
      }
      `}
      ${cssNotIframe &&
      `
        ${
          !deviceInfo?.inIframe &&
          `
          ${emotionToString(cssNotIframe)}
        `
        }
        `}
    ${cssWebview &&
      `
    ${
      deviceInfo?.inWebview &&
      `
      ${emotionToString(cssWebview)}
    `
    }
    `}
    ${cssNotWebview &&
      `
    ${
      !deviceInfo?.inWebview &&
      `
      ${emotionToString(cssNotWebview)}
    `
    }
    `}
    ${cssMac &&
      `
    ${
      deviceInfo?.device === 'Mac' &&
      `
      ${emotionToString(cssMac)}
    `
    }
    `}
    ${cssWindows &&
      `
    ${
      deviceInfo?.device === 'Windows' &&
      `
      ${emotionToString(cssWindows)}
    `
    }
    `}
    ${cssLinux &&
      `
    ${
      deviceInfo?.device === 'Linux' &&
      `
      ${emotionToString(cssLinux)}
    `
    }
    `}
    ${cssAndroid &&
      `
    ${
      deviceInfo?.device === 'Android' &&
      `
      ${emotionToString(cssAndroid)}
    `
    }
    `}
    ${cssIPad &&
      `
    ${
      deviceInfo?.device === 'iOS' &&
      `
      ${emotionToString(cssIPad)}
    `
    }
    `}
    ${cssIPhone &&
      `
    ${
      deviceInfo?.device === 'iPhone' &&
      `
      ${emotionToString(cssIPhone)}
    `
    }
    `}

    ${cssLg &&
      `
    ${vars.mq.lg} {
      ${emotionToString(cssLg)}
    }
    `}
    ${cssSm &&
      `
    ${vars.mq.sm} {
      ${emotionToString(cssSm)}
    }
    `}
    ${cssDesktop &&
      `
    ${vars.mq.desktop} {
      ${emotionToString(cssDesktop)}
    }
    `}
    ${cssMobile &&
      `
    ${vars.mq.mobile} {
      ${emotionToString(cssMobile)}
    }
    `}
    ${cssTablet &&
      `
    ${vars.mq.tablet} {
      ${emotionToString(cssTablet)}
    }
    `}
    ${cssLargeTablet &&
      `
    ${vars.mq.largeTablet} {
      ${emotionToString(cssLargeTablet)}
    }
    `}
    ${cssNotPhone &&
      `
    ${vars.mq.notPhone} {
      ${emotionToString(cssNotPhone)}
    }
    `}
    ${cssPhone &&
      `
    ${vars.mq.phone} {
      ${emotionToString(cssPhone)}
    }
    `}
    ${cssSmallPhone &&
      `
    ${vars.mq.smallPhone} {
      ${emotionToString(cssSmallPhone)}
    }
    `}
    ${cssTinyPhone &&
      `
    ${vars.mq.tinyPhone} {
      ${emotionToString(cssTinyPhone)}
    }
    `}
    ${cssLargeDesktop &&
      `
    ${vars.mq.largeDesktop} {
      ${emotionToString(cssLargeDesktop)}
    }
    `}
    ${cssVeryLargeDesktop &&
      `
    ${vars.mq.veryLargeDesktop} {
      ${emotionToString(cssVeryLargeDesktop)}
    }
    `}
    ${cssPortrait &&
      `
    ${vars.mq.portrait} {
      ${emotionToString(cssPortrait)}
    }
    `}
    ${cssLandscape &&
      `
    ${vars.mq.landscape} {
      ${emotionToString(cssLandscape)}
    }
    `}
    }
  `;

  return {
    outputCSS,
    otherProps,
  };
};

export default useOpen;
