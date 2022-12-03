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
import { css } from '@emotion/react';

const style = (props) => css`
  height: 100vh;
  p {
    letter-spacing: 0.1px;
    text-align: center;
  }
`;

function Home() {
  // const pageContext: pageContextType = useContext(PageContext);
  // const [isOpen, setIsOpen] = React.useState(false);
  return (
    <CenterChildrenY ss={style}>
      <HeaderLayout />
      <LayoutNav />
      <Block
        as="p"
        ss={(props) => `margin: ${props.theme.header.height} 1.25rem 1.25rem;`}
        ssPhone="margin-top: 7rem;"
      >
        Hi. Thanks for visiting! This is my sandbox to try new ideas. Really
        appreciate your <a>feedback</a>.
      </Block>
      <HCarousel />
      <Block>
        <Block
          as="p"
          ss="margin: 5rem 1.25rem 1.5rem;"
          ssPhone="margin-top: 3.5rem;"
        >
          My recent experiments have been focused on developer experience and
          best practices.
          {/* Most recently I've been working on tooling for software developers: */}
        </Block>
        <LatestProjectsCarousel />
      </Block>
    </CenterChildrenY>
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