// import React from 'react';
// import Modal from '@ps/ui/components/Modal';
import HCarousel from './AboutMeCarousel';
import LayoutNav from 'components/layout/Nav';
import CenterChildrenY from '@ps/ui/components/CenterChildrenY';
import Block from '@ps/ui/components/Block';
// import Link from '@ps/ui/components/Link';
import HeaderLayout from 'components/layout/Header';
// import { useContext } from 'react';
// import PageContext, { pageContextType } from 'context/Page';
// import css from '@ps/ui/helpers/css';
import LatestProjectsCarousel from './LatestProjectsCarousel';

const style = (props) => `
    height:calc(100vh - 5rem);
    p {
      font-size: 1rem;
      letter-spacing: 0.1px;
      text-align: center;
    }
`;

function Home() {
  // const pageContext: pageContextType = useContext(PageContext);
  // const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Block {...style}>
      <HeaderLayout />
      <CenterChildrenY ss="height:calc(100vh - 5rem);">
        <LayoutNav />
        <Block
          as="p"
          ss={(props) =>
            `margin: calc(${props.theme.header.height} + 2.5rem) 1.25rem 1.25rem;`
          }
        >
          Hi. Thanks for visiting! This site is my sandbox to try new ideas.
          Really appreciate your <a>feedback</a>.
        </Block>
        <HCarousel />
        <Block>
          <Block
            as="p"
            ss={(props) =>
              `margin: calc(${props.theme.header.height} + 2.5rem) 1.25rem 1.5rem;`
            }
          >
            Check out my latest experiment:
          </Block>
          <LatestProjectsCarousel />
        </Block>
      </CenterChildrenY>
    </Block>
  );
}
export default Home;

/* <Modal
    open={isOpen}
    onClose={() => {
      setIsOpen(false);
    }}
  >
    <div>
      <h2>Hello! This title is inside a modal</h2>
      <p>This is not finished. Just started. Please check back soon.</p>
    </div>
  </Modal> */
