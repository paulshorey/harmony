// import React from 'react';
// import Modal from '@ps/ui/components/Modal';
import HCarousel from './AboutMeCarousel';
import LayoutNav from 'components/layout/Nav';
import CenterChildrenY from '@ps/ui/components/CenterChildrenY';
import Block from '@ps/ui/components/Block';
import Link from '@ps/ui/components/Link';
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
    .__prev,
    .__next {
      transform: scale(0.5, 0.67) !important;
      color: white !important;
      opacity: 0.5 !important;
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
      <CenterChildrenY {...styles.y}>
        <LayoutNav />
        <Block
          as="p"
          ss={(props) =>
            `margin: calc(${props.theme.header.height} + 6.5rem) 1.25rem 1.25rem;`
          }
        >
          Hi. Thanks for visiting! This site is my sandbox to try new ideas.
          Really appreciate your <a>feedback</a>.
        </Block>
        <HCarousel {...styles.carousel} />
        <Block>
          <Block as="p" ss={(props) => `margin: 5rem 1.25rem 1.5rem;`}>
            Check out my latest experiment:
          </Block>
          <Link
            href="/"
            target="_blank"
            ss={`
            background: linear-gradient(45deg,rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1)); padding: 1px 1px 1rem;
            display:inline-block;
            border-radius: 1rem;
            border: solid 1px rgba(255,255,255,0.33);
            cursor:pointer;
            background-position: left center;

            &:hover,
            &:focus:not(:hover) {
              background-image: linear-gradient(45deg,  transparent,  rgba(255,255,255,0.1), rgba(255,255,255,0.2), rgba(255,255,255,0.1), transparent ); padding: 1px 1px 1rem;
              border: solid 1px rgba(255,255,255,0.67);
            background-size: 300% auto;
            transition: background-position 500ms linear 0s,
              background-size 500ms linear 0s;
            background-position: right center;
            }
            `}
          >
            <Block textgradient="rainbow" ss="padding:0 1rem;">
              <h2>Harmony UI</h2>
              <p>Styling system / Component library / Monorepo setup</p>
            </Block>
          </Link>
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
