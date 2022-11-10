import React from 'react';
import Block from '@ps/ui/components/Block';
import Button from '@ps/ui/components/Button';
import Modal from '@ps/ui/components/Modal';
import HCarousel from '@ps/ui/components/HorizontalCarousel';
import FullpageLayout from 'components/layout/Fullpage';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <main>
      <FullpageLayout>
        <HCarousel>
          <a href="/photos/me/city-paul.jpg">
            <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-city-paul.webp" />
          </a>
          <a href="/photos/aboutus/desk-paul.jpg">
            <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/aboutus/_thumb-desk-paul.webp" />
          </a>
          <a href="/photos/aboutus/aboutus.jpg">
            <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/aboutus/_thumb-aboutus.webp" />
          </a>
          <a href="/photos/me/via-ferrata.jpg">
            <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-via-ferrata.webp" />
          </a>
          <a href="/photos/aboutus/aboutus-utah-road.jpg">
            <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/aboutus/_thumb-aboutus-utah-road.webp" />
          </a>
          <a href="/photos/me/hg-crestline.jpg">
            <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-hg-crestline.webp" />
          </a>
          <a href="/photos/me/ycheck.jpg">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-ycheck.webp"
            />
          </a>
          <a href="/photos/me/dog-colorado.jpg">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-dog-colorado.webp"
            />
          </a>
        </HCarousel>
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
        <Block as="p" ss="display:inline-flex;">
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
