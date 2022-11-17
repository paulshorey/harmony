import React from 'react';
import { withBlock } from '@ps/ui/components/Block';
import CodeInline from '@ps/ui/components/CodeInline';
import Code from '@ps/ui/components/Code';
import Inline from '@ps/ui/components/Inline';

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
  position:relative;
  top: -1rem;
  margin-top: 0;

  > * {
    padding: 1rem; 
    * {font-size: 1rem;line-height:1.5rem;}
  }

  b {
    color: var(--color-accent);
  }
`
});
const Mq = withBlock({
  as: 'code',
  ss: `
  text-indent: 1rem;
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
    <div data-bgcolor="purple">

      <p>
    Every component in this library accepts <code>ss</code> props. These props accept a string of SCSS, or a function that returns a string. All these are also available as theme variables.
      </p>
      <p>
    <code>{`<Block `}</code>
    <Mq>
      ss <b>all sizes</b>
    </Mq>
    <Mq>
      ssLg <b>min-width 931px </b>
    </Mq>
    <Mq>
      ssSm <b>max-width 930px</b>
    </Mq>
    <Mq>
      ssDesktop <b>min-width 1025px</b>
    </Mq>
    <Mq>
      ssMobile <b>max-width 1024px</b>
    </Mq>
    <Mq>
      ssLargeTablet <b>min-width 768px and max-width 1024px</b>
    </Mq>
    <Mq>
      ssTablet <b>min-width 601px and max-width 1024px</b>
    </Mq>
    <Mq>
      ssNotPhone <b>min-width 601px</b>
    </Mq>
    <Mq>
      ssPhone <b>max-width 600px</b>
    </Mq>
    <Mq>
      ssSmallPhone <b>max-width 400px</b>
    </Mq>
    <Mq>
      ssTinyPhone <b>max-width 360px</b>
    </Mq>
    <Mq>
      ssLargeDesktop <b>min-width 1440px</b>
    </Mq>
    <Mq>
      ssVeryLargeDesktop <b>min-width 1920px</b>
    </Mq>
    <Mq>
      ssPortrait <b>height &gt; width</b>
    </Mq>
    <Mq>
      ssLandscape <b>width &gt; height</b>
    </Mq>
    <code>&gt;</code>
      </p>
      <p>
        This is more robust than the typical sm/md/lg/xl breakpoints. You can also refer to them as css-in-js variables.
      </p>
      <p>
      <Inline as="b" textgradient="rainbow">The best way to keep code maintainable is to keep it simple. Use pairs... &nbsp;&nbsp;&nbsp;</Inline>  
      <ul>
        <li><strong><b>sm</b> / <b>lg</b> styles for min/max <b>930px</b></strong> is the best for most apps. Smaller tablets get the mobile design.</li>
        <li><strong><b>phone</b> / <b>tablet</b> / <b>desktop</b></strong> is perfect if you have separate designs for all 3 environments.</li>
        <li><strong><b>mobile</b> vs <b>desktop</b> for min/max <b>1024px</b></strong> could work, but anyone using a tablet will get the mobile design.</li>
        </ul>
      </p>
      <p>
        You can occasionally use <b>largeDesktop</b>, <b>largeTablet</b>, <b>smallPhone</b>  or <b>tinyPhone</b> to adjust for edge cases. But you won't have to remember all the breakpoints for every style. Each is available only if you need it.
        </p>
    </div>
  </Border>

    <br />
    <h2>Separation of markup and styles</h2>
    <br />

    These can all be defined and accessed in your site's theme.  
    
    Access media query mixins from any style, by referencing <CodeInline code={`theme.mq.phone`} /> or <CodeInline code={`theme.mq.tablet`} />. When using ss prop, css prop, or styled function, the theme is accessible as a prop.

    <Code
      ss="font-size: 0.85rem;margin-bottom:1.5rem;"
      code={`// The "ss" prop accepts a function that returns a template literal string:
ss: (props) => \`
    \${props.theme.mq.sm} {
        padding: 1rem \${props.theme.sizes.card.paddingX * 2};
    }
\`;

// Or in @emotion/styled, pass a function to any template literal:
styled(Button)\`
    \${(props) => props.theme.mq.sm} {
        padding: 1rem \${(props) => props.theme.sizes.card.paddingX * 2};
    }`} />

</Container>
);

export default MediaQueriesDemo;
