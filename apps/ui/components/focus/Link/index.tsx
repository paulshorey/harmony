import { memo, AnchorHTMLAttributes, forwardRef, ReactElement } from 'react';
import withNextLink from './withNextLink';
// import PageContext from 'src/context/Page';
// import ABTestContext from 'src/context/ABTest';
import { analytics_track_link } from '@ps/fn/browser/analytics';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import variants from './variants';
import ssComponentPropsType from '@ps/ui/types/component';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';
import { useTheme } from '@emotion/react';

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  /**
   * For analytics record - where in the site/page the click happened.
   */
  from?: string;
} & ssComponentPropsType;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { href, children, rel, target, onClick, hrefLang = 'en-us', from, ...props },
  ref
) => {
  const theme = useTheme();
  const [Styled, otherProps] = useStyledComponent(props, 'a', 'Link', variants);

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
    let options = {
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

  // router
  // let RouterLink = theme.RouterLink;

  // render children
  let A = (
    <Styled
      {...otherProps}
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
  if (href[0] === '#') {
    return A;
  } else {
    return withNextLink(A, href);
  }
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withLink } from 'components/display/Link';
 * const Link = withLink({ ...thesePropsWillApplyToAllInstances });
 * <Link {...optionalUniquePropsForCurrentInstance} />
 */
export const withLink = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Link, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Link" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Link = memo(forwardRef(Component));
export default Link;
