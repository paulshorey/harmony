import React, { memo, forwardRef } from 'react';
import TheCarousel, { Props } from './TheCarousel';
import getQueryParam from '@ps/fn/browser/url/get_query_param';
import variants from './styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import styled from '@emotion/styled';
import withStyles from '@ps/ui/hooks/withStyles';

/*
 * Something changed with the browser/node/package code...
 * The infinite-react-carousel no longer works on first render.
 * It needs to wait until the DOM has mounted.
 */
export const Component: React.FC<Props> = withStyles(
  forwardRef(({ options = {}, ...props }: Props, ref: any) => {
    const [showCarousel, set_showCarousel] = React.useState(false);
    React.useEffect(() => {
      // disable for Search Engines, QA, LightHouse test, and other bots
      const disableForBots =
        /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(
          window.navigator.userAgent
        );
      if (disableForBots && disableForBots !== null) {
        // disable
      } else {
        // enable
        set_showCarousel(true);
      }
      // pause for QA
      const qaStatic = getQueryParam('qaStatic');
      if (qaStatic && qaStatic !== null) {
        // pause
        options.autoplay = false;
      }
    }, []);
    return showCarousel ? <Styled ref={ref} {...props} /> : null;
  }),
  'InfiniteCarousel',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withInfiniteCarousel is HOC used to predefine common props
 */

export default memo(Component);

export const withInfiniteCarousel = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled(TheCarousel)``;
