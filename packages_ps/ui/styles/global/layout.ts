import theme from '../theme';

const layout = () => `
  .pagePadding {
    position: relative;
    padding: 10px 20px;
  }

  .pageWidth {
    position: relative;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 100%;

    max-width: ${1170}px;
    @media (max-width: ${1170 + 30 + 30}px) {
      width: calc(100% - 60px);
      padding-left: 5px !important;
      padding-right: 5px !important;
    }

    ${theme.mq.phone} {
      width: calc(100% - 30px);
    }
  }

  .articleWidth {
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: auto;
    padding-right: auto;
    width: 100%;

    max-width: ${932}px;
    @media (max-width: ${932 + 28 + 30}px) {
      width: calc(100% - 60px);
    }

    ${theme.mq.phone} {
      width: calc(100% - 40px);
      p {
        padding-left: 1px;
      }
    }
  }

  .pagePaddingBottom {
    padding-bottom: 90px;
    @media (max-width: ${1170 + 30 + 30}px) {
      padding-bottom: 60px;
    }
  }

  .articlePaddingBottom {
    padding-bottom: 90px;
    @media (max-width: ${1170 + 30 + 30}px) {
      padding-bottom: 60px;
    }
  }
`;

export default layout;
