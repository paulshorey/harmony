import React from 'react';
import Modal from '.';
import Block from '@ps/ui/components/Block';
import Button from '@ps/ui/components/Button';
import Input from '@ps/ui/components/Input';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

export default (props: any) => {
  useShowStorybookCode();
  const [isOpen, set_isOpen] = React.useState(false);
  const handleOpen = () => set_isOpen(true);
  const handleClose = () => set_isOpen(false);
  return (
    <CanvasContainer bggradient="light" textcolor="dark">
      {/* <p>Accessible and ADA and WCAG Compliant!</p> */}
      <p>
        <Input placeholder="Hit Tab key to focus inside each field on this page." />
      </p>
      <p>
        <Input placeholder="Focus moves to the modal when opened." />
      </p>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Block bgcolor="purple" textcolor="light">
          <h2>This is a title inside the modal</h2>
          <p>
            This could be a bit of text for a quick dialog, or a whole article
            for the user to read and sign.
          </p>
        </Block>
      </Modal>
      <p>
        <Button
          bgcolor="purple"
          bggradient="rainbow"
          textgradient="rainbow"
          onClick={handleOpen}
          variant="outlinedGradient"
        >
          Open modal
        </Button>
      </p>
      <p>
        <Input placeholder="On close, focus returns to the previously focused element." />
      </p>
      <p>
        <Input placeholder="This way, everything is accessible." />
      </p>
      {/* <p>
        At least that's the goal. When you navigate a form on a webpage by
        hitting TAB, then a modal opens, you should be able to (1) close the
        modal by hitting ESC or TAB. Then (2) after the moal is closed, you
        should be able to continue navigating using TAB/keyboard from where you
        left off. Most modals reset the page, so you have to hit tab from the
        top of the page again to get back to tediously find where you were in
        the form.
      </p> */}
    </CanvasContainer>
  );
};

export const code = `import Modal from '@ps/ui/components/Modal';
  
const [isOpen, set_isOpen] = React.useState(false);
const handleOpen = () => set_isOpen(true);
const handleClose = () => set_isOpen(false);
  
<p>
  <Input placeholder="Focus moves to the modal when opened." />
</p>
<Modal
  open={isOpen}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >
  <Block bgcolor="purple" textcolor="light">
    <h2>This is a title inside the modal</h2>
    <p>
      This could be a bit of text for a quick dialog, or a whole article
      for the user to read and sign.
    </p>
  </Block>
</Modal>
<p>
  <Button
    bgcolor="purple"
    bggradient="rainbow"
    textgradient="rainbow"
    onClick={handleOpen}
    variant="outlined"
  >
    Open modal
  </Button>
</p>
<p>
  <Input placeholder="On close, focus returns to the previously focused element." />
</p>`;
