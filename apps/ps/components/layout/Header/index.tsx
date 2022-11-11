import React, { useContext } from 'react';
import Block, { withBlock } from '@ps/ui/components/Block';
import styles from './styles';
import PageContext from 'context/Page';

const Header = withBlock(styles.Header);
const Logo = withBlock(styles.Logo);

const HeaderLayout = () => {
  const pageContext = useContext(PageContext);
  return (
    <Header>
      <Logo>
        <span>👋 </span>
        {/* <span>Hi</span> */}
      </Logo>
    </Header>
  );
};
export default HeaderLayout;
