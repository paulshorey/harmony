import css from '@ps/ui/helpers/css';

export default {
  default: css`
    position: relative;

    .__slides {
      position: relative;
      overflow: auto;
      display: flex;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
    }

    .__slides > * {
      position: relative;
      margin-right: 0.25rem;
      scroll-snap-align: start;
    }

    .__slides img {
      position: relative;
      width: auto;
    }

    .__arrows {
      pointer-events: none;
      font-size: 16px;
      font-weight: bold;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .__arrows .__prev,
    .__arrows .__next {
      color: currentColor;
      pointer-events: all;
      position: absolute;
      top: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-decoration: none;
      cursor: pointer;
    }
    .__arrows .__prev {
      left: 0;
      padding-right: 15px;
    }
    .__arrows .__next {
      right: 0;
      padding-left: 15px;
    }

    /*
   * default arrows
   */
    .__arrows svg.__prev,
    .__arrows svg.__next {
      height: 67%;
      max-height: 84px;
      top: calc(49% - 42px);
      transform: scale(0.8, 1.15);
      color: orange;
    }
    .__arrows svg.__prev {
    }
    .__arrows svg.__next {
      margin-right: 1px;
    }

    /*
      * LEGACY - NEED REFACTOR
      */

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
  `,
};
