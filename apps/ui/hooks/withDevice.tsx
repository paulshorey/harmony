import React, { useEffect, useState } from 'react';
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
}
