import Component from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import { Code } from '../Box';
export default (args: any) => (
  <CanvasContainer>
    <Component {...args}>
      <p>
        More than just <Code>text-align:center</Code>...
      </p>
      <p>
        If you set the width narrower than the contents, the contents will still
        be centered! Great for titles!
      </p>
      <h3 className="nowrap" style={{ fontWeight: 'bold' }}>
        This title tag has global className="nowrap", so it's forced to stay on
        line.
      </h3>
      <p>
        A regular style text-align:center element would break because of that
        forced extra long line, but this one is still centered. You could set
        overflow:hidden/scroll, and for article/footer you should, but you don't
        want to do that for titles or headings. This fixes the problem. The
        extra width is visible, like overflow:visible, but equally on both
        left/right sides, instead of just on one side.
      </p>
      <p>
        If you don't set a width, then it will simply behave like plain old{' '}
        <span className="nowrap">`text-align:center`</span>
      </p>
    </Component>
  </CanvasContainer>
);
