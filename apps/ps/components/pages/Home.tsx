import React from 'react';
import Box from '@ps/ui/components/display/Box';
import Button from '@ps/ui/components/focus/Button';
import Modal from '@ps/ui/components/focus/Modal';
import FullpageLayout from 'components/layout/Fullpage';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <main>
      <FullpageLayout>
        <p>
          <input placeholder="Hit Tab key to focus inside each field on this page." />
        </p>
        <p>
          <textarea>
            Ideally, the focus should be trapped inside the modal while the
            modal is opened. Hitting tab should navigate the form fields inside
            the modal.
          </textarea>
        </p>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <h2>Hello! This title is inside a modal</h2>
          <p>This is not finished. Just started. Please check back soon.</p>
        </Modal>
        <Box as="p" ss="display:flex;">
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
            variant="primary"
          >
            Open modal
          </Button>
          <Box as="span" ss="width:1rem;" />
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Open modal
          </Button>
        </Box>
        <p>
          <textarea>
            Then, after the modal has closed, the focus should be returned to
            the button that opened the modal.
          </textarea>
        </p>
        <p>
          <input placeholder="Another input field to test focus with." />
        </p>
      </FullpageLayout>
    </main>
  );
}
