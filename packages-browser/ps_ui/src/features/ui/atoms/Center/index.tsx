import React from 'react';
import withCSS from 'src/helpers/withCSS';

import styles from './styles';

/**
 * Center makes the inner content centered even if the children's width is greater than the space available.
 *
 * Otherwise, if children is too wide, it would start at the left padding, and extend beyond the right padding, even with `text-align:center`.
 */
const Center: React.FC = (props) => {
  return (
    <span {...props} css={withCSS({ label: 'Center', styles })} {...props} />
  );
};

export default Center;
