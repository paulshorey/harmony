import page from '.';

export default page;

export async function getServerSideProps(context) {
  // Keep same meta data and content from the imported landing page.
  // Import static props from any page! Just update the from path above.
  let props = {};
  if (props.props) {
    props = props.props; // idk, probably not needed
  }
  // Inject variable to page props
  // All other content will be same as the imported page
  props.pagePath = '/' + context?.params?.pagePath;
  return {
    props,
  };
}
