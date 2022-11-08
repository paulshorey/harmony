import React from 'react';
import Block, { withBlock } from '@ps/ui/components/Block';

const Container = withBlock({
  ss: `
  margin: 1.5rem 0;
  margin-top: 1.5rem; 
`
});
const Border = withBlock({
  variant:"gradientOutline",
  bggradient:"rainbow",
  ss: `
  > * {
    padding: 1rem; 
    * {font-size: 1rem;line-height:1.5rem;}
  }
`
});
const Mq = withBlock({
  as: 'code',
  ss: `
  line-height: 2;
  text-indent: 1rem;
  display: none;
  b {
    padding-left: 1rem;
    color: white;
    opacity: 0.75;
    font-weight: 400;
    font-size: 0.9rem;
  }
`,
});
const MediaQueriesDemo = () => (
<Container>
  <Border>
    <Block bgcolor="purple">

      <Block as="p" >
        <strong>These <code>props</code> would apply to your current screen size</strong> (minus the Storybook sidebar):
      </Block>
      <Block as="p" ss="font-size: 1.125rem;">
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
        <Mq ssNotPhone="display:block;">
          ssNotPhone <b>min-width 601px</b>
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
        <Mq ssPortrait="display:block;">
          ssPortrait <b>height &gt; width</b>
        </Mq>
        <Mq ssLandscape="display:block;">
          ssLandscape <b>width &gt; height</b>
        </Mq>
        {/* 
        <Mq ssIPhone="display:block;">
          ssIPhone <b>userAgent</b>
        </Mq>
        <Mq ssIPad="display:block;">
          ssIPad <b>userAgent</b>
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
        </Mq> */}
        <code>&gt;</code>
      </Block>
      <p>
        ☝️ Resize your screen. It's responsive.
      </p>
    </Block>
  </Border>
  
  <Block as="p" ss="font-size: 1.125rem;">
    <br />
    Here are all of them:
    <br />
    <code>{`<Block `}</code>
    <Mq ss="display:block;">
      ss <b>all sizes</b>
    </Mq>
    <Mq ss="display:block;">
      ssLg <b>min-width 931px </b>
    </Mq>
    <Mq ss="display:block;">
      ssSm <b>max-width 930px</b>
    </Mq>
    <Mq ss="display:block;">
      ssDesktop <b>min-width 1025px</b>
    </Mq>
    <Mq ss="display:block;">
      ssMobile <b>max-width 1024px</b>
    </Mq>
    <Mq ss="display:block;">
      ssLargeTablet <b>min-width 768px and max-width 1024px</b>
    </Mq>
    <Mq ss="display:block;">
      ssTablet <b>min-width 768px</b>
    </Mq>
    <Mq ss="display:block;">
      ssNotPhone <b>min-width 601px</b>
    </Mq>
    <Mq ss="display:block;">
      ssPhone <b>max-width 600px</b>
    </Mq>
    <Mq ss="display:block;">
      ssSmallPhone <b>max-width 400px</b>
    </Mq>
    <Mq ss="display:block;">
      ssLargeDesktop <b>min-width 1440px</b>
    </Mq>
    <Mq ss="display:block;">
      ssVeryLargeDesktop <b>min-width 1920px</b>
    </Mq>
    <Mq ss="display:block;">
      ssPortrait <b>height &gt; width</b>
    </Mq>
    <Mq ss="display:block;">
      ssLandscape <b>width &gt; height</b>
    </Mq>
    {/* 
    <Mq ss="display:block;">
      ssIPhone <b>userAgent</b>
    </Mq>
    <Mq ss="display:block;">
      ssIPad <b>userAgent</b>
    </Mq>
    <Mq ss="display:block;">
      ssAndroid <b>OS</b>
    </Mq>
    <Mq ss="display:block;">
      ssWindows <b>OS</b>
    </Mq>
    <Mq ss="display:block;">
      ssMac <b>OS</b>
    </Mq>
    <Mq ss="display:block;">
      ssLinux <b>OS</b>
    </Mq>
    <Mq ss="display:block;">
      ssIframe <b>rendered inside iframe</b>
    </Mq>
    <Mq ss="display:block;">
      ssNotIframe <b>rendered in its own window, not iframe</b>
    </Mq>
    <Mq ss="display:block;">
      ssWebview <b>rendered in a WebView browser like in Facebook, Gmail, Instagram apps</b>
    </Mq>
    <Mq ss="display:block;">
      ssNotWebview <b>rendered in a normal browser</b>
    </Mq> */}
    <code>&gt;</code>
    <br />
    More coming soon. Currently testing and optimizing ones for OS, userAgent, iFrame, and WebView.
  </Block>
</Container>
);

export default MediaQueriesDemo;
