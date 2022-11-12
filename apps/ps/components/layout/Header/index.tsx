import React, { useContext } from 'react';
import Block, { withBlock } from '@ps/ui/components/Block';
import styles from './styles';
import PageContext from 'context/Page';
// import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
// import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Header = withBlock(styles.Header);
const Logo = withBlock(styles.Logo);

const HeaderLayout = () => {
  const pageContext = useContext(PageContext);
  return (
    <Header as="header">
      <Logo
        as="svg"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g />
          <g>
            <circle cx="15.5" cy="9.5" r="1.5" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="M12,18c2.28,0,4.22-1.66,5-4H7C7.78,16.34,9.72,18,12,18z" />
            <path d="M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M12,20 c-4.42,0-8-3.58-8-8c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
          </g>
        </g>
      </Logo>
    </Header>
  );
};
export default HeaderLayout;
