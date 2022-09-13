import NextLink from 'next/link';
import React from 'react';
import withCSS from 'src/helpers/withCSS';

import styles from './styles';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  anchorProps?: Record<string, any> | Record<string, never>;
  from?: string;
  variant?: string;
  variants?: Array<string>;
};

const Link: React.FC<Props> = ({
  anchorProps,
  children,
  href = '',
  hrefLang = 'en-us',
  rel = '',
  target = '',
  variant,
  variants,
  ...props
}) => {
  // DOM element attributes
  if (/@[\w]+\./.test(href)) {
    // proper mail links
    if (!href.includes('mailto:')) {
      href = 'mailto:' + href;
    }
  } else if (
    href.substring(0, 4) === 'http' &&
    // all external domains should open in a new tab
    // (https://integration-webapp2.spiral.us = 37 characters)
    (!href.substring(0, 37).includes('spiral.us') ||
      href.substring(0, 37).includes('support.spiral.us'))
  ) {
    target = target || '_blank';
    rel = rel || 'noopener noreferrer';
  } else if (href.includes('/#') || href[0] === '#') {
    target = '';
  }
  // render Anchor tag inside NextJS Link
  const Anchor = (
    <a
      {...anchorProps}
      css={withCSS({ label: 'Link', styles, variant, variants })}
      href={href}
      hrefLang={hrefLang}
      rel={rel}
      target={target}
    >
      {children}
    </a>
  );
  if (href[0] === '#') {
    return Anchor;
  }
  return (
    <NextLink href={href} passHref={true} {...props}>
      {Anchor}
    </NextLink>
  );
};

export default Link;
