import { withBlock } from '@ps/ui/components/Block';
import Dropdown from '@ps/ui/components/Dropdown';
import Link from '@ps/ui/components/Link';
import ColorSchemeToggle from './ColorSchemeToggle';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './styles';

const Header = withBlock(styles.Header);
const Nav = withBlock(styles.Nav);
const ToggleMenu = withBlock(styles.ToggleMenu);
const Logo = withBlock(styles.Logo);

const HeaderLayout = () => {
  return (
    <Header>
      <Logo>
        <span>👋 </span>
        {/* <span>Hi</span> */}
      </Logo>
      <Nav>
        <Dropdown
          ss="margin-right:1.33rem;"
          left
          menu={
            <ToggleMenu>
              <div>
                <Link href="#">oneasdfsdfdfdfdfddfadsfdfdfsd</Link>
                <Link href="#">two</Link>
                <Link href="#">three</Link>
                <Link href="#">four</Link>
                <Link href="#">five</Link>
              </div>
            </ToggleMenu>
          }
        >
          <Link href="#">
            <span className="noWrap">experience&thinsp;&amp;</span>&thinsp;
            <span className="noWrap">
              experiments <FA icon={regular('angle-down')} />
            </span>
          </Link>
        </Dropdown>
        <Dropdown
          ss="margin-right:1.25rem;"
          menu={
            <ToggleMenu>
              <div>
                <Link href="#">oneasdfsdfdfdfdfddfadsfdfdfsd</Link>
                <Link href="#">two</Link>
                <Link href="#">three</Link>
                <Link href="#">four</Link>
                <Link href="#">five</Link>
              </div>
            </ToggleMenu>
          }
        >
          <Link href="#">
            <span className="noWrap">docs&thinsp;&amp;</span>&thinsp;
            <span className="noWrap">
              notes <FA icon={regular('angle-down')} />
            </span>
          </Link>
        </Dropdown>
        <Link href="#">about me</Link>
        <ColorSchemeToggle />
      </Nav>
    </Header>
  );
};
export default HeaderLayout;
