import { Component } from '.';
import descriptionMd from './_story.md';
import Template from './_story';
// import LocalStyles from './variants';
// import ThemeStyles from '@ps/ui/styles/variants';
// const styles = { ...LocalStyles, ...ThemeStyles };

export const Block = Template.bind({});
// Block.argTypes = {
//   variants: {
//     control: {
//       type: 'multi-select',
//     },
//     description:
//       '**`Array<string>`** In Storybook, use multi-select 👉. Hold Cmd to select another. Light colored row means it is selected.',
//     options: Object.keys(styles), // Automatically inferred when 'options' is defined
//   },
// };
Block.args = {
  variants: ['gradientBg', 'onDark', 'padding'],
};

export default {
  component: Component,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: descriptionMd,
      },
      source: {
        code: `
<h2 css={styles.topTitle}>
    <Block as="span" ssIframe="display:none;" css={styles.colorGold}>
      Your screen size{' '}
    </Block>
    <Block as="span" ssNotIframe="display:none;">
      This page <span css={styles.colorGold}></span>
    </Block>
    matches following <span css={styles.colorGold}>media queries</span>:
</h2>

<Block as="code" css={styles.codeResults} ssLg="display:block;">
  ssLg
</Block>
<Block as="code" css={styles.codeResults} ssSm="display:block;">
  ssSm
</Block>
<Block as="code" css={styles.codeResults} ssDesktop="display:block;">
  ssDesktop
</Block>
<Block as="code" css={styles.codeResults} ssMobile="display:block;">
  ssMobile
</Block>
<Block as="code" css={styles.codeResults} ssLargeTablet="display:block;">
  ssLargeTablet
</Block>
<Block as="code" css={styles.codeResults} ssTablet="display:block;">
  ssTablet
</Block>
<Block as="code" css={styles.codeResults} ssPhone="display:block;">
  ssPhone
</Block>
<Block as="code" css={styles.codeResults} ssSmallPhone="display:block;">
  ssSmallPhone
</Block>
<Block as="code" css={styles.codeResults} ssLargeDesktop="display:block;">
  ssLargeDesktop
</Block>
<Block as="code" css={styles.codeResults} ssVeryLargeDesktop="display:block;">
  ssVeryLargeDesktop
</Block>
<Block as="code" css={styles.codeResults} ssIPhone="display:block;">
  ssIPhone
</Block>
<Block as="code" css={styles.codeResults} ssIPad="display:block;">
  ssIPad
</Block>
<Block as="code" css={styles.codeResults} ssAndroid="display:block;">
  ssAndroid
</Block>
<Block as="code" css={styles.codeResults} ssWindows="display:block;">
  ssWindows
</Block>
<Block as="code" css={styles.codeResults} ssMac="display:block;">
  ssMac
</Block>
<Block as="code" css={styles.codeResults} ssLinux="display:block;">
  ssLinux
</Block>
<Block as="code" css={styles.codeResults} ssPortrait="display:block;">
  ssPortrait
</Block>
<Block as="code" css={styles.codeResults} ssLandscape="display:block;">
  ssLandscape
</Block>
<Block as="code" css={styles.codeResults} ssIframe="display:block;">
  ssIframe
</Block>
<Block as="code" css={styles.codeResults} ssNotIframe="display:block;">
  ssNotIframe
</Block>
<Block as="code" css={styles.codeResults} ssNotPhone="display:block;">
  ssNotPhone
</Block>
<Block as="code" css={styles.codeResults} ssWebview="display:block;">
  ssWebview
</Block>
<Block as="code" css={styles.codeResults} ssNotWebview="display:block;">
  ssNotWebview
</Block>
`,
      },
    },
  },
};
