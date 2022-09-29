import { css } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';
import useDeviceInfo from '@ps/ui/hooks/useDeviceInfo';
import theme from '@ps/ui/styles/theme'; // fixTheme
import { CustomCSSProps, EmotionCSSType } from '@ps/ui/types/component';

type Props = CustomCSSProps;
type Output = {
  otherProps: Record<string, any>;
  cssFromProps: EmotionCSSType;
};

const useOpen = ({
  mqAndroid = '',
  mqDesktop = '',
  mqIPad = '',
  mqIPhone = '',
  mqIframe = '',
  mqLandscape = '',
  mqLargeDesktop = '',
  mqLargeTablet = '',
  mqLg = '',
  mqLinux = '',
  mqMac = '',
  mqMobile = '',
  mqNotIframe = '',
  mqNotPhone = '',
  mqNotWebview = '',
  mqPhone = '',
  mqPortrait = '',
  mqSm = '',
  mqSmallPhone = '',
  mqTablet = '',
  mqTinyPhone = '',
  mqVeryLargeDesktop = '',
  mqWebview = '',
  mqWindows = '',
  ...otherProps
}: Props): Output => {
  // const [cssFromProps, set_cssFromProps] = useState<boolean>(
  //   Boolean(props?.cssFromProps)
  // );

  const deviceInfo =
    mqIframe ||
    mqNotIframe ||
    mqWebview ||
    mqNotWebview ||
    mqIPhone ||
    mqIPad ||
    mqMac ||
    mqWindows ||
    mqLinux ||
    mqAndroid
      ? useDeviceInfo()
      : undefined;

  const cssFromProps = css`
    /* Must wrap the custom styles in &.Block {} to make specificity more important than default Emotion props.css. */
    & {
      ${mqIframe &&
      `
      ${
        deviceInfo?.inIframe &&
        `
        ${emotionToString(mqIframe)}
      `
      }
      `}
      ${mqNotIframe &&
      `
        ${
          !deviceInfo?.inIframe &&
          `
          ${emotionToString(mqNotIframe)}
        `
        }
        `}
    ${mqWebview &&
      `
    ${
      deviceInfo?.inWebview &&
      `
      ${emotionToString(mqWebview)}
    `
    }
    `}
    ${mqNotWebview &&
      `
    ${
      !deviceInfo?.inWebview &&
      `
      ${emotionToString(mqNotWebview)}
    `
    }
    `}
    ${mqMac &&
      `
    ${
      deviceInfo?.device === 'Mac' &&
      `
      ${emotionToString(mqMac)}
    `
    }
    `}
    ${mqWindows &&
      `
    ${
      deviceInfo?.device === 'Windows' &&
      `
      ${emotionToString(mqWindows)}
    `
    }
    `}
    ${mqLinux &&
      `
    ${
      deviceInfo?.device === 'Linux' &&
      `
      ${emotionToString(mqLinux)}
    `
    }
    `}
    ${mqAndroid &&
      `
    ${
      deviceInfo?.device === 'Android' &&
      `
      ${emotionToString(mqAndroid)}
    `
    }
    `}
    ${mqIPad &&
      `
    ${
      deviceInfo?.device === 'iOS' &&
      `
      ${emotionToString(mqIPad)}
    `
    }
    `}
    ${mqIPhone &&
      `
    ${
      deviceInfo?.device === 'iPhone' &&
      `
      ${emotionToString(mqIPhone)}
    `
    }
    `}

    ${mqLg &&
      `
    ${theme.mq.lg} {
      ${emotionToString(mqLg)}
    }
    `}
    ${mqSm &&
      `
    ${theme.mq.sm} {
      ${emotionToString(mqSm)}
    }
    `}
    ${mqDesktop &&
      `
    ${theme.mq.desktop} {
      ${emotionToString(mqDesktop)}
    }
    `}
    ${mqMobile &&
      `
    ${theme.mq.mobile} {
      ${emotionToString(mqMobile)}
    }
    `}
    ${mqTablet &&
      `
    ${theme.mq.tablet} {
      ${emotionToString(mqTablet)}
    }
    `}
    ${mqLargeTablet &&
      `
    ${theme.mq.largeTablet} {
      ${emotionToString(mqLargeTablet)}
    }
    `}
    ${mqNotPhone &&
      `
    ${theme.mq.notPhone} {
      ${emotionToString(mqNotPhone)}
    }
    `}
    ${mqPhone &&
      `
    ${theme.mq.phone} {
      ${emotionToString(mqPhone)}
    }
    `}
    ${mqSmallPhone &&
      `
    ${theme.mq.smallPhone} {
      ${emotionToString(mqSmallPhone)}
    }
    `}
    ${mqTinyPhone &&
      `
    ${theme.mq.tinyPhone} {
      ${emotionToString(mqTinyPhone)}
    }
    `}
    ${mqLargeDesktop &&
      `
    ${theme.mq.largeDesktop} {
      ${emotionToString(mqLargeDesktop)}
    }
    `}
    ${mqVeryLargeDesktop &&
      `
    ${theme.mq.veryLargeDesktop} {
      ${emotionToString(mqVeryLargeDesktop)}
    }
    `}
    ${mqPortrait &&
      `
    ${theme.mq.portrait} {
      ${emotionToString(mqPortrait)}
    }
    `}
    ${mqLandscape &&
      `
    ${theme.mq.landscape} {
      ${emotionToString(mqLandscape)}
    }
    `}
    }
  `;

  return {
    cssFromProps,
    otherProps,
  };
};

export default useOpen;
