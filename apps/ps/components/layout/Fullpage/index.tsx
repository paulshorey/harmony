import React from 'react';
import CenterChildrenV from '@ps/ui/components/layout/CenterChildrenV';
import Header from 'components/layout/Header';
import uiState, { uiStateType } from 'state/uiState';

const FullpageLayout = ({ children }) => {
  const ui = uiState((state) => state as uiStateType);
  return (
    <>
      <Header absolute />
      <CenterChildrenV
        ss="height:100vh;"
        {...ui.colorSchemes[ui.colorSchemeIndex]}
      >
        {children}
      </CenterChildrenV>
    </>
  );
};
export default FullpageLayout;
