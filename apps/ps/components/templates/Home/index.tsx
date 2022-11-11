// import React from 'react';
// import Modal from '@ps/ui/components/Modal';
import HCarousel from './AboutMeCarousel';
import Iframe from './Iframe';
import FullpageLayout from 'components/layout/FullpageWrapper';
import LayoutNav from 'components/layout/Nav';
import CenterChildrenY from '@ps/ui/components/CenterChildrenY';
import Block from '@ps/ui/components/Block';
import HeaderLayout from 'components/layout/Header';
import { useContext } from 'react';
import PageContext, { pageContextType } from 'context/Page';

const styles = {
  main: {
    ss: (props) => `
      p {
        font-size: 1rem;
        letter-spacing: 0.1px;
        text-align: center;
      }
  `,
  },
  y: { ss: `height:80vh;` },
  carousel: {
    ss: `
    margin: 2rem 0 3rem;
    img {
      height: 15rem;
    }
  `,
  },
};

function Home() {
  const pageContext: pageContextType = useContext(PageContext);
  // const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Block {...styles.main}>
      <HeaderLayout />
      {/* <CenterChildrenY {...styles.y}> */}
      <LayoutNav />
      <Block
        ss={(props) => `
        margin: calc(${props.theme.header.height} + 0.75rem) 1.25rem 1.5rem;`}
        ssPhone="margin-left:0;margin-right:0;"
      >
        <p>{pageContext.topText}</p>
      </Block>
      <HCarousel {...styles.carousel} />
      <Block
        ss={(props) => `
        margin: 3rem 1.25rem 3rem;`}
        ssPhone="margin-left:0;margin-right:0;"
      >
        <p>{pageContext.topText}</p>
      </Block>
      {/* <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div>
            <h2>Hello! This title is inside a modal</h2>
            <p>This is not finished. Just started. Please check back soon.</p>
          </div>
        </Modal> */}
      {/* </CenterChildrenY> */}
      <Iframe
        url="https://harmony-ui.vercel.app/?path=/story/why-another-ui-library--page"
        title="example"
      />
    </Block>
  );
}
export default Home;
