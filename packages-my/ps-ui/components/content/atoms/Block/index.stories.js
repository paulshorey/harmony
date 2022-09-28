import Comp from '.';
import descriptionMd from './__story__/description.md';
import Template from './__story__/Template';

export const Block = Template.bind({});
Block.args = {};

export default {
  component: Comp,
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
    <Block as="span" mqIframe="display:none;" css={styles.colorGold}>
      Your screen size{' '}
    </Block>
    <Block as="span" mqNotIframe="display:none;">
      This page <span css={styles.colorGold}></span>
    </Block>
    matches following <span css={styles.colorGold}>media queries</span>:
</h2>

<Block as="code" css={styles.codeResults} mqLg="display:block;">
  mqLg
</Block>
<Block as="code" css={styles.codeResults} mqSm="display:block;">
  mqSm
</Block>
<Block as="code" css={styles.codeResults} mqDesktop="display:block;">
  mqDesktop
</Block>
<Block as="code" css={styles.codeResults} mqMobile="display:block;">
  mqMobile
</Block>
<Block as="code" css={styles.codeResults} mqLargeTablet="display:block;">
  mqLargeTablet
</Block>
<Block as="code" css={styles.codeResults} mqTablet="display:block;">
  mqTablet
</Block>
<Block as="code" css={styles.codeResults} mqPhone="display:block;">
  mqPhone
</Block>
<Block as="code" css={styles.codeResults} mqSmallPhone="display:block;">
  mqSmallPhone
</Block>
<Block as="code" css={styles.codeResults} mqLargeDesktop="display:block;">
  mqLargeDesktop
</Block>
<Block as="code" css={styles.codeResults} mqVeryLargeDesktop="display:block;">
  mqVeryLargeDesktop
</Block>
<Block as="code" css={styles.codeResults} mqIPhone="display:block;">
  mqIPhone
</Block>
<Block as="code" css={styles.codeResults} mqIPad="display:block;">
  mqIPad
</Block>
<Block as="code" css={styles.codeResults} mqAndroid="display:block;">
  mqAndroid
</Block>
<Block as="code" css={styles.codeResults} mqWindows="display:block;">
  mqWindows
</Block>
<Block as="code" css={styles.codeResults} mqMac="display:block;">
  mqMac
</Block>
<Block as="code" css={styles.codeResults} mqLinux="display:block;">
  mqLinux
</Block>
<Block as="code" css={styles.codeResults} mqPortrait="display:block;">
  mqPortrait
</Block>
<Block as="code" css={styles.codeResults} mqLandscape="display:block;">
  mqLandscape
</Block>
<Block as="code" css={styles.codeResults} mqIframe="display:block;">
  mqIframe
</Block>
<Block as="code" css={styles.codeResults} mqNotIframe="display:block;">
  mqNotIframe
</Block>
<Block as="code" css={styles.codeResults} mqNotPhone="display:block;">
  mqNotPhone
</Block>
<Block as="code" css={styles.codeResults} mqWebview="display:block;">
  mqWebview
</Block>
<Block as="code" css={styles.codeResults} mqNotWebview="display:block;">
  mqNotWebview
</Block>
`,
      },
    },
  },
};
