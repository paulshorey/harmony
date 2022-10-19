import { forwardRef, memo, ReactElement, useEffect, useState } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import React from 'react';
import Box from '@ps/ui/components/content/Box';
import { Props as BoxProps } from '@ps/ui/components/content/Box';
import { useInView } from 'react-cool-inview';
import { tsFix } from '@ps/ui/types/typescript';
import variants from './variants';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';

const isBetween = (value: number, min: number, max: number) =>
  value && value >= min && value <= max;

const styles = {
  container: (theme: tsFix, { slideInFrom, visible }: tsFix) =>
    `
      position: relative;

      ${
        visible
          ? `
          transition: opacity 0.5s ease-out, ${slideInFrom} 0.5s ease-out;
          ${slideInFrom}: 0;
          opacity: 1;
        `
          : `
          transition: opacity 1s ease-in, ${slideInFrom} 0.5s ease-in 0.5s;
          ${slideInFrom}: -25%;
          opacity: 0;
      `
      }
    `,
};
export type Props = BoxProps & {
  slideInFrom?: 'left' | 'right';
  // visibleInitially?: boolean;
};

export const Component: (props: Props, ref: any) => ReactElement = (
  {
    as = 'div',
    children,
    className = '',
    slideInFrom = 'right',
    // visibleInitially = false,
    ...props
  }: Props,
  ref: any
) => {
  const [Styled, otherProps] = useStyledComponent(
    props,
    as === 'span' ? 'span' : 'div',
    'ScrollSlideIn',
    variants
  );

  let enterLeaveTimeout: ReturnType<typeof setTimeout>;
  const ref1 = React.createRef<any>(); // react ref type
  const [disabled, set_disabled] = useState(false);
  // observe
  // BY DEFAULT, all are visible, to prevent any SEO issues with bots and for people with JavaScript disabled
  const [visible, set_visible] = useState(true);
  const { observe: ref2 } = useInView({
    onEnter: () => {
      if (disabled) {
        return;
      }
      clearTimeout(enterLeaveTimeout);
      enterLeaveTimeout = setTimeout(() => {
        set_visible(true);
      }, 50);
    },
    onLeave: () => {
      if (disabled) {
        return;
      }
      clearTimeout(enterLeaveTimeout);
      enterLeaveTimeout = setTimeout(() => {
        set_visible(false);
      }, 50);
    },
  });
  useEffect(() => {
    // disable for Search Engines, QA, LightHouse test, and other bots
    const disableForBots = null;
    // get_query_param('qaStatic') ||
    // /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(
    //   window.navigator.userAgent
    // );
    if (disableForBots && disableForBots !== null) {
      // disabled
      set_visible(true);
      set_disabled(true);
    } else {
      // if enabled, then
      // hide all elements that are not in view
      // must do this manually, because useInView only works reliably for onEnter/onLeave, not actually inView
      if (ref1?.current && ref1.current?.getBoundingClientRect) {
        const rect = ref1.current.getBoundingClientRect();
        if (rect && rect.top && rect.left && rect.bottom && rect.right) {
          if (
            isBetween(rect.top, 0, window.innerHeight) &&
            isBetween(rect.bottom, 0, window.innerHeight) &&
            isBetween(rect.left, 0, window.innerWidth) &&
            isBetween(rect.right, 0, window.innerWidth)
          ) {
            // in viewport
            set_visible(true);
          } else {
            // not in view
            set_visible(false);
          }
        }
      }
    }
  }, []);
  return (
    <Box
      as={as}
      variant="bgGradient"
      ss={styles.container(visible, slideInFrom)}
      className={`${visible ? 'visible' : 'hidden'} ${className}`}
      ref={ref1}
    >
      <Styled ref={ref2} {...otherProps}>
        {children}
      </Styled>
    </Box>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withScrollSlideIn } from 'components/content/ScrollSlideIn';
 * const ScrollSlideIn = withScrollSlideIn({ ...thesePropsWillApplyToAllInstances });
 * <ScrollSlideIn {...optionalUniquePropsForCurrentInstance} />
 */
export const withScrollSlideIn = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(ScrollSlideIn, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "ScrollSlideIn" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const ScrollSlideIn = memo(forwardRef(Component));
export default ScrollSlideIn;
