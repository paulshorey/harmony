import CenterH from '.';
import CodeInline from '@ps/ui/components/content/CodeInline';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';
export default (props: any) => {
  useShowStorybookCode();
  return (
    <CanvasContainer ss="text-align:center;padding:2rem;max-width:440px;margin:0 auto;">
      <p>
        More than just <CodeInline>text-align:center</CodeInline>...
      </p>
      <p>
        Regular text-align:center can only center what fits inside it. If a line
        exceeds the width of the parent, it stops being centered, and overflows
        to the right.
      </p>
      <CenterH {...props}>
        <h3 className="noWrap" style={{ fontWeight: 'bold' }}>
          This title tag has <CodeInline>white-space:nowrap</CodeInline>, so
          it's forced to stay on one line.
        </h3>
      </CenterH>
      <p>
        This is useful in a button, in case the text is accidentally a bit too
        wide, maybe if the user's font or browser settings are not as expected.
        The <CodeInline>&lt;Button&gt;</CodeInline> in this library already uses
        this.
      </p>
      <p>
        It could also be used in titles. When implementing a responsive design,
        you may put white-space:nowrap on a part of a title, to force it to stay
        in one line. It might be a bit wider than the title container usually
        is. This keeps it looking good.
      </p>
    </CanvasContainer>
  );
};

export const code = `import CenterH from '@ps/ui/components/content/CenterH';

<CenterH ss="min-height:440px;">
  <h3 className="noWrap" style={{ fontWeight: 'bold' }}>
    This title tag has{' '}
    <CodeInline>white-space:nowrap</CodeInline>, so it's forced
    to stay on one line.
  </h3>
</CenterH>
`;
