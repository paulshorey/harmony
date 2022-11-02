import React from 'react';
import Popover from '.';
import Box from '@ps/ui/components/content/Box';
import Text from '@ps/ui/components/content/Text';
import Button from '@ps/ui/components/focus/Button';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { InfoCircleFilled } from '@ant-design/icons';
import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import { MenuList } from '@mui/material';

const TooltipChildren = (
  <Box ss="max-width: 10rem;">
    This is not meant to be interactive. Just some info. Display anything. Add
    any style.
  </Box>
);

// const DropdownChildren = ({ close, ...props }) => {
//   const optionProps = {
//     onClick: close,
//     ss: 'width:100%;',
//   };
//   return (
//     <div {...props}>
//       <Option {...optionProps}>one</Option>
//       <Option {...optionProps}>two</Option>
//       <Option {...optionProps}>three</Option>
//     </div>
//   );
// };

const MuiMenu = ({ close, ...props }) => {
  return (
    <Box bgcolor="purple" textcolor="light">
      <Button role="menuitem" tabIndex={-1} onClick={close}>
        Single
      </Button>
      <Button role="menuitem" tabIndex={-1} onClick={close}>
        1.15
      </Button>
      <Button role="menuitem" tabIndex={-1} onClick={close}>
        Double
      </Button>
      <Button role="menuitem" tabIndex={-1} onClick={close}>
        <Check />
        Custom: 1.2
      </Button>
    </Box>
  );
};
export default (props) => {
  useShowStorybookCode();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <CanvasContainer ss="display:flex;> * {flex-grow:1;width:50%;}">
      <CanvasStoryPadding bgcolor="light" textcolor="purple">
        <Popover variant="dropdown" render={MuiMenu}>
          <Button size="sm" variant="contained">
            dropdown
          </Button>
        </Popover>
        <Popover variant="tooltip" render={TooltipChildren}>
          <Text as="b" textcolor="accent" ss="float:right;">
            <InfoCircleFilled />
          </Text>
        </Popover>
        <p>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Dashboard
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </p>
        <p>
          Dropdown will pop <b>up or down</b> depending on the target element's
          position.{' '}
        </p>
        <p>
          Tooltip will prefer to show above the element, but will show below if
          not enough space.
        </p>
        <Popover variant="dropdown" render={MuiMenu}>
          <Button size="sm">dropdown</Button>
        </Popover>
        <Popover variant="tooltip" render={TooltipChildren}>
          <Text as="b" textcolor="accent" ss="float:right;">
            <InfoCircleFilled />
          </Text>
        </Popover>
      </CanvasStoryPadding>
      <CanvasStoryPadding>
        <Popover variant="modal" render={MuiMenu}>
          <Button size="sm">modal</Button>
        </Popover>
        <Popover variant="tooltip" render={TooltipChildren}>
          <Text as="b" textcolor="accent" ss="float:right;">
            <InfoCircleFilled />
          </Text>
        </Popover>
        <p>
          <b data-textcolor="accent">Dropdown</b> = opens on Click/Tap or
          Enter/Tab
          <br />
          <b data-textcolor="accent">Modal</b> = same as dropdown, but user must
          intract with dropdown or button to close it
          <br />
          <b data-textcolor="accent">Tooltip</b> = opens on Mouse Enter, closes
          on Mouse Leave
        </p>
        <Popover variant="modal" render={MuiMenu}>
          <Button size="sm">modal</Button>
        </Popover>
        <Popover variant="tooltip" render={TooltipChildren}>
          <Text as="b" textcolor="accent" ss="float:right;">
            <InfoCircleFilled />
          </Text>
        </Popover>
      </CanvasStoryPadding>
    </CanvasContainer>
  );
};

export const code = `const TooltipChildren = (
  <Box ss="max-width: 10rem;">
    This is not meant to be interactive. Just some info. Display anything. Add
    any style.
  </Box>
);

const MuiMenu = ({ close, ...props }) => {
  const optionProps = {
    onClick: close,
    ss: 'width:100%;',
  };
  return (
    <div {...props}>
      <Option {...optionProps}>one</Option>
      <Option {...optionProps}>two</Option>
      <Option {...optionProps}>three</Option>
    </div>
  );
};

<Popover variant="dropdown" render={MuiMenu}>
  <Button size="sm">dropdown</Button>
</Popover>

<Popover variant="modal" render={MuiMenu}>
  <Button size="sm">
    modal
  </Button>
</Popover>

<Popover variant="tooltip" render={TooltipChildren}>
  <Text as="b" textcolor="accent">
    <InfoCircleFilled />
  </Text>
</Popover>`;
