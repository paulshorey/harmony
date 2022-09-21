import propTypes from 'prop-types';
import { css, useTheme } from '@emotion/react';
import { composeCSS } from 'src/functions/emotion';

const presets = {
  div: (theme) => css`
	padding: 15px;
	border: solid 1px #ccc;
	border-radius: 10px;
	background: #f9f9f9;
  overflow:auto;
  `
};

const Card = ({ tag, variant, variants, children, customCSS, className }) => {
  const theme = useTheme();
  const TagName = `${tag}`;
  return (
    <TagName className={className+' htmlCard'} css={composeCSS({ theme, tag, customCSS, variant, variants, presets })}>
      {children}
    </TagName>
  );
};

Card.defaultProps = {
  customCSS: css``,
  tag: 'div',
  className: ''
};

export default Card;
