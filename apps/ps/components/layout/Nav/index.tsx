import Dropdown from '@ps/ui/components/Dropdown';
import ColorSchemeToggle from '../Header/ColorSchemeToggle';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from '@ps/ui/components/Button';
import { withBlock } from '@ps/ui/components/Block';
import styles from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const Nav = withBlock({ as: 'nav', ...styles.Nav });
const ToggleMenu = withBlock({ ...styles.ToggleMenu });

const LayoutNav = () => {
  return (
    <Nav>
      <Dropdown
        top
        right
        menu={
          <ToggleMenu>
            <Button
              variant="text"
              onClick={() => {
                // setIsOpen(true);
              }}
              className="noWrap"
            >
              experience &amp; experiments <FA icon={regular('angle-down')} />
            </Button>
            <Button
              variant="text"
              onClick={() => {
                // setIsOpen(true);
              }}
              className="noWrap"
            >
              docs &amp; notes <FA icon={regular('angle-down')} />
            </Button>
            <Button
              variant="text"
              onClick={() => {
                // setIsOpen(true);
              }}
              className="noWrap"
            >
              Repo <FA icon={faGithub} />
            </Button>
            <Button
              variant="text"
              textcolor="accent"
              onClick={() => {
                // setIsOpen(true);
              }}
            >
              <span>Resume </span>
              <FA icon={regular('file-arrow-down')} />
            </Button>
            <Button
              variant="text"
              textcolor="accent"
              onClick={() => {
                // setIsOpen(true);
              }}
              ss="svg { transform: scale(1.15) translate(0.075rem, 0.05rem); }"
              // ss="svg { transform: rotate(-24deg) translate(0.09rem,-0.09rem) scale(0.9); }"
            >
              <span>Say hello </span>
              <FA icon={regular('envelope')} />
            </Button>
            <ColorSchemeToggle />
          </ToggleMenu>
        }
      >
        <span>
          <FA icon={solid('bars')} style={{ fontSize: '1.25em' }} />
          <FA
            icon={regular('angle-down')}
            style={{ verticalAlign: '0.025rem', marginLeft: '0.33rem' }}
          />
        </span>
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
  );
};

export default LayoutNav;
