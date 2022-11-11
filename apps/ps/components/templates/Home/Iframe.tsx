// import Block from '@ps/ui/components/Block';
// import { css } from '@emotion/react';

const styleProps = {
  iframe: {
    style: {
      height: '100vh',
      width: '100vw',
      border: 'none',
      padding: 0,
      margin: 0,
      outline: 'none',
    },
  },
};

function Iframe({ url, title = '', ...props }) {
  return <iframe title={title} {...props} {...styleProps.iframe} src={url} />;
}
export default Iframe;
