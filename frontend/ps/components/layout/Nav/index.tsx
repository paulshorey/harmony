import Dropdown from '@ps/ui/components/Dropdown';
// import ColorSchemeToggle from './ColorSchemeToggle';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from '@ps/ui/components/Button';
import Block, { withBlock } from '@ps/ui/components/Block';
import styles from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const Nav = withBlock({ as: 'nav', ...styles.Nav });
const ToggleMenu = withBlock({ ...styles.ToggleMenu });

const LayoutNav = () => {
  return (
    <Nav>
      {/* <Dropdown
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
              repo <FA icon={faGithub} />
            </Button>
            <Button
              variant="text"
              textcolor="accent"
              onClick={() => {
                // setIsOpen(true);
              }}
            >
              <span>resume </span>
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
              <span>say hello </span>
              <FA icon={regular('message')} />
            </Button>
          </ToggleMenu>
        }
      >
        <span>
          <FA
            icon={solid('bars')}
            style={{ fontSize: '1.6rem', marginTop: '-0.067rem' }}
          />
        </span>
      </Dropdown> */}

      <a href="https://paulshorey.com/files/Resume--Paul-Shorey.pdf">
        <Button ss="margin-right:0;" variant="text">
          Resume <FA icon={regular('download')} />
        </Button>
      </a>

      <a
        href="https://github.com/paulshorey/harmony"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button ss="margin-right:0;font-size:1.5rem;" variant="text">
          <FA icon={faGithub} />
        </Button>
      </a>
    </Nav>
  );
};

export default LayoutNav;
