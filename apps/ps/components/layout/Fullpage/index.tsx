import React from 'react';
import CenterChildrenY from '@ps/ui/components/CenterChildrenY';
import HeaderLayout from 'components/layout/Header';

const FullpageLayout = ({ children }) => {
  const style = { ss: `height:100vh;` };
  return (
    <>
      <HeaderLayout />
      <CenterChildrenY {...style}>{children}</CenterChildrenY>
    </>
  );
};
export default FullpageLayout;
