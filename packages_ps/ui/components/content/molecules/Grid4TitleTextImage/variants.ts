export default {
  titleImageTextImage: (props: any) => `
    grid-template-areas:
      'title image'
      'text image';
    grid-template-columns: 1fr 1fr;
  `,
  imageTitleImageText: (props: any) => `
    grid-template-areas:
      'image title'
      'image text';
    grid-template-columns: 1fr 1fr;
  `,
  titleTitleTextImage: (props: any) => `
    grid-template-areas:
      'title title'
      'text image';
    grid-template-columns: 1fr 1fr;
    > *:nth-child(1) {
      text-align: center;
    }
  `,
  titleTitleImageText: (props: any) => `
    grid-template-areas:
      'title title'
      'image text';
    > *:nth-child(1) {
      text-align: center;
    }
  `,
  default: (props: any) => `
    position: relative;
    display: grid !important;
    grid-template-columns: 1fr 1fr;

    ${props.theme.mq.sm} {
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
      ${props.theme.mq.sm} {
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
