import React from 'react';
import { IconNewTab } from './Components';
import Block, { withBlock } from '@ps/ui/components/content/Block';

const Mq = withBlock({
  ss: `
    line-height: 2;
    text-indent: 1rem;
    display: none;
    &:after {
      content: "='display:block'";
      padding-left: 1rem;
      color: white;
      opacity: 0.75;
      font-weight: 400;
    }
  `,
});

const MediaQueriesDemo = () => (
  <>
    <Block as="h5" ss="margin-top:1rem;">
      These <span color="gold">props </span> apply to your current page size:
    </Block>
    <pre>{`<Block `}</pre>
    <div>
      <Mq as="code" ssAll="display:block;">
        ss
      </Mq>
      <Mq as="code" ssLg="display:block;">
        ssLg
      </Mq>
      <Mq as="code" ssSm="display:block;">
        ssSm
      </Mq>
      <Mq as="code" ssDesktop="display:block;">
        ssDesktop
      </Mq>
      <Mq as="code" ssMobile="display:block;">
        ssMobile
      </Mq>
      <Mq as="code" ssLargeTablet="display:block;">
        ssLargeTablet
      </Mq>
      <Mq as="code" ssTablet="display:block;">
        ssTablet
      </Mq>
      <Mq as="code" ssPhone="display:block;">
        ssPhone
      </Mq>
      <Mq as="code" ssSmallPhone="display:block;">
        ssSmallPhone
      </Mq>
      <Mq as="code" ssLargeDesktop="display:block;">
        ssLargeDesktop
      </Mq>
      <Mq as="code" ssVeryLargeDesktop="display:block;">
        ssVeryLargeDesktop
      </Mq>
      <Mq as="code" ssIPhone="display:block;">
        ssIPhone
      </Mq>
      <Mq as="code" ssIPad="display:block;">
        ssIPad
      </Mq>
      <Mq as="code" ssNotPhone="display:block;">
        ssNotPhone
      </Mq>
      <Mq as="code" ssPortrait="display:block;">
        ssPortrait
      </Mq>
      <Mq as="code" ssLandscape="display:block;">
        ssLandscape
      </Mq>
      <Mq as="code" ssAndroid="display:block;">
        ssAndroid
      </Mq>
      <Mq as="code" ssWindows="display:block;">
        ssWindows
      </Mq>
      <Mq as="code" ssMac="display:block;">
        ssMac
      </Mq>
      <Mq as="code" ssLinux="display:block;">
        ssLinux
      </Mq>
      <Mq as="code" ssIframe="display:block;">
        ssIframe
      </Mq>
      <Mq as="code" ssNotIframe="display:block;">
        ssNotIframe
      </Mq>
      <Mq as="code" ssWebview="display:block;">
        ssWebview
      </Mq>
      <Mq as="code" ssNotWebview="display:block;">
        ssNotWebview
      </Mq>
      <pre>&gt;</pre>
      <p>
        <span className="gold">
          ☝️ Try to resize. It's responsive. Styles use plain CSS, not JS.{' '}
        </span>
        <span>There are many preconfigured breakpoints, explained below. </span>
        <span>Not all get rendered, just the ones you've specified.</span>
        <span>
          <span className="noWrap">
            Pass a css string (to style something quickly, inline) - or a
            function
          </span>
          <span className="noWrap">
            that accepts theme as first argument and returns a string.
          </span>{' '}
          Use theme.instance to get color/shade/size of the current component.{' '}
        </span>
      </p>

      <Block as="p" ssIframe="display:none;">
        <span className="gold">
          ⚠️ There used to be a paragraph in this spot. But now it's gone!
        </span>{' '}
        That was just an easy media query to check for iframe:{' '}
        <code>
          {`<`}Block as="p" ssNotIframe="display:none"{`>`}
        </code>
        . There are similar ones for WebView, Portrait mode, etc.
      </Block>
      <Block as="p" ssNotIframe="display:none;">
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
            Open this component in its own tab <IconNewTab />
          </a>{' '}
          👈 Then, look back at this paragraph! 😏
        </span>
      </Block>
    </div>
  </>
);

export default MediaQueriesDemo;
