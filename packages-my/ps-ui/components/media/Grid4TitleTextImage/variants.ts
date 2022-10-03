import { css } from '@emotion/react';
import { themeType as t } from '@ps/ui/styles/theme';

export default {
  'title-image-text-image': (theme: t) => css`
    grid-template-areas:
      'title image'
      'text image';
    grid-template-columns: 1fr 1fr;
  `,
  'image-title-image-text': (theme: t) => css`
    grid-template-areas:
      'image title'
      'image text';
    grid-template-columns: 1fr 1fr;
  `,
  'title-title-text-image': (theme: t) => css`
    grid-template-areas:
      'title title'
      'text image';
    grid-template-columns: 1fr 1fr;
    > *:nth-child(1) {
      text-align: center;
    }
  `,
  'title-title-image-text': (theme: t) => css`
    grid-template-areas:
      'title title'
      'image text';
    > *:nth-child(1) {
      text-align: center;
    }
  `,
  'default': (theme: t) => css`
    position: relative;
    display: grid !important;
    grid-template-columns: 1fr 1fr;

    ${theme.mq.sm} {
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas:
        'title'
        'image'
        'text';
    }

    gap: 0;
    align-items: center;
    align-content: center;

    > div {
      position: relative;
      ${theme.mq.sm} {
        margin-left: auto;
        margin-right: auto;
      }
    }

    .Grid4TitleTextImage-title {
      grid-area: title;
    }

    .Grid4TitleTextImage-text {
      grid-area: text;
    }

    .Grid4TitleTextImage-image {
      grid-area: image;
    }
  `,
};
