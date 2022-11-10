import Block, { withBlock } from '@ps/ui/components/Block';
import Dropdown from '@ps/ui/components/Dropdown';
import Link from '@ps/ui/components/Link';
import ColorSchemeToggle from './ColorSchemeToggle';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './styles';
import Inline from '@ps/ui/components/Inline';

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
        <Dropdown
          right
          menu={
            <ToggleMenu>
              <ColorSchemeToggle />
              <Block
                ss="display:flex;"
                onClick={() => {
                  // setIsOpen(true);
                }}
              >
                <span>Resume </span>
                <FA icon={regular('file-arrow-down')} />
              </Block>
              <Block
                textcolor="accent"
                onClick={() => {
                  // setIsOpen(true);
                }}
                ss="display:flex;svg { transform: scale(1.15) translate(0.075rem, 0.05rem); }"
                // ss="svg { transform: rotate(-24deg) translate(0.09rem,-0.09rem) scale(0.9); }"
              >
                <span>Say hello </span>
                <FA icon={regular('envelope')} />
              </Block>
            </ToggleMenu>
          }
        >
          <Link href="#">
            about <FA icon={regular('angle-down')} />
          </Link>
        </Dropdown>

        {/* <Block as="span" ss="width:0.55rem;" />
          <Button
            onClick={() => {
              // setIsOpen(true);
            }}
            variant="text"
          >
            Projects <FA icon={regular('angle-down')} />
          </Button> */}
      </Nav>
    </Header>
  );
};
export default HeaderLayout;
