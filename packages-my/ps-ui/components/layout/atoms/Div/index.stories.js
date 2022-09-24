import { css } from '@emotion/react';
import React from 'react';

import Div from '.';

export default {
  component: Div,
  title: 'layout/atoms/Div Style Props',
  parameters: {
    docs: {
      source: {
        code: `        
        import styles from './styles'; 
...
const Template = (args) => (
          <Div css={styles.wrapper} {...args}>
            <h2
              css={css\`
                font-size: 30px;
              \`}
            >
              <u>
                <Div as="span" cssLandscape="display:none;" css={styles.colorGold}>
                  Your screen size{' '}
                </Div>
                <Div as="span" cssPortrait="display:none;">
                  This <span css={styles.colorGold}>page size</span>
                </Div>
                <Div as="span" css={styles.colorGold} cssPortrait="display:none;">
                  *
                </Div>{' '}
                matches following <span css={styles.colorGold}>media queries</span>:
              </u>
            </h2>
            <Div as="code" css={styles.codeResults} cssLg="display:block;">
              cssLg
            </Div>
            <Div as="code" css={styles.codeResults} cssSm="display:block;">
              cssSm
            </Div>
            <Div as="code" css={styles.codeResults} cssDesktop="display:block;">
              cssDesktop
            </Div>
            <Div as="code" css={styles.codeResults} cssMobile="display:block;">
              cssMobile
            </Div>
            <Div as="code" css={styles.codeResults} cssLargeTablet="display:block;">
              cssLargeTablet
            </Div>
            <Div as="code" css={styles.codeResults} cssTablet="display:block;">
              cssTablet
            </Div>
            <Div as="code" css={styles.codeResults} cssLargePhone="display:block;">
              cssLargePhone
            </Div>
            <Div as="code" css={styles.codeResults} cssPhone="display:block;">
              cssPhone
            </Div>
            <Div as="code" css={styles.codeResults} cssSmallPhone="display:block;">
              cssSmallPhone
            </Div>
            <Div as="code" css={styles.codeResults} cssNotPhone="display:block;">
              cssNotPhone
            </Div>
            <Div as="code" css={styles.codeResults} cssLargeDesktop="display:block;">
              cssLargeDesktop
            </Div>
            <Div
              as="code"
              css={styles.codeResults}
              cssVeryLargeDesktop="display:block;"
            >
              cssVeryLargeDesktop
            </Div>
            <Div as="code" css={styles.codeResults} cssPortrait="display:block;">
              cssPortrait
            </Div>
            <Div as="code" css={styles.codeResults} cssLandscape="display:block;">
              cssLandscape
            </Div>
            <Div as="p" cssPortrait="display:none;">
              <br />
              {/* ⚠️ The left sidebar takes away from the screen width. <br /> */}
              🌟&thinsp;{' '}
              <span css={styles.colorGold}>
                <u>Hit keyboard key "S"</u> - to toggle the left sidebar,&thinsp; test
                the full width of your screen.
              </span>{' '}
            </Div>
            <p>
              <br />
              Resize your screen. Above values are responsive.
              <br />
              <sub>
                Click the icon at the very top/right of this purple area to open this
                component in its own page.
              </sub>
            </p>
          </Div>
        );
        `,
      },
      description: {
        component: `\`<Div />\` is the most atomic component. It is used by most of the other components in this library. It can actually render any HTML tag, not just div. It uses EmotionJS css prop and adds a few other props to help style multiple screen devices without having to remember any annoying media queries.
  
### Usage:
\`<Div as="p" />\` to render a paragraph tag, like in \`styled-system\`. Also inspired by styled-system is an effortless way to add CSS style for multiple breakpoints. But, this uses actual real CSS, and doesn't pollute the props name space. So, it's easy to manage component's props.

\`<Div css={defaultStyles} cssDesktop="display:none;" cssTablet="padding:1rem;" cssPhone="font-weight:600;font-size:1.25rem;" cssSmallPhone="font-size:1.5rem;" />\`
There are many of these cssXxx props you can use, for various sizes. 

The simplest way to start is by choosing a pair. Try \`cssLg\`/\`cssSm\` for a 930px breakpoint, or \`cssDesktop\`/\`cssMobile\` for a 1024px breakpoint. 

It lets you override specific styles for a specific breakpoint. Phone <= 499px. SmallPhone <= 399px. TinyPhone <= 359px. Tablet is between 500-1024.
\`<Div as="h2" cssSmallPhone="font-weight:900;">\`. Maybe this element gets styled somewhere else like Bootstrap or Tailwind. It's ok. It's dificult to appreciate this until you've had to do a lot of CSS for different devices. It scales up very well. In fact, this gets much more useful with more complexity.

BTW, the reason it's called Div is it extends HTMLAttributes\\<HTMLDivElement\\>. This type actually works well for most HTML elements. For interactive elements like Input/Form/conteneditable, see the forms section of this library.

All props accept EmotionJS css\\\`\\\`. For convenience, custom props also accept a basic string type. Below is a full list of css props and sizes. 
`,
      },
    },
  },
};

