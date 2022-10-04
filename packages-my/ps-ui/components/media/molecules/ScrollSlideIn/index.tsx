/* eslint-disable max-depth */

import Block, { Props as BlockProps } from 'components/content/atoms/Block';
import withStyles from 'styles/withStyles';
import React, { memo, useEffect, useState } from 'react';
import { useInView } from 'react-cool-inview';
import { tsFix } from 'types/typescript';
import variants from '../../../content/organisms/Modal/variants';
import objects_add_values from '@ps/fn/io/objects/objects_add_values';

const isBetween = (value: number, min: number, max: number) =>
  value && value >= min && value <= max;

const styles = {
  default: (theme: tsFix, { slideInFrom, visible }: tsFix) =>
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
export type Props = BlockProps & {
  slideInFrom?: 'left' | 'right';
  // visibleInitially?: boolean;
};

export const Component = ({
  as = 'div',
  children,
  className = '',
  slideInFrom = 'right',
  // visibleInitially = false,
  ...props
}: Props) => {
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
    <Block
      as={as}
      css={styles.default(visible, slideInFrom)}
      className={`${visible ? 'visible' : 'hidden'} ${className}`}
      ref={ref1}
    >
      <Block as={as === 'span' ? 'span' : 'div'} ref={ref2} {...props}>
        {children}
      </Block>
    </Block>
  );
};

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Modal', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withModal = (props1: Props) => (props2: Props) => {
  const props = objects_add_values(
    props1,
    props2,
    ';',
    ['children'],
    ['ss'],
    'props'
  );
  return <Default {...props} children={props2.children} />;
};

/**
 * Default export is ready to use: <Modal {...yourProps} />
 */
export default Default;
