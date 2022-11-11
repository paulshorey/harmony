import React from 'react';
import HCarousel from '@ps/ui/components/HorizontalCarousel';

function Home(props) {
  return (
    <HCarousel {...props}>
      <span data-href="/photos/aboutus/aboutus.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/aboutus/_thumb-aboutus.webp" />
      </span>
      <span data-href="/photos/aboutus/desk-paul.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/aboutus/_thumb-desk-paul.webp" />
      </span>
      <span data-href="/photos/me/via-ferrata.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-via-ferrata.webp" />
      </span>
      <span data-href="/photos/me/hg-crestline.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-hg-crestline.webp" />
      </span>
      <span data-href="/photos/me/ycheck.jpg">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-ycheck.webp"
        />
      </span>
      <span data-href="/photos/me/dog-colorado.jpg">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-dog-colorado.webp"
        />
      </span>
      <span data-href="/photos/me/city-paul.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/me/_thumb-city-paul.webp" />
      </span>
      <span data-href="/photos/aboutus/aboutus-utah-road.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_272/v1627867206/ps/photos/aboutus/_thumb-aboutus-utah-road.webp" />
      </span>
    </HCarousel>
  );
}
export default Home;
