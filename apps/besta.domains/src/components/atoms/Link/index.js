import React, { useContext } from 'react';
import PageContext from 'src/context/Page';
import ABTestContext from 'src/context/ABTest';
import propTypes from 'prop-types';
import NextLink from 'next/link';
import { css } from '@emotion/react';
import vars from 'src/styles/vars';
import { analytics_track_link } from 'src/functions/analytics';

const Link = ({
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
  const contextPage = useContext(PageContext) || {};
  const contextABTest = useContext(ABTestContext) || {};
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
  const trackOnClick = (e) => {
    onClick(e);
    // track properties
    let options = {
      href,
      fromSection: from,
      fromPageName: contextPage.name,
      fromPagePath: contextPage.path,
      experimentName: contextABTest.name,
      experimentVariant: contextABTest.variant,
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
    variantCSS += 'text-decoration: underline; &:hover { text-decoration: none; }';
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

Link.propTypes = {
  href: propTypes.string,
  children: propTypes.any,
  rel: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
  from: propTypes.string,
};

Link.defaultProps = {
  from: '',
  href: '',
  className: '',
  onClick: function () {},
};

export default Link;
