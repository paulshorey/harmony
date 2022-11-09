import { useState } from 'react';
import uiState, { uiStateType } from 'state/uiState';
import Inline from '@ps/ui/components/Inline';

const style = {
  tabIndex: 0,
  ss: `margin-left: 0.875rem; cursor:pointer;`,
  ssSmallPhone: `display:none;`,
};

const parse_colorSchemeLabel = (ui: uiStateType) => {
  const scheme = ui.colorSchemes[ui.colorSchemeIndex];
  if (scheme?.bggradient === 'light') {
    return `☀️`;
  }
  return `🌙`;
};

const HeaderLayout = () => {
  const ui = uiState((state) => state as uiStateType);
  const [colorSchemeLabel, set_colorSchemeLabel] = useState(
    parse_colorSchemeLabel(ui)
  );
  const toggle_colorScheme = () => {
    ui.colorSchemeIndexToggle();
    set_colorSchemeLabel(parse_colorSchemeLabel(ui));
  };
  return (
    <Inline {...style} onClick={toggle_colorScheme}>
      {colorSchemeLabel}
    </Inline>
  );
};
export default HeaderLayout;