const styles = {
  wrapper: css`
    b {
      font-weight: 700;
    }
  `,
  colorGold: css`
    color: #fedb00;
    * {
      color: #fedb00;
    }
  `,
  codeResults: css`
    display: none;
    font-size: 22px;
  `,
};

const Template = (args) => (
  <Div css={styles.wrapper} {...args}>
    <h2
      css={css`
        font-size: 30px;
      `}
    >
      <u>
        <Div as="span" cssLandscape="display:none;" css={styles.colorGold}>
          Your screen size{' '}
        </Div>
        <Div as="span" cssPortrait="display:none;">
          This <span css={styles.colorGold}>page size</span>
        </Div>
        <Div as="span" css={styles.colorGold} cssPortrait="display:none;">
          *
        </Div>{' '}
        matches following <span css={styles.colorGold}>media queries</span>:
      </u>
    </h2>
    <Div as="code" css={styles.codeResults} cssLg="display:block;">
      cssLg
    </Div>
    <Div as="code" css={styles.codeResults} cssSm="display:block;">
      cssSm
    </Div>
    <Div as="code" css={styles.codeResults} cssDesktop="display:block;">
      cssDesktop
    </Div>
    <Div as="code" css={styles.codeResults} cssMobile="display:block;">
      cssMobile
    </Div>
    <Div as="code" css={styles.codeResults} cssLargeTablet="display:block;">
      cssLargeTablet
    </Div>
    <Div as="code" css={styles.codeResults} cssTablet="display:block;">
      cssTablet
    </Div>
    <Div as="code" css={styles.codeResults} cssLargePhone="display:block;">
      cssLargePhone
    </Div>
    <Div as="code" css={styles.codeResults} cssPhone="display:block;">
      cssPhone
    </Div>
    <Div as="code" css={styles.codeResults} cssSmallPhone="display:block;">
      cssSmallPhone
    </Div>
    <Div as="code" css={styles.codeResults} cssNotPhone="display:block;">
      cssNotPhone
    </Div>
    <Div as="code" css={styles.codeResults} cssLargeDesktop="display:block;">
      cssLargeDesktop
    </Div>
    <Div
      as="code"
      css={styles.codeResults}
      cssVeryLargeDesktop="display:block;"
    >
      cssVeryLargeDesktop
    </Div>
    <Div as="code" css={styles.codeResults} cssPortrait="display:block;">
      cssPortrait
    </Div>
    <Div as="code" css={styles.codeResults} cssLandscape="display:block;">
      cssLandscape
    </Div>
    <Div as="p" cssPortrait="display:none;">
      <br />
      {/* ⚠️ The left sidebar takes away from the screen width. <br /> */}
      🌟&thinsp;{' '}
      <span css={styles.colorGold}>
        <u>Hit keyboard key "S"</u> - to toggle the left sidebar,&thinsp; test
        the full width of your screen.
      </span>{' '}
    </Div>
    <p>
      <br />
      Resize your screen. Above values are responsive.
      <br />
      <sub>
        Click the icon at the very top/right of this purple area to open this
        component in its own page.
      </sub>
    </p>
  </Div>
);
export const DivStyleProps = Template.bind({});
DivStyleProps.args = {};
