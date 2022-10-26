import React, { ReactElement } from 'react';
import { withCodeInline } from '@ps/ui/components/content/CodeInline';

const Mq = withCodeInline({
  variant: 'text',
  ss: `
    display:none;
    &::after {
      content: ',';
    }
  `,
});

const MediaQueriesDemo = () => (
  <>
    <Mq ssAll="display:inline-block;">ss</Mq>
    <Mq ssLg="display:inline-block;">ssLg</Mq>
    <Mq ssSm="display:inline-block;">ssSm</Mq>
    <Mq ssDesktop="display:inline-block;">ssDesktop</Mq>
    <Mq ssMobile="display:inline-block;">ssMobile</Mq>
    <Mq ssLargeTablet="display:inline-block;">ssLargeTablet</Mq>
    <Mq ssTablet="display:inline-block;">ssTablet</Mq>
    <Mq ssPhone="display:inline-block;">ssPhone</Mq>
    <Mq ssSmallPhone="display:inline-block;">ssSmallPhone</Mq>
    <Mq ssLargeDesktop="display:inline-block;">ssLargeDesktop</Mq>
    <Mq ssVeryLargeDesktop="display:inline-block;">ssVeryLargeDesktop</Mq>
    <Mq ssIPhone="display:inline-block;">ssIPhone</Mq>
    <Mq ssIPad="display:inline-block;">ssIPad</Mq>
    <Mq ssNotPhone="display:inline-block;">ssNotPhone</Mq>
    <Mq ssPortrait="display:inline-block;">ssPortrait</Mq>
    <Mq ssLandscape="display:inline-block;">ssLandscape</Mq>
    <Mq ssAndroid="display:inline-block;">ssAndroid</Mq>
    <Mq ssWindows="display:inline-block;">ssWindows</Mq>
    <Mq ssMac="display:inline-block;">ssMac</Mq>
    <Mq ssLinux="display:inline-block;">ssLinux</Mq>
    <Mq ssIframe="display:inline-block;">ssIframe</Mq>
    <Mq ssNotIframe="display:inline-block;">ssNotIframe</Mq>
    <Mq ssWebview="display:inline-block;">ssWebview</Mq>
    <Mq ssNotWebview="display:inline-block;">ssNotWebview</Mq>
  </>
);

export default MediaQueriesDemo;
