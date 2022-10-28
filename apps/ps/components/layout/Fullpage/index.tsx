import React from 'react';
import CenterChildrenY from '@ps/ui/components/display/CenterChildrenY';
import Header from 'components/layout/Header';
import uiState, { uiStateType } from 'state/uiState';

const FullpageLayout = ({ children }) => {
  const ui = uiState((state) => state as uiStateType);
  return (
    <>
      <Header absolute />
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
