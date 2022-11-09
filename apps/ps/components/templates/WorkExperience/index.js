import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { LuminousGallery } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.css';
import HorizontalCarousel from 'horizontal_carousel/src';
import Wordio from 'components/templates/WorkExperience/Wordio';
import dynamic from 'next/dynamic';

const OpenSource = dynamic(
  () => import('components/templates/WorkExperience/OpenSource'),
  {
    ssr: false,
  }
);
const BL = dynamic(
  () => import('components/templates/WorkExperience/BeyondLimits'),
  {
    ssr: false,
  }
);
const PP = dynamic(
  () => import('components/templates/WorkExperience/PastProjects'),
  {
    ssr: false,
  }
);

class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*
     * Popup lightbox
     */
    const options = {
      caption(el) {
        if (el && el.dataset && el.dataset.title) {
          return el.dataset.title;
        }
        return '';
      },
    };
    /*
     * Mount carousels
     */
    setTimeout(() => {
      new LuminousGallery(
        document.querySelectorAll('.lightbox a'),
        {},
        options
      );
      // if (typeof this === 'undefined' || !this) return;
      this.carousels = [];
      const els = document.querySelectorAll('.horizontal_carousel'); // <-- lazy method! Can also use array of React refs
      if (els) {
        for (const el of els) {
          this.carousels.push(new HorizontalCarousel(el));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    /*
     * Unmount carousels
     */
    if (this.carousels) {
      for (const ref of this.carousels) {
        if (!ref || !ref.end) {
          continue;
        }
        ref.end();
      }
    }
  }

  render() {
    return (
      <ProjectsStyled>
        <Head>
          <title>Paul Shorey ~ Web Software Engineer and Designer</title>
        </Head>
        <div className="featuredCard">
          <div className="content full">
            <p className="top_text">
              Hi!&nbsp; 👋 I've been coding since 2008. Enjoy creating something
              from nothing, collaborating with people, designing and developing
              software. Let's build something together!
            </p>
          </div>
          <div className="content full flex" style={{ overflow: 'auto' }}>
            <div className="horizontal_carousel lightbox">
              <div className="slides">
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
              </div>
            </div>
          </div>
        </div>

        <section className="content full">
          <Wordio />
          <OpenSource />
          <a name="work-experience" />
          <BL />
          <PP />
        </section>
      </ProjectsStyled>
    );
  }
}
export default PageTemplate;

const ProjectsStyled = styled.div`
  max-width: 100vw;
  overflow: hidden;

  .titleFont {
    font-weight: 800;
  }

  .description {
    margin-bottom: 1.125rem;

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .top_caption {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .beyond_limits {
    margin: 4.5rem 0;

    .horizontal_carousel {
      margin: 1rem 0;

      img {
        height: 15rem;
      }
    }
  }

  .faArrowDown {
    vertical-align: -0.19rem;
  }

  .simple_nav {
    position: relative;
    min-width: 11.5rem;
    font-weight: bold;
    line-height: 2.125rem;
    margin-right: 0.5rem;
    @media (max-width: 1100px) {
      display: none;
    }

    > * {
      white-space: nowrap;
    }
  }

  .section_new_projects {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p.top_text {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1.25rem;
    @media (min-width: 860px) {
      margin-right: -1rem;
    }

    .nowrap {
      @media (max-width: 860px) {
        display: block;
        margin-top: 1.5rem;
      }
    }
  }

  hr {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    height: 0;
    @media (max-width: 860px) {
      height: 1.5rem;
    }
  }

  a {
    text-shadow: 1px 1px 1px white;
  }
`;
