import React from 'react';
import CenterChildrenY from '@ps/ui/components/CenterChildrenY';
import HeaderLayout from 'components/layout/Header';
import uiState, { uiStateType } from 'state/uiState';

const FullpageLayout = ({ children }) => {
  const ui = uiState((state) => state as uiStateType);
  return (
    <>
      <HeaderLayout absolute />
      <CenterChildrenY
        ss="height:100vh;"
        {...ui.colorSchemes[ui.colorSchemeIndex]}
      >
        {children}
      </CenterChildrenY>
    </>
  );
};
export default FullpageLayout;
