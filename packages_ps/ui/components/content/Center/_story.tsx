import Component from '.';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
export default (args: any) => (
  <CanvasContainer>
    <Component {...args}>
      <p>
        More than just <code className="inlineCode">text-align:center</code>...
      </p>
      <p>
        If you set the width narrower than the contents, the contents will still
        be centered! Great for titles!
      </p>
      <h3 className="noWrap" style={{ fontWeight: 'bold' }}>
        This title tag has{' '}
        <code className="inlineCode">white-space:nowrap</code>, so it's forced
        to stay on line.
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
        <span className="noWrap">`text-align:center`</span>
      </p>
    </Component>
  </CanvasContainer>
);
