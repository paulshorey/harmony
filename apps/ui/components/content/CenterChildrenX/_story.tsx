import CenterH from '.';
import Block from '@ps/ui/components/content/Block';
import CodeInline from '@ps/ui/components/content/CodeInline';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

const Story = (props) => {
  useShowStorybookCode();
  return (
    <CanvasContainer ss="text-align:center;padding:2rem;max-width:440px;margin:0 auto;">
      <p>
        More than just <CodeInline>text-align:center</CodeInline>...
      </p>
      <p>
        Regular text-align:center can only center what fits inside it. If a line
        exceeds the width of the parent, it stops being centered, and overflows
        only to the right. This component makes text overflow to both left and
        right, evenly.
      </p>
      <CenterH color="accent" {...props}>
        <h3 className="noWrap" style={{ fontWeight: 'bold' }}>
          This title tag has <CodeInline>white-space:nowrap</CodeInline>, so it
          does not fit inside the column.
        </h3>
      </CenterH>
      <Block as="p" textcolor="accent">
        This can be used in a blog article, to render an extra-large image that
        sticks out evenly to left and right.
      </Block>
      <p>
        This could be useful if a button (or any element) has a max-width but
        the text is slightly too wide.
      </p>
      <p>
        It could also be used in titles. When implementing responsive designs,
        you may put white-space:nowrap on a part of a title to force it to stay
        on one line.
      </p>
      <p>
        The user/visitor browser/font settings, text may render a tiny bit wider
        than you tested and stick out to the right. This will make sure its
        always centered.
      </p>
    </CanvasContainer>
  );
};
export default Story;

export const code = `import CenterH from '@ps/ui/components/content/CenterChildrenX';

<CenterH ss="min-height:440px;">
  <h3 className="noWrap" style={{ fontWeight: 'bold' }}>
    This title tag has{' '}
    <CodeInline>white-space:nowrap</CodeInline>, so it's forced
    to stay on one line.
  </h3>
</CenterH>
`;
