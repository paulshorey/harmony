import Box, { withBox } from '@ps/ui/components/content/Box';
import { withButton } from '@ps/ui/components/form/Button';

export const Container = withBox({
  ss: (props) =>
    `padding: 1.2rem 1rem 1.9rem; ${
      props.theme.instance.variants['bgGradient'] && `padding-top: 1.3rem;`
    }`,
});
export const Content = withBox({ ss: `padding: 0` });
export const Title = withBox({
  variant: 'textGradient',
  ss: `padding: 0.125rem 0 0 0.25rem;`,
});
export const Button = withButton({
  ss: `margin: 1rem 1rem 0rem 0.25rem;`,
});

export const IconNewTab = () => (
  <svg viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z"
    ></path>
  </svg>
);

export const Code = withBox({
  ss: `
    text-indent: 1rem;
    display: none;
    &:after {
      content: "='display:block'";
      padding-left: 1rem;
      color: white;
      opacity: 0.5;
      font-weight: 400;
    }
  `,
});

export const Wrapper = ({ children, ...props }) => (
  <Box
    {...props}
    variant={'bgGradient textColor'}
    ss={(theme) => `
      position:absolute;
      top:0;
      left:0;
      width:100%;
      padding: 3.5rem 5vw 100px;

      h3 {
        font-weight: 600;
        font-size: 1rem;
      }

      .gold {
        color: gold;
        font-weight: 600;
      }
      a, .orange {
        color: orange;
      }
      svg {
        display: inline;
        color: var(--color-cta-text);
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
      strong {
        color: white;
        white-space: nowrap;
        font-weight: 700;
      }
      b {
        color: white;
        white-space: nowrap;
        font-weight: 600;
      }
      p {
        font-size: 0.9em;
        margin: 0.9rem 0;
      }
      code {
        color: color: gold;
        margin: 0;
        opacity: 0.9;
        font-size: 0.9em;
        line-height: 1.2em;
        color: gold;
        font-weight: 700;
      }
    `}
    ssIframe={`
      p span {
        display: block;
        white-space: nowrap;
      }
    `}
  >
    <Box
      ss={`
      max-width: 1000px;
      margin: 0 auto;
    `}
    >
      {children}
    </Box>
  </Box>
);

export const MediaQueriesDemo = () => (
  <>
    <Box as="h5" ss="margin-top:1rem;">
      These <span className="gold">props </span> apply to your current{' '}
      <span className="orange">page size</span>:
    </Box>
    <pre>{`<Box `}</pre>
    <div>
      <Code as="code" ssAll="display:block;">
        ss
      </Code>
      <Code as="code" ssLg="display:block;">
        ssLg
      </Code>
      <Code as="code" ssSm="display:block;">
        ssSm
      </Code>
      <Code as="code" ssDesktop="display:block;">
        ssDesktop
      </Code>
      <Code as="code" ssMobile="display:block;">
        ssMobile
      </Code>
      <Code as="code" ssLargeTablet="display:block;">
        ssLargeTablet
      </Code>
      <Code as="code" ssTablet="display:block;">
        ssTablet
      </Code>
      <Code as="code" ssPhone="display:block;">
        ssPhone
      </Code>
      <Code as="code" ssSmallPhone="display:block;">
        ssSmallPhone
      </Code>
      <Code as="code" ssLargeDesktop="display:block;">
        ssLargeDesktop
      </Code>
      <Code as="code" ssVeryLargeDesktop="display:block;">
        ssVeryLargeDesktop
      </Code>
      <Code as="code" ssIPhone="display:block;">
        ssIPhone
      </Code>
      <Code as="code" ssIPad="display:block;">
        ssIPad
      </Code>
      <Code as="code" ssNotPhone="display:block;">
        ssNotPhone
      </Code>
      <Code as="code" ssPortrait="display:block;">
        ssPortrait
      </Code>
      <Code as="code" ssLandscape="display:block;">
        ssLandscape
      </Code>
      <Code as="code" ssAndroid="display:block;">
        ssAndroid
      </Code>
      <Code as="code" ssWindows="display:block;">
        ssWindows
      </Code>
      <Code as="code" ssMac="display:block;">
        ssMac
      </Code>
      <Code as="code" ssLinux="display:block;">
        ssLinux
      </Code>
      <Code as="code" ssIframe="display:block;">
        ssIframe
      </Code>
      <Code as="code" ssNotIframe="display:block;">
        ssNotIframe
      </Code>
      <Code as="code" ssWebview="display:block;">
        ssWebview
      </Code>
      <Code as="code" ssNotWebview="display:block;">
        ssNotWebview
      </Code>
      <pre>&gt;</pre>
      <p>
        <span className="gold">
          ☝️ Try to resize. It's responsive. Styles use plain CSS, not JS.{' '}
        </span>
        <span>There are many preconfigured breakpoints, explained below. </span>
        <span>Not all get rendered, just the ones you've specified.</span>
        <span>
          <span className="nowrap">
            Pass a css string (to style something quickly, inline) - or a
            function
          </span>
          <span className="nowrap">
            that accepts theme as first argument and returns a string.
          </span>{' '}
          Use theme.instance to get color/shade/size of the current component.{' '}
        </span>
      </p>

      <Box as="p" ssIframe="display:none;">
        <span className="gold">
          ⚠️ There used to be a paragraph in this spot. But now it's gone!
        </span>{' '}
        That was just an easy media query to check for iframe:{' '}
        <code>
          {`<`}Box as="p" ssNotIframe="display:none"{`>`}
        </code>
        . There are similar ones for WebView, Portrait mode, etc.
      </Box>
      <Box as="p" ssNotIframe="display:none;">
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
      </Box>
    </div>
  </>
);
