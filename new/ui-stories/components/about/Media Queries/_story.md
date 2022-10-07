<p><span style="color:hsl(45deg 85% 65%);font-size:inherit;">What is mq[3]?</span> Large tablet or small desktop? I forget. <span style="color:hsl(45deg 85% 65%);font-size:inherit;">What if I need to style for both tablets and desktop?</span> How do I specify "greater than phone"?</p>

This library organizes breakpoints not by index or arbitrary sm/md/lg/xl, but by semantic labels. You have access to like 20 breakpoints, but don't have to maintain styles for each one. Use it if you need it. Concise, flexible, extensible, but also quick and easy!

Use whatever style props make sense for your design: `ssPhone` to style only phones, `ssSmallPhone` for small phones, `ssLargeTablet` for large tablets, etc. Obviously you can customize the breakpoints in your `theme.mq`.

Or use min/max pairs targeting a single breakpoint: `ssDesktop`/`ssMobile` (1024px), `ssLg`/`ssSm` (930px), `ssPhone`/`ssNotPhone` (500px).

If you don't like inline styles, it's ok. You can use variables `theme.mq.smallPhone`, `theme.mq.largeTablet`, `theme.mq.webView`, etc.
