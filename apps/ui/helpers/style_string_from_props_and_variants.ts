import style_to_string from '@ps/fn/browser/style/style_to_string';
import { ssProp } from '@ps/ui/types/styles';

type Props = {
  /*
   * All the props that were passed to your component. Style props are prefixed with "ss". Also variant, textcolor, bgcolor, textgradient, bggradien,.
   */
  props: any;
  /*
   * Object of Emotion styles. Each value can be css``, array of css``, or a function that returns css``.
   * This can also be strings instead of css``. For convenience: string, strings[], (props)=>string.
   */
  variants?: Record<string, ssProp>;
};

/**
 * This is a helper function that returns a modified props object. It does not change the original props object.
 * This removes all the props unique to this library styling-system like `ss`, `ssLg`, `ssDesktop`, `ssMobile`.
 */
export default ({ props, variants }: Props): string => {
  const {
    theme,
    variant,
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
  let ssDefault = '';
  let ssVariants = '';
  let ssInline = '';

  // variants
  // style functions/objects
  if (variants) {
    if (variants.default) {
      ssDefault += style_to_string(variants.default, props);
    }
    if (variant && variants[variant]) {
      ssVariants += style_to_string(variants[variant], props);
    }
  }

  // inline styles and media queries
  if (ss) {
    ssInline += `\n${style_to_string(ss, props)}\n`;
  }
  if (ssAll) {
    ssInline += `${theme.mq.all} { ${style_to_string(ssAll, props)} }\n`;
  }
  if (ssLg) {
    ssInline += `${theme.mq.lg} { ${style_to_string(ssLg, props)} }\n`;
  }
  if (ssSm) {
    ssInline += `${theme.mq.sm} { ${style_to_string(ssSm, props)} }\n`;
  }
  if (ssDesktop) {
    ssInline += `${theme.mq.desktop} { ${style_to_string(
      ssDesktop,
      props
    )} }\n`;
  }
  if (ssMobile) {
    ssInline += `${theme.mq.mobile} { ${style_to_string(ssMobile, props)} }\n`;
  }
  if (ssTablet) {
    ssInline += `${theme.mq.tablet} { ${style_to_string(ssTablet, props)} }\n`;
  }
  if (ssLargeTablet) {
    ssInline += `${theme.mq.largeTablet} { ${style_to_string(
      ssLargeTablet,
      props
    )} }\n`;
  }
  if (ssNotPhone) {
    ssInline += `${theme.mq.notPhone} { ${style_to_string(
      ssNotPhone,
      props
    )} }\n`;
  }
  if (ssPhone) {
    ssInline += `${theme.mq.phone} { ${style_to_string(ssPhone, props)} }\n`;
  }
  if (ssSmallPhone) {
    ssInline += `${theme.mq.smallPhone} { ${style_to_string(
      ssSmallPhone,
      props
    )} }\n`;
  }
  if (ssTinyPhone) {
    ssInline += `${theme.mq.tinyPhone} { ${style_to_string(
      ssTinyPhone,
      props
    )} }\n`;
  }
  if (ssLargeDesktop) {
    ssInline += `${theme.mq.largeDesktop} { ${style_to_string(
      ssLargeDesktop,
      props
    )} }\n`;
  }
  if (ssVeryLargeDesktop) {
    ssInline += `${theme.mq.veryLargeDesktop} { ${style_to_string(
      ssVeryLargeDesktop,
      props
    )} }\n`;
  }
  if (ssPortrait) {
    ssInline += `${theme.mq.portrait} { ${style_to_string(
      ssPortrait,
      props
    )} }\n`;
  }
  if (ssLandscape) {
    ssInline += `${theme.mq.landscape} { ${style_to_string(
      ssLandscape,
      props
    )} }\n`;
  }

  /*
   * Make the StyledComponent to return
   */
  const styleString = `
    ${ssDefault};
    ${ssVariants};
    ${ssInline};
  `;

  // Cleanup used props that should not go on the DOM element
  delete props.variant;
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
