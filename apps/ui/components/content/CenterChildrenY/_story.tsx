import CenterV from '.';
import CodeInline from '@ps/ui/components/content/CodeInline';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

const Story = (props) => {
  useShowStorybookCode();
  return (
    <CanvasContainer>
      <CenterV {...props}>
        <p>
          Any children you pass to this component will be centered vertically.
          They can contain other components and even complex layouts.
        </p>
        <p>
          This{' '}
          <CodeInline textcolor="accent">&lt;CenterChildrenY&gt;</CodeInline>{' '}
          component must have a height greater than the children's height, or it
          won't do anything.
        </p>
      </CenterV>
    </CanvasContainer>
  );
};
export default Story;

export const code = `import CenterV from '@ps/ui/components/content/CenterV';

<CenterV ss="min-height:440px;">
  <p>
    Any children you pass to this component will be centered vertically.
    They can contain other components and even complex layouts.
  </p>
  <p>
    One requirement: you must set a minimum height on this{' '}
    <CodeInline textcolor="accent">&lt;CenterChildrenY&gt;</CodeInline> component
    that's greater than the children's height. Otherwise it won't do
    anything.
  </p>
</CenterV>
`;
