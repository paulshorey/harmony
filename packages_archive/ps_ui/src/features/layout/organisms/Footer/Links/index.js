import React from 'react';
import propTypes from 'prop-types';
import Link from 'src/components/atoms/Link';
import { css, useTheme } from '@emotion/react';
import useVariants from 'src/hooks/useVariants';

const styles = {
  default: css`
    margin: 0;

    a {
      cursor: pointer;
      display: block;
      margin: 10px 0;
    }
  `,
  horizontal: css`
    a {
      display: inline-block;
      margin: 0 10px 0 0;

      &:last-of-type {
        margin-right: 0;
      }
    }
  `,
};

function Links({ links, variant, className, ...props }) {
  const theme = useTheme();
  return (
    <div
      {...props}
      css={useVariants({ theme, styles, variant })}
      className={'Links' + (className ? ' ' + className : '')}
    >
      {!!links && (
        <>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                rel={link.rel}
                {...{
                  'data-qa': `footer-link-${link.text.replace(/[^\d\w]/g, '').toLowerCase()}`,
                }}
              >
                {link.text}
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

Links.propTypes = {
  variant: propTypes.string,
  links: propTypes.arrayOf(
    propTypes.shape({
      text: propTypes.string.isRequired,
      href: propTypes.string.isRequired,
      rel: propTypes.string,
    })
  ),
  css: propTypes.any,
};

Links.defaultProps = {
  css: () => css``,
};

export default Links;
