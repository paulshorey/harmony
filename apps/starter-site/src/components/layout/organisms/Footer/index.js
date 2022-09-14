import React from 'react';
import styles from './styles';

const Footer = ({ className = '', ...props }) => {
  return (
    <footer
      css={styles.wrapper}
      className={'Footer' + (className ? ' ' + className : '')}
      {...props}
    >
      <div css={styles.content} className="pageWidth">
        zfsdfafdf
      </div>
    </footer>
  );
};

export default Footer;
