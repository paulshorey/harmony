import Block from 'components/content/atoms/Block';

export default function (args: any) {
  return (
    <Block {...containerStyleProps} variant="bgGradient padding" color="cta1">
      <Block as="h5">
        These <span className="gold">props </span> apply to your current{' '}
        <span className="orange">page size</span>:
      </Block>
      <pre>{`<Block `}</pre>
      <Block as="code" {...codeStyleProps} ss="display:block;">
        ss
      </Block>
      <Block as="code" {...codeStyleProps} ssLg="display:block;">
        ssLg
      </Block>
      <Block as="code" {...codeStyleProps} ssSm="display:block;">
        ssSm
      </Block>
      <Block as="code" {...codeStyleProps} ssDesktop="display:block;">
        ssDesktop
      </Block>
      <Block as="code" {...codeStyleProps} ssMobile="display:block;">
        ssMobile
      </Block>
      <Block as="code" {...codeStyleProps} ssLargeTablet="display:block;">
        ssLargeTablet
      </Block>
      <Block as="code" {...codeStyleProps} ssTablet="display:block;">
        ssTablet
      </Block>
      <Block as="code" {...codeStyleProps} ssPhone="display:block;">
        ssPhone
      </Block>
      <Block as="code" {...codeStyleProps} ssSmallPhone="display:block;">
        ssSmallPhone
      </Block>
      <Block as="code" {...codeStyleProps} ssLargeDesktop="display:block;">
        ssLargeDesktop
      </Block>
      <Block as="code" {...codeStyleProps} ssVeryLargeDesktop="display:block;">
        ssVeryLargeDesktop
      </Block>
      <Block as="code" {...codeStyleProps} ssIPhone="display:block;">
        ssIPhone
      </Block>
      <Block as="code" {...codeStyleProps} ssIPad="display:block;">
        ssIPad
      </Block>
      <Block as="code" {...codeStyleProps} ssAndroid="display:block;">
        ssAndroid
      </Block>
      <Block as="code" {...codeStyleProps} ssWindows="display:block;">
        ssWindows
      </Block>
      <Block as="code" {...codeStyleProps} ssMac="display:block;">
        ssMac
      </Block>
      <Block as="code" {...codeStyleProps} ssLinux="display:block;">
        ssLinux
      </Block>
      <Block as="code" {...codeStyleProps} ssPortrait="display:block;">
        ssPortrait
      </Block>
      <Block as="code" {...codeStyleProps} ssLandscape="display:block;">
        ssLandscape
      </Block>
      <Block as="code" {...codeStyleProps} ssIframe="display:block;">
        ssIframe
      </Block>
      <Block as="code" {...codeStyleProps} ssNotIframe="display:block;">
        ssNotIframe
      </Block>
      <Block as="code" {...codeStyleProps} ssNotPhone="display:block;">
        ssNotPhone
      </Block>
      <Block as="code" {...codeStyleProps} ssWebview="display:block;">
        ssWebview
      </Block>
      <Block as="code" {...codeStyleProps} ssNotWebview="display:block;">
        ssNotWebview
      </Block>
      <pre>&gt;</pre>
      <p>
        <span className="gold">
          ☝️ Try to resize. It's responsive. Styles use plain CSS, no JS.{' '}
        </span>
        <span>There are many preconfigured breakpoints, explained below. </span>
        <span>
          Only the media queries you use get rendered, not all of them.
        </span>
        <span>Pass EmotionCSS or a plain string. Up to you. </span>
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
          😭 The values above don't actually reflect your true screen size.{' '}
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
            Click here to preview this component in its own tab{' '}
            <svg viewBox="0 0 1024 1024">
              <path
                fill="currentColor"
                d="M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z"
              ></path>
            </svg>
          </a>{' '}
          👈 Then, look back at this paragraph! 😏
        </span>
      </Block>
      {/* <p>
        <span>
          <span>
            Scroll down for a full breakdown 🕺 of properties and variables.
          </span>
        </span>
      </p> */}
    </Block>
  );
}

const containerStyleProps = {
  ss: (theme: theme) => `
    // &,
    // & > * {
    //   color: white;
    // }
    .gold {
      color: gold;
      font-weight: 600;
    }
    a, .orange {
      color: orange;
    }
    svg {
      display: inline;
      color: ${theme.getColor('gold')};
      padding-left: 0;
      margin-left: 0;
      height: 12px;
      width: auto;
      position: relative;
      top: 2px;
    }
    h6 {
      margin-bottom: 0;
    }
    b {
      color: white;
      white-space: nowrap;
    }
    p {
      display: block;
      font-size: 0.67em;
      margin: 0.67rem 0;
    }
    pre {
      color: color: gold;
      margin: 0;
      opacity: 0.5;
    }
    code {
      color: gold;
      font-weight: 700;
    }
  `,
  ssIframe: `
  p span {
    display: block;
    white-space: nowrap;
  }`,
};
const codeStyleProps = {
  ss: (theme: theme) => `
    text-indent: 1rem;
    display: none;
    font-size: 0.75em;
    &:after {
      content: "='display:block'";
      padding-left: 1rem;
      color: white;
      opacity: 0.5;
      font-weight: 400;
    }
  `,
};
