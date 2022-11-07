import React from 'react';
import Block, { withBlock } from '@ps/ui/components/Block';
import Inline from '@ps/ui/components/Inline';

const styles = {
  container: `
    border: solid 1px var(--color-accent);
    margin: 1.5rem 0;
  `,
  mq: `
    line-height: 2;
    text-indent: 1rem;
    display: none;
    b {
      padding-left: 1rem;
      color: white;
      opacity: 0.75;
      font-weight: 400;
    }
  `
}
const Mq = withBlock({
  as: 'code',
  ss: styles.mq,
});
const MediaQueriesDemo = () => (
  <Block ss={styles.container}>
    <Block as="p" >
      These <span color="gold">props </span> apply to your current screen size (minus the Storybook sidebar):
    </Block>
    <p>
      <code>{`<Block `}</code>
      <Mq ss="display:block;">
        ss <b>all sizes</b>
      </Mq>
      <Mq ssLg="display:block;">
        ssLg <b>min-width 931px </b>
      </Mq>
      <Mq ssSm="display:block;">
        ssSm <b>max-width 930px</b>
      </Mq>
      <Mq ssDesktop="display:block;">
        ssDesktop <b>min-width 1025px</b>
      </Mq>
      <Mq ssMobile="display:block;">
        ssMobile <b>max-width 1024px</b>
      </Mq>
      <Mq ssLargeTablet="display:block;">
        ssLargeTablet <b>min-width 768px and max-width 1024px</b>
      </Mq>
      <Mq ssTablet="display:block;">
        ssTablet <b>min-width 768px</b>
      </Mq>
      <Mq ssPhone="display:block;">
        ssPhone <b>max-width 600px</b>
      </Mq>
      <Mq ssSmallPhone="display:block;">
        ssSmallPhone <b>max-width 400px</b>
      </Mq>
      <Mq ssLargeDesktop="display:block;">
        ssLargeDesktop <b>min-width 1440px</b>
      </Mq>
      <Mq ssVeryLargeDesktop="display:block;">
        ssVeryLargeDesktop <b>min-width 1920px</b>
      </Mq>
      <Mq ssIPhone="display:block;">
        ssIPhone <b>userAgent</b>
      </Mq>
      <Mq ssIPad="display:block;">
        ssIPad <b>userAgent</b>
      </Mq>
      <Mq ssNotPhone="display:block;">
        ssNotPhone <b>userAgent</b>
      </Mq>
      <Mq ssPortrait="display:block;">
        ssPortrait <b>height &gt; width</b>
      </Mq>
      <Mq ssLandscape="display:block;">
        ssLandscape <b>width &gt; height</b>
      </Mq>
      <Mq ssAndroid="display:block;">
        ssAndroid <b>OS</b>
      </Mq>
      <Mq ssWindows="display:block;">
        ssWindows <b>OS</b>
      </Mq>
      <Mq ssMac="display:block;">
        ssMac <b>OS</b>
      </Mq>
      <Mq ssLinux="display:block;">
        ssLinux <b>OS</b>
      </Mq>
      <Mq ssIframe="display:block;">
        ssIframe <b>rendered inside iframe</b>
      </Mq>
      <Mq ssNotIframe="display:block;">
        ssNotIframe <b>rendered in its own window, not iframe</b>
      </Mq>
      <Mq ssWebview="display:block;">
        ssWebview <b>rendered in a WebView browser like in Facebook, Gmail, Instagram apps</b>
      </Mq>
      <Mq ssNotWebview="display:block;">
        ssNotWebview <b>rendered in a normal browser</b>
      </Mq>
      <code>&gt;</code>
      </p>
      <p>
          ☝️ Resize your screen. It's responsive. There are many preconfigured breakpoints. Not all get rendered, only the ones you specify. 
</p>
        <p>
        <span>
          <span className="noWrap">
            💅 Pass a css string (to style something quickly, inline) - or a
            function
          </span>
          <span className="noWrap">
            that accepts theme as first argument and returns a string.
          </span>{' '}
          Use theme.instance to get color/shade/size of the current component.{' '}
        </span>
      </p><p>
  <Inline textgradient="rainbow">
    You don't have to use props or strings. Use EmotionJS Styled Components and functions. Each one can read the component's props and the app's theme. </Inline><a href="" target="_blank" style={{color:'white',opacity: '0.75'}} >Read more about styled components, functions, and variables.</a>
    </p>
      {/* <Block as="p" ssIframe="display:none;">
        <span className="gold">
          ⚠️ There used to be a paragraph in this spot. But now it's gone!
        </span>{' '}
        That was just an easy media query to check for iframe:{' '}
        <code>
          {`<`}Block as="p" ssNotIframe="display:none"{`>`}
        </code>
        . There are similar ones for WebView, Portrait mode, etc.
      </Block> */}
      {/* <Block as="p" ssNotIframe="display:none;">
        <span className="gold">
          😭 The values above may not reflect your true screen size...{' '}
        </span>
        <span>
          Because this content is inside an iframe. Width of the sidebar is
          subtracted.{' '}
        </span>
        <span>
          <a
            href="iframe.html?id=5--better-media-queries&viewMode=story"
            target="_blank"
            className="orange"
          >
            Open this component in its own tab
          </a>.{' '}
          Then, look back at this paragraph! 😏
        </span>
      </Block> */}
  </Block>
);

export default MediaQueriesDemo;
