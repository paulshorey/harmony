import { css } from '@emotion/react';
import vars from 'src/styles/vars';
import emotionToString from 'src/helpers/emotionToString';

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css). Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic. However, styled-system is ok for simply styled or internal apps, and was an important inspiration for this.
 *
 * Soon, this will be improved with Typescript. This `Div` will inherit types from `React.FC<HTMLDivElement>`. Other building blocks may be added, like `features/layout/atoms/Input` inheriting defaults from `React.FC<HTMLInputElement>`.
 *
 * SPECIFICITY - is very important to styling web elements. Here's how it works here, from least to most important:
 * 1. props.css - this is the standard Emotion prop. It will be overridden by any other custom style prop.
 * 2. props.cssLg
 * 3. props.cssSm
 * 4. props.cssDesktop
 * 5. props.cssPhone
 * 6. props.smallPhone
 * 7. props.style - this still works, just like in any HTML element. This will override all other style props.
 * STANDARD CSS SPECIFICITY RULES still apply.
 * 
  // iPad 12inch viewport = 1024 x 1366
  // iPad 9inch viewport = 768 x 1024
  // iPad Mini viewport = 768 x 1024
  // iPhone 8Plus, X, and larger models have landscape width >= 736px
 */
const Div = React.forwardRef(
  (
    {
      as = 'div',
      // css prop accepted by default. It's automatically transformed into className by Emotion. Must wrap in css().
      // custom props below accept a simple string type. You don't have to wrap them in Emotion's css`` or css().
      cssSmallPhone = '', // extra narrow devices like iPhone 8/X/SE ( <= 400px wide )
      cssPhone = '', // phones only, not tablets ( <= 500px wide )
      cssNotPhone = '', // ( >= 501px wide )
      cssSm = '', // phones and a few small Android tablets ( <= 930px wide )
      cssLg = '', // ( >= 931px wide )
      cssMd = '', // same as cssTablet
      cssTablet = '', // includes iPad-12 portrait and iPad-9 landscape or portrait ( >= 737px wide, <= 1024px wide )
      cssLargeTablet = '', // the very awkward size where we no longer support the mobile design, but it feels big enough to maybe be desktop ( >= 931px wide, <= 1024px wide )
      cssMobile = '', // ( <= 1024px wide )
      cssDesktop = '', // includes iPad-12 landscape, EXcludes iPad-12 portrait and smaller ( >= 1025px wide )
      className = '',
      ref, // ignored, instead caught by React.forwardRef 2nd argument refFromParent
      ...props
    },
    refFromParent
  ) => {
    const TagName = `${as}`;
    return (
      <TagName
        ref={refFromParent}
        className={`Div ${className ? ' ' + className : ''}`}
        {...props}
        css={css`
          &.Div {
            ${vars.mq.lg} {
              ${emotionToString(cssLg)}
            }
            ${vars.mq.sm} {
              ${emotionToString(cssSm)}
            }

            ${vars.mq.desktop} {
              ${emotionToString(cssDesktop)}
            }
            ${vars.mq.mobile} {
              ${emotionToString(cssMobile)}
            }
            ${vars.mq.tablet} {
              ${emotionToString(cssTablet)}
            }
            ${vars.mq.largeTablet} {
              ${emotionToString(cssLargeTablet)}
            }

            ${vars.mq.notPhone} {
              ${emotionToString(cssNotPhone)}
            }
            ${vars.mq.phone} {
              ${emotionToString(cssPhone)}
            }
            ${vars.mq.smallPhone} {
              ${emotionToString(cssSmallPhone)}
            }
          }
        `}
      />
    );
  }
);

export default Div;
