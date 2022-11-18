import { css } from '@emotion/react';

export default {
  wrapper: css`
    background: #333;
    overflow: auto;
    width: 100%;
    min-height: 100vh;
    user-select: none;
    white-space: nowrap;
    font-size: 24px;
  `,
  view: () => css`
    position: relative;

    .frames {
      padding-bottom: 60px;
      .frame {
        vertical-align: top;
        display: inline-block;
        margin: 0 3px;
        position: relative;
        overflow: hidden;
        iframe {
          display: block;
          transform: scale(0.67);
          transform-origin: left top;
        }
        .caption {
          color: #666;
          font-size: 12px;
        }
        &.isTablet {
          iframe {
            transform: scale(0.6);
          }
        }
        &.isDesktop {
          iframe {
            transform: scale(0.525);
          }
        }
      }
    }
  `,
  controls: (controlsRight) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #ccc;
    padding: 10px 5px 0;
    font-size: 0.5em;
    > *:nth-child(2) {
      padding: 0 1rem;
    }
    > * {
      line-height: 1rem;
    }
  `,
};
