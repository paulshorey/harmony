import ScrollSlideIn from '.';
import Box from '@ps/ui/components/content/Box';

export default (args: any) => (
  <div>
    <Box as="p" ss="height: 100vh;">
      👇 Scroll down until you see the content{' '}
    </Box>
    <ScrollSlideIn ss="padding: 0 11vw;" {...args}>
      <h1>This content will slide in when entering the viewport. </h1>
      <p>
        ⛵️ Wait a second before scrolling back. Animation will be disabled for
        a second.
      </p>
      <p>
        ⏳ This is to prevent it from looking glitchy when someone scrolls
        up-down too quickly.
      </p>
      <p>
        🤓 If you reload the page to this exact scroll position, then it will
        not play the animation needlessly. It only animates when content scrolls
        into view.
      </p>
    </ScrollSlideIn>
    <Box as="p" ss="height: 200px;"></Box>
  </div>
);
