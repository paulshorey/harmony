import React, { memo, AnchorHTMLAttributes, forwardRef } from 'react';
// import PageContext from 'src/context/Page';
// import ABTestContext from 'src/context/ABTest';
import { analytics_track_link } from '@ps/fn/browser/analytics';
import variants from './styles';
import styleProps from '@ps/ui/types/styles';
import { useTheme } from '@emotion/react';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  /**
   * For analytics record - where in the site/page the click happened.
   */
  from?: string;
} & styleProps;

export const Component: React.FC<Props> = withStyles(
  forwardRef(
    (
      {
        href = '',
        children,
        rel,
        target,
        onClick,
        hrefLang = 'en-us',
        from,
        ...props
      }: Props,
      ref: any
    ) => {
      const theme = useTheme();
      // const contextPage = useContext(PageContext) || {};
      // const contextABTest = useContext(ABTestContext) || {};
      // fix attributes
      if (/@[\w]+\./.test(href)) {
        if (!href.includes('mailto:')) {
          href = 'mailto:' + href;
        }
      } else if (
        href.substring(0, 4) === 'http' &&
        // all other domains, including app.spiral.us
        !href.substring(0, 22).includes('//spiral.us') &&
        !href.substring(0, 22).includes('www.spiral.us')
        // && !href.includes('1526316317')
      ) {
        target = target || '_blank';
        rel = rel || 'noopener noreferrer';
      } else if (href.includes('/#') || href[0] === '#') {
        target = target || '';
      } else {
        target = target || '';
        rel = '';
      }
      // track link click
      const trackOnClick = (e: any) => {
        if (onClick) {
          onClick(e);
        }
        // track properties
        const options = {
          href,
          fromSection: from,
          // fromPageName: contextPage.name,
          // fromPagePath: contextPage.path,
          // experimentName: contextABTest.name,
          // experimentVariant: contextABTest.variant,
        };
        // track event
        analytics_track_link(options);
      };

      // use router component?
      // @ts-ignore
      const RouterLink = theme?.RouterLink;
      // base HTML element
      const A = (
        <Styled
          {...props}
          ref={ref}
          rel={rel}
          target={target}
          onClick={trackOnClick}
          href={href}
          hrefLang={hrefLang}
        >
          {children}
        </Styled>
      );
      // render parent
      if (href[0] === '#' || !RouterLink) {
        return A;
      }
      // wrapper component
      return (
        // @ts-ignore - React component defined in theme.RouterLink
        <RouterLink href={href} passhref={true}>
          {A}
        </RouterLink>
      );
    }
  ),
  'Link',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withLink is HOC used to predefine common props
 */

export default memo(Component);

export const withLink = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('a')``;
