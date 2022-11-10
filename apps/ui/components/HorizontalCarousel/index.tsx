// @ts-nocheck
import React, { useEffect, forwardRef, memo } from 'react';
import HorizontalCarousel from './script';
import { Props as BlockProps } from '@ps/ui/components/Block';
import variants from './styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import { Props } from '../Inline/index';
import styled from '@emotion/styled';

type Props = {
  /**
   * Must be a React.Fragment of multiple elements. Do not pass just one element. `<> <div>1</div> <div>2</div> </>` is valid, `<div> <div>1</div> <div>2</div> </div>` is not.
   */
  children?: React.ReactNode;
  /**
   * To customize the arrows, pass a React.Fragment with two elements. The first element will be the left arrow, the second element will be the right arrow. They must have classNames "__prev" and "__next" respectively. Like this: `<> <div className="__prev">&lt;</div> <div className="__next">&gt;</div> </>`
   */
  arrows?: React.ReactNode;
} & BlockProps;

export const Component: React.FC<Props> = withStyles(
  forwardRef(({ arrows, children, ...props }: Props, ref: any) => {
    const carouselRef = React.useRef(ref);
    useEffect(() => {
      const carousel = new HorizontalCarousel(carouselRef.current);
      return () => {
        carousel.end();
      };
    }, []);
    return (
      <Styled ref={carouselRef} {...props}>
        <div className="__slides">{children}</div>
        {!!arrows && <div className="__arrows">{arrows}</div>}
      </Styled>
    );
  }),
  'HorizontalCarousel',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withHorizontalCarousel is HOC used to predefine common props
 */

export default memo(Component);

export const withHorizontalCarousel = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('div')``;
