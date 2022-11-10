// @ts-nocheck
import styled from 'styled-components';
import React, { useEffect, forwardRef, memo } from 'react';
import HorizontalCarousel from './script';
import { Props as BlockProps } from '@ps/ui/components/Block';
import variants from './styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';

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

export const Component = ({ arrows, children }: Props, ref: any) => {
  const carouselRef = React.useRef(ref);
  useEffect(() => {
    console.log('STARTING hcarousel');
    const carousel = new HorizontalCarousel(carouselRef.current);
    return () => {
      console.log('STOPPING hcarousel');
      carousel.end();
    };
  }, []);
  return (
    <StyledComponent ref={carouselRef}>
      <div className="__slides">{children}</div>
      {!!arrows && <div className="__arrows">{arrows}</div>}
    </StyledComponent>
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withHorizontalCarousel = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "div" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled.div`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      variants,
    })}
`;
