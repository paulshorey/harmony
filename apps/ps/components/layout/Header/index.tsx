import Block from '@ps/ui/components/content/Block';
import uiState, { uiStateType } from 'state/uiState';

const Header = ({ absolute = false }) => {
  const ui = uiState((state) => state as uiStateType);
  return (
    <Block
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

      <Block as="span" onClick={ui.colorSchemeIndexToggle}>
        Toggle
      </Block>
    </Block>
  );
};
export default Header;
