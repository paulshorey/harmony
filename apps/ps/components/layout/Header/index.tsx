import { withBlock } from '@ps/ui/components/Block';
import uiState, { uiStateType } from 'state/uiState';
import styled from 'styled-components';

const Toggle = styled(withBlock({ as: 'span' }))``;

const Header = styled(
  withBlock({
    as: 'header',
    ssLg: 'background:orange;',
    ssSm: 'background:blue;',
  })
)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 45px; /* same as height of header in notion.so published pages (https://techytools.notion.site/techytools/Docs-sites-2c377bf61ba6454fb607e52b07171015) */
  /* position: absolute; */
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
`;

const Nav = styled(withBlock({ as: 'nav' }))`
  display: flex;
  > * {
    display: inline-flex;
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const HeaderLayout = () => {
  const ui = uiState((state) => state as uiStateType);
  return (
    <Header>
      <span>logo</span>

      <Nav>
        <a>experience &amp; experiements</a>
        <a>guides &amp; docs</a>
        <a>about me</a>

        <Toggle onClick={ui.colorSchemeIndexToggle}>Toggle</Toggle>
      </Nav>
    </Header>
  );
};
export default HeaderLayout;
