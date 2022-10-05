import { memo, FC, AnchorHTMLAttributes } from 'react';
// import PageContext from 'src/context/Page';
// import ABTestContext from 'src/context/ABTest';
import NextLink from 'next/link';
import { css } from '@emotion/react';
import { analytics_track_link } from '@ps/fn/browser/analytics';
import withStyles from 'styles/withStyles';
import useComponentWithProps12 from 'hooks/useComponentWithProps12';
import variants from './variants';
import ComponentPropsType from 'types/component';

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> &
  ComponentPropsType & {
    href: string;
    /**
     * For analytics record - where in the site/page the click happened.
     */
    from?: string;
  };

export const Component: FC<Props> = ({
  href,
  children,
  rel,
  target,
  className,
  onClick,
  variant,
  variants,
  hrefLang = 'en-us',
  from,
  ...props
}) => {
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
  // variants
  let variantCSS = '';
  if (variant === 'black' || variants?.includes('black')) {
    variantCSS += 'color: #000;';
  }
  if (variant === 'underline' || variants?.includes('underline')) {
    variantCSS +=
      'text-decoration: underline; &:hover { text-decoration: none; }';
  }

  // render children
  let A = (
    <a
      {...props}
      rel={rel}
      target={target}
      onClick={trackOnClick}
      href={href}
      hrefLang={hrefLang}
      className={'Link' + (className ? ' ' + className : '')}
      style={{ cursor: 'pointer' }}
      css={css(variantCSS)}
    >
      {children}
    </a>
  );
  // render parent
  if (href[0] === '#') {
    return A;
  } else {
    return (
      <NextLink href={href} passHref={true}>
        {A}
      </NextLink>
    );
  }
};

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Link', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withLink = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Default, props1, props2);
};

/**
 * Default export is ready to use: <Link {...yourProps} />
 */
export const Link = Default;
export default Default;
