let todisable = [
  'css',
  'ref',
  'children',
  'className',
  'as',
  'style',
  'cssSm',
  'cssMd',
  'cssLg',
  'cssDesktop',
  'cssTablet',
  'cssMobile',
  'cssPhone',
  'cssSmallPhone',
  'cssLargeDesktop',
  'cssVeryLargeDesktop',
  'cssTinyPhone',
  'cssNotPhone',
  'cssLargeTablet',
  'cssIframe',
  'cssNotIframe',
  'cssWebview',
  'cssNotWebview',
  'cssAndroid',
  'cssIPhone',
  'cssIPad',
  'cssMac',
  'cssWindows',
  'cssLinux',
  'cssIOS',
  'cssLandscape',
  'cssPortrait',
  'variants',
];
let output = {} as any;
for (let key of todisable) {
  output[key] = { table: { disable: true } };
}
export default output;
