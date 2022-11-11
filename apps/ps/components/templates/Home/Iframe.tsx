import Block from '@ps/ui/components/Block';

const styles = {
  iframe: {
    ss: (props) => `
      iframe {
        height: 100vh;
        width:100vw;
        border:none;
        padding:0;
        margin:0;
        outline:none;
      }
  `,
  },
};

function Iframe({ url, ...props }) {
  return (
    <Block {...props} {...styles.iframe}>
      <iframe src={url} />
    </Block>
  );
}
export default Iframe;
