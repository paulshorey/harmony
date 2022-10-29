import Box from '@ps/ui/components/content/Box';
import uiState, { uiStateType } from 'state/uiState';

const Header = ({ absolute = false }) => {
  const ui = uiState((state) => state as uiStateType);
  return (
    <Box
      as="header"
      ss="position:absolute;width:100%;display:flex;justify-content: space-between;"
      textcolor={ui.colorSchemes?.[ui.colorSchemeIndex]?.textcolor}
    >
      <span>logo</span>
      <nav>
        <a>one</a>
        <a>two</a>
        <a>three</a>
      </nav>

      <Box as="span" onClick={ui.colorSchemeIndexToggle}>
        Toggle
      </Box>
    </Box>
  );
};
export default Header;
