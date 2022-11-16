import style_to_string from '@ps/fn/browser/style/style_to_string';
import { styleProps } from '@ps/ui/types/styles';

type Props = {
  /*
   * All the props that were passed to your component. Style props are prefixed with "ss".
   */
  props: styleProps;
};

export default ({ props }: Props): string => {
  const {
    theme,
    ss,
    ssAll,
    ssDesktop,
    ssLandscape,
    ssLargeDesktop,
    ssLargeTablet,
    ssLg,
    ssMobile,
    ssNotPhone,
    ssPhone,
    ssPortrait,
    ssSm,
    ssSmallPhone,
    ssTablet,
    ssTinyPhone,
    ssVeryLargeDesktop,
  } = props;

  // styled strings
  let styleString = '';

  // inline styles and media queries
  if (ss) {
    styleString += `\n${style_to_string(ss, props)}\n`;
  }
  if (ssAll) {
    styleString += `${theme.ss.all} { ${style_to_string(ssAll, props)} }\n`;
  }
  if (ssLg) {
    styleString += `${theme.ss.lg} { ${style_to_string(ssLg, props)} }\n`;
  }
  if (ssSm) {
    styleString += `${theme.ss.sm} { ${style_to_string(ssSm, props)} }\n`;
  }
  if (ssDesktop) {
    styleString += `${theme.ss.desktop} { ${style_to_string(
      ssDesktop,
      props
    )} }\n`;
  }
  if (ssMobile) {
    styleString += `${theme.ss.mobile} { ${style_to_string(
      ssMobile,
      props
    )} }\n`;
  }
  if (ssTablet) {
    styleString += `${theme.ss.tablet} { ${style_to_string(
      ssTablet,
      props
    )} }\n`;
  }
  if (ssLargeTablet) {
    styleString += `${theme.ss.largeTablet} { ${style_to_string(
      ssLargeTablet,
      props
    )} }\n`;
  }
  if (ssNotPhone) {
    styleString += `${theme.ss.notPhone} { ${style_to_string(
      ssNotPhone,
      props
    )} }\n`;
  }
  if (ssPhone) {
    styleString += `${theme.ss.phone} { ${style_to_string(ssPhone, props)} }\n`;
  }
  if (ssSmallPhone) {
    styleString += `${theme.ss.smallPhone} { ${style_to_string(
      ssSmallPhone,
      props
    )} }\n`;
  }
  if (ssTinyPhone) {
    styleString += `${theme.ss.tinyPhone} { ${style_to_string(
      ssTinyPhone,
      props
    )} }\n`;
  }
  if (ssLargeDesktop) {
    styleString += `${theme.ss.largeDesktop} { ${style_to_string(
      ssLargeDesktop,
      props
    )} }\n`;
  }
  if (ssVeryLargeDesktop) {
    styleString += `${theme.ss.veryLargeDesktop} { ${style_to_string(
      ssVeryLargeDesktop,
      props
    )} }\n`;
  }
  if (ssPortrait) {
    styleString += `${theme.ss.portrait} { ${style_to_string(
      ssPortrait,
      props
    )} }\n`;
  }
  if (ssLandscape) {
    styleString += `${theme.ss.landscape} { ${style_to_string(
      ssLandscape,
      props
    )} }\n`;
  }

  // Cleanup used props that should not go on the DOM element
  delete props.ss;
  delete props.ssAll;
  delete props.ssDesktop;
  delete props.ssLandscape;
  delete props.ssLargeDesktop;
  delete props.ssLargeTablet;
  delete props.ssLg;
  delete props.ssMobile;
  delete props.ssNotPhone;
  delete props.ssPhone;
  delete props.ssPortrait;
  delete props.ssSm;
  delete props.ssSmallPhone;
  delete props.ssTablet;
  delete props.ssTinyPhone;
  delete props.ssVeryLargeDesktop;

  /*
   * return
   */
  return styleString;
};
