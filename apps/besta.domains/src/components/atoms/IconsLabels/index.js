import React from 'react';
import { css, useTheme } from '@emotion/react';
import styles from './styles';

const IconsLabels = ({ items = [], className, ...props }) => {
  const theme = useTheme();
  return (
    <div
      {...props}
      css={styles.wrapper}
      className={'IconsLabels' + (className ? ' ' + className : '')}
    >
      <div css={styles.features}>
        {items.map((item) => (
          <div css={styles.feature}>
            <img src={item.src} alt={item.alt} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsLabels;
