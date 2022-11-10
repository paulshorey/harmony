import React from 'react';
import Block, { withBlock } from '@ps/ui/components/Block';
import CodeInline from '@ps/ui/components/CodeInline';
import Code from '@ps/ui/components/Code';
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
        <code>&gt;</code>
      </Block>
      <p>
        ☝️ Resize your screen. It's responsive.
      </p>
    </Block>
  </Border>
  
  <Block as="p" ss="font-size: 1.125rem;">
    <br />
    Here are the currently available media queries.
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
    <code>&gt;</code>

    <br /> <br />
    
    Besides using them as inline props, you can also use them inside @emotion/styled template literals by referring to <code>props.theme.mq</code>. So, instead of <CodeInline code={`<Block ssSm="">`} />, you can do this:

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

    <a href="/docs/get-started-styles-and-props--page">↖ Read more in styles and props</a>

    <br /> <br />

    There is also a hook and HOC component available for device-specific conditions. These use JavaScript instead of CSS media queries. Wrap your component in <code>@ps/ui/hooks/withDevice.tsx</code> to show/hide the content depending on OS, userAgent, iframe, or Webview. See the code for documentation and types.

    <Code title="hooks/withDevice.tsx" ss="font-size:0.85em;" collapsed={true} code={`import React, { useEffect, useState } from 'react';
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
export default (props: Props) => {
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
