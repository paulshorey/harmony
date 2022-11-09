import React from 'react';
import Block from '@ps/ui/components/Block';
import Button from '@ps/ui/components/Button';
import Modal from '@ps/ui/components/Modal';
import ImageWithFallback from '@ps/ui/components/ImageWithFallback';
import FullpageLayout from 'components/layout/Fullpage';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <main>
      <FullpageLayout>
        <ImageWithFallback
          src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/aboutus/_thumb-aboutus.jpg"
          fallbackSrc="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-city-paul.jpg"
          alt="test"
        />
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div>
            <h2>Hello! This title is inside a modal</h2>
            <p>This is not finished. Just started. Please check back soon.</p>
          </div>
        </Modal>
        <Block as="p" ss="display:flex;">
          <Button
            onClick={() => {
              // setIsOpen(true);
            }}
          >
            Open modal
          </Button>
          <Block as="span" ss="width:1rem;" />
          <Button
            onClick={() => {
              // setIsOpen(true);
            }}
            variant="outlined"
          >
            Open modal
          </Button>
        </Block>
      </FullpageLayout>
    </main>
  );
}
