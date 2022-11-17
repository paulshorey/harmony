import React from 'react';
import Block, { withBlock } from '@ps/ui/components/Block';
import CodeInline from '@ps/ui/components/CodeInline';
import Code from '@ps/ui/components/Code';
import Inline from '@ps/ui/components/Inline';
import {useEffect, useState} from 'react';
import {returnDeviceInfo, deviceInfoType} from '@ps/ui/hooks/useDeviceInfo';

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

  b {
    color: var(--color-accent);
  }
`
});
const Mq = withBlock({
  as: 'code',
  ss: `
  text-indent: 1rem;
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
    Every component in this library accepts ss props. These props accept a string of SCSS, or a function that returns a string.
      </Block>
      <Block as="p" ss="font-size: 1.125rem;">
    <code>{`<Block `}</code>
    <Mq>
      ss <b>all sizes</b>
    </Mq>
    <Mq>
      ssLg <b>min-width 931px </b>
    </Mq>
    <Mq>
      ssSm <b>max-width 930px</b>
    </Mq>
    <Mq>
      ssDesktop <b>min-width 1025px</b>
    </Mq>
    <Mq>
      ssMobile <b>max-width 1024px</b>
    </Mq>
    <Mq>
      ssLargeTablet <b>min-width 768px and max-width 1024px</b>
    </Mq>
    <Mq>
      ssTablet <b>min-width 601px and max-width 1024px</b>
    </Mq>
    <Mq>
      ssNotPhone <b>min-width 601px</b>
    </Mq>
    <Mq>
      ssPhone <b>max-width 600px</b>
    </Mq>
    <Mq>
      ssSmallPhone <b>max-width 400px</b>
    </Mq>
    <Mq>
      ssLargeDesktop <b>min-width 1440px</b>
    </Mq>
    <Mq>
      ssVeryLargeDesktop <b>min-width 1920px</b>
    </Mq>
    <Mq>
      ssPortrait <b>height &gt; width</b>
    </Mq>
    <Mq>
      ssLandscape <b>width &gt; height</b>
    </Mq>
    <code>&gt;</code>
      </Block>
      <p>
        These are easy to adjust in <code>theme.ts</code>. This is more robust than the typical sm/md/lg/xl breakpoints.
      </p>
      <p>
      <Inline as="b" textgradient="rainbow">The best way to keep code simple and maintainable is to use pairs... &nbsp;&nbsp;&nbsp;</Inline>  
      <ul>
        <li><strong><b>sm</b> / <b>lg</b> styles for min/max <b>930px</b></strong> is the best for most apps. Only smaller tablets get the mobile design.</li>
        <li><strong><b>phone</b> / <b>tablet</b> / <b>desktop</b></strong> is perfect if you have separate designs for all 3 environments.</li>
        <li><strong><b>mobile</b> vs <b>desktop</b> for min/max <b>1024px</b></strong> could work, but anyone using a tablet will get the mobile design.</li>
        </ul>
      </p>
      <p>
        You can occasionally add <b>largeDesktop</b> or <b>tinyPhone</b> or <b>largeTablet</b> to adjust for edge cases. But you don't have to remember all the available breakpoints for every style. Each is available only if you need it.
        </p>
    </Block>
  </Border>
  
  <Block as="p" ss="font-size: 1.125rem;">

    <br />
    <h2>Separation of markup and styles</h2>
    <br />
    
    Access media query mixins from any style, by referencing <CodeInline code={`theme.mq.phone`} /> or <CodeInline code={`theme.mq.tablet`} />. When using ss prop, css prop, or styled function, the theme is accessible as a prop.

    <Code
      ss="font-size: 0.85rem;margin-bottom:1.5rem;"
      code={`// Inside any "ss" prop function that returns a string:
ss: (props) => \`
    \${props.theme.mq.sm} {
        padding: 1rem \${props.theme.sizes.card.paddingX * 2};
    }
\`;

// Or in a @emotion/styled template literal:
styled(Button)\`
    \${(props) => props.theme.mq.sm} {
        padding: 1rem \${(props) => props.theme.sizes.card.paddingX * 2};
    }`} />

    <br /> <br />

    <h2>Target a specific device or platform</h2>
    <br />

    Use a hook <CodeInline code={`useDeviceInfo()`} /> or HOC. These use JavaScript instead of CSS. Wrap your component in <CodeInline code={`<WithDevice ... />`} /> to show/hide the content depending on OS, userAgent, iframe, or Webview. See the code for documentation and types.

    <Code ss="font-size:0.85em;" code={`import WithDevice from '@ps/ui/hooks/WithDevice';  
<p> 
    Use this component as any other, in your JSX. 
    <WithDevice webview>
      This part will render only in a WebView.
    </WithDevice>
</p>`} />

    <Code title="hooks/WithDevice.tsx" ss="font-size:0.85em;" collapsed={true} code={`import React, { useEffect, useState } from 'react';
import { returnDeviceInfo, deviceInfoType } from '@ps/ui/hooks/useDeviceInfo';

type Props = {
  /**
   * Content to render if client device matches AT LEAST ONE {true} condition, and ZERO {false} conditions.
   */
  children: React.ReactNode;
  /**
   * Rendered inside iframe.
   */
  iframe?: boolean;
  /**
   * Not inside an iframe.
   */
  notIframe?: boolean;
  /**
   * Rendered in a native app Webview browser (like when clicking a link in mobile Facebook, Gmail, Instagram, etc.)
   */
  Webview?: boolean;
  /**
   * Not renered in a native app Webview browser, but in a normal desktop or mobile web browser.
   */
  notWebview?: boolean;
  /**
   * OS == 'Mac'.
   */
  Mac?: boolean;
  /**
   * OS == 'Windows'.
   */
  Windows?: boolean;
  /**
   * OS == 'Linux'.
   */
  Linux?: boolean;
  /**
   * OS == 'Android'.
   */
  Android?: boolean;
  /**
   * OS == 'iOS'.
   */
  iOS?: boolean;
  /**
   * device is 'iPhone'.
   */
  iPhone?: boolean;
  /**
   * device is 'iPad'.
   */
  iPad?: boolean;
};

/**
 * Show or hide props.children based on client's device.
 *
 * See props. Capitalization is important. For each device, pass {true} to show children if client device matches. Pass {false} to hide children if client device matches. False will be given preference. If you're passing multiple device conditions, if at least one of them mathes false, the children will not be shown.
 *
 * This will always return null on ServerSide. On client, when window/document is available, this will check for device and return children if conditions are met.
 */
const WithDevice = (props: Props) => {
  const [show, set_show] = useState(false);
  useEffect(() => {
    const deviceInfo: deviceInfoType = returnDeviceInfo();
    const showOrHide = {
      show: false,
      hide: false,
    };
    checkDevice(showOrHide, props, 'Mac', deviceInfo?.device === 'Mac');
    checkDevice(showOrHide, props, 'Windows', deviceInfo?.device === 'Windows');
    checkDevice(showOrHide, props, 'Linux', deviceInfo?.device === 'Linux');
    checkDevice(showOrHide, props, 'Android', deviceInfo?.device === 'Android');
    checkDevice(showOrHide, props, 'iPad', deviceInfo?.device === 'iPad');
    checkDevice(showOrHide, props, 'iPhone', deviceInfo?.device === 'iPhone');
    checkDevice(showOrHide, props, 'iOS', deviceInfo?.device === 'iOS');
    checkDevice(showOrHide, props, 'iframe', deviceInfo?.inIframe);
    checkDevice(showOrHide, props, 'notIframe', !deviceInfo?.inIframe);
    checkDevice(showOrHide, props, 'webview', deviceInfo?.inWebview);
    checkDevice(showOrHide, props, 'notWebview', !deviceInfo?.inWebview);
    /*
     * Show only if developer passed {true} for one of the devices, and client is currently that device,
     * But NOT if developer passed {false} for one of the devices, and client is currently that device,
     */
    if (showOrHide.show && !showOrHide.hide) {
      set_show(true);
    }
  }, []);

  if (show) {
    return <>{props.children || null}</>;
  }
  return null;
};
export default WithDevice;

// Helper:
function checkDevice(
  showOrHide,
  props: Record<string, any> = {},
  key,
  condition
) {
  if (Object.prototype.hasOwnProperty.call(props, key) && condition) {
    if (props[key] === true) {
      showOrHide.show = true;
    }
    if (props[key] === false) {
      showOrHide.hide = true;
    }
  }
}`} />

  </Block>
</Container>
);

export default MediaQueriesDemo;
