export default {
  default: (theme: any) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px auto 3vh;
    width: 100%;
    max-width: 880px;
    outline: none;
    position: relative;
    z-index: 1000;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 30px 0 hsla(0deg 0% 0% 0.2);
    background-color: #fff;
    padding: 25px 30px;
    height: auto;
    min-height: 300px;
    transition: min-height 1s, border-radius 0.4s;

    ${theme.mq.mobile} {
      margin: 0;
      padding: 15px 24px 15px 24px;
      transition: min-height 0.5s, border-radius 0.4s;
      border-radius: 0;
      min-height: 100%;
    }
  `,
  cloudinary: (theme: theme) => `
    height: calc(100vh - 32px);
    padding: 0;
    border-radius: 18px;
    .ModalExtraTitle {
      position: absolute;
      z-index: 1000000000;
      color: white;
      background: #0c153a;
      height: auto;
      width: auto;
      display: inline-block;
      padding: 15px 23px 14px 21px;
      border-radius: 18px;
      letter-spacing: 0.5px;
    }
    .ModalCloseX {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1000000000;
      img {
        background: white;
        border-radius: 50%;
        border: solid 3px white;
        width: 31px;
        height: 31px;
        margin: 8px;
      }
    }
    > div > div {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      border-radius: 12px;
      overflow: hidden;
    }
  `,
};
