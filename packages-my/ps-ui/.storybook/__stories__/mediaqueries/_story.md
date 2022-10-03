An easier way to style React components for multiple devices.

Pass \`props.ssDesktop\` to style desktop devices, \`props.ssPhoneSmall\` for small phones, \`props.ssLargeTablet\` for large tablets, and \`props.css\` for everything else. Instead of passing a separate style to each device, you can choose a default size to support (mobile first is the best approach).

If you don't like inline styles, it's ok. You can always \`useTheme()\` and use \`theme.mq.desktop\`, \`theme.mq.phoneSmall\`, \`theme.mq.largeTablet\`, \`theme.mq.webView\`, etc.

Use EmotionCSS or css strings for predefined breakpoints. Extend the default theme object to modify the breakpoints, colors, variants, etc.  
Click "Show code" below. Scroll down to see a full list of props accepted by every component in this library.
