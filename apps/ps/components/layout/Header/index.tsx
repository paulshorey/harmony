import Box from '@ps/ui/components/Block';
import uiState, { uiStateType } from 'state/uiState';

const styles = {
  header: `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 45px; /* same as height of header in notion.so published pages (https://techytools.notion.site/techytools/Docs-sites-2c377bf61ba6454fb607e52b07171015) */
    /* position: absolute; */
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
  `,
  nav: `
    display: flex;
    > * {
      display: inline-flex;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  `,
};

const Header = () => {
  const ui = uiState((state) => state as uiStateType);
  return (
    <Box as="header" ss={styles.header}>
      <span>logo</span>

      <Box as="nav" ss={styles.nav}>
        <a>experience &amp; experiements</a>
        <a>guides &amp; docs</a>
        <a>about me</a>

        <Box as="span" onClick={ui.colorSchemeIndexToggle}>
          Toggle
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
