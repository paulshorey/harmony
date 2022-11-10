// @ts-nocheck
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import HorizontalCarousel from 'horizontal_carousel';

const HCarousel = () => {
  const carouselRef = React.createRef();
  useEffect(() => {
    const carousel = new HorizontalCarousel(carouselRef.current);
    return () => {
      carousel.end();
    };
  }, []);
  return (
    <CarouselStyled>
      <div className="horizontal_carousel" ref={carouselRef}>
        <div className="slides">
          <a href="/photos/aboutus.jpg">
            <img
              height={280}
              width={280}
              src="https://besta.domains/photos/aboutus.jpg"
            />
          </a>
          <a href="/photos/desk-paul.jpg">
            <img
              height={280}
              width={280}
              src="https://besta.domains/photos/desk-paul.jpg"
            />
          </a>
          <a href="/photos/desk-samira.jpg">
            <img
              height={280}
              width={386}
              src="https://besta.domains/photos/desk-samira.jpg"
            />
          </a>
          <a href="/photos/city-samira-paul.jpg">
            <img
              height={280}
              width={334}
              src="https://besta.domains/photos/city-samira-paul.jpg"
            />
          </a>
          <a href="/photos/aboutus-utah-road.jpg">
            <img
              height={280}
              width={280}
              src="https://besta.domains/photos/aboutus-utah-road.jpg"
            />
          </a>
          <a href="/photos/about-paul-rocks.jpg">
            <img
              height={280}
              width={280}
              src="https://besta.domains/photos/about-paul-rocks.jpg"
            />
          </a>
        </div>
        <div className="arrows top">
          <span className="arrow arrow-left prev">Left</span>
          <span className="arrow arrow-right next">Right</span>
        </div>
      </div>
    </CarouselStyled>
  );
};

export default HCarousel;

const CarouselStyled = styled.div`
  position: relative;
  margin: 4rem 0;

  .horizontal-carousel {
    position: relative;
  }
  /*
 * controls
 */
  .arrows {
    //display:none;
    position: absolute;
    width: calc(100% + 2rem);
    height: 100%;
    left: -1.125rem;
    pointer-events: none;
    .arrow {
      pointer-events: all;
      position: absolute;
      border-radius: 30px;
      width: 60px;
      height: 60px;
      background: none;
      font-size: 3.33rem;
      line-height: 3rem;
      color: white;
      background: var(--color-primary);
      box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.5);
      border: none;
      outline: none;
      svg {
        position: relative;
        top: -0.025rem;
        font-size: 64px;
      }
      &.arrow-right {
        right: -10px;
        svg {
          width: 85%;
          right: 0.05rem;
        }
      }
      &.arrow-left {
        left: -6px;
        svg {
          width: 85%;
          left: 0.45rem;
        }
      }
      &[disabled] {
        opacity: 0.175;
        cursor: default;
        //border-color: transparent;
      }
    }
    &.top {
      top: 0;
      .arrow {
        top: 41%;
      }
    }
    &.middle {
      top: 0;
      .arrow {
        top: calc(72.5% - 1.25rem);
      }
    }
    &.bottom {
      bottom: -2.25rem;
      .arrow {
        bottom: 1.67rem;
        background: none;
        color: var(--color-primary);
        box-shadow: none;
        &[disabled] {
          opacity: 0;
        }
      }
    }
  }
`;
