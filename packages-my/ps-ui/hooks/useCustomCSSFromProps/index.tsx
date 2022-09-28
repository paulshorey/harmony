import { css } from '@emotion/react';
import emotionToString from '@ps/fn/browser/style/emotion_to_string';
import { CustomCSSProps, EmotionCSSType } from '@ps/ui/components/types';
import useDeviceInfo from '@ps/ui/hooks/useDeviceInfo';
import vars from '@ps/ui/styles/vars';

type Props = CustomCSSProps;
type Output = {
  otherProps: Record<string, any>;
  mqFromProps: EmotionCSSType;
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
  // const [mqFromProps, set_cssFromProps] = useState<boolean>(
  //   Boolean(props?.mqFromProps)
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

  const mqFromProps = css`
    /* Must wrap the custom styles in &.Div {} to make specificity more important than default props.css. */
    &.Div {
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
    ${vars.mq.lg} {
      ${emotionToString(mqLg)}
    }
    `}
    ${mqSm &&
      `
    ${vars.mq.sm} {
      ${emotionToString(mqSm)}
    }
    `}
    ${mqDesktop &&
      `
    ${vars.mq.desktop} {
      ${emotionToString(mqDesktop)}
    }
    `}
    ${mqMobile &&
      `
    ${vars.mq.mobile} {
      ${emotionToString(mqMobile)}
    }
    `}
    ${mqTablet &&
      `
    ${vars.mq.tablet} {
      ${emotionToString(mqTablet)}
    }
    `}
    ${mqLargeTablet &&
      `
    ${vars.mq.largeTablet} {
      ${emotionToString(mqLargeTablet)}
    }
    `}
    ${mqNotPhone &&
      `
    ${vars.mq.notPhone} {
      ${emotionToString(mqNotPhone)}
    }
    `}
    ${mqPhone &&
      `
    ${vars.mq.phone} {
      ${emotionToString(mqPhone)}
    }
    `}
    ${mqSmallPhone &&
      `
    ${vars.mq.smallPhone} {
      ${emotionToString(mqSmallPhone)}
    }
    `}
    ${mqTinyPhone &&
      `
    ${vars.mq.tinyPhone} {
      ${emotionToString(mqTinyPhone)}
    }
    `}
    ${mqLargeDesktop &&
      `
    ${vars.mq.largeDesktop} {
      ${emotionToString(mqLargeDesktop)}
    }
    `}
    ${mqVeryLargeDesktop &&
      `
    ${vars.mq.veryLargeDesktop} {
      ${emotionToString(mqVeryLargeDesktop)}
    }
    `}
    ${mqPortrait &&
      `
    ${vars.mq.portrait} {
      ${emotionToString(mqPortrait)}
    }
    `}
    ${mqLandscape &&
      `
    ${vars.mq.landscape} {
      ${emotionToString(mqLandscape)}
    }
    `}
    }
  `;

  return {
    mqFromProps,
    otherProps,
  };
};

export default useOpen;
