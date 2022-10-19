import CenterH from '.';
import CodeInline from '@ps/ui/components/content/CodeInline';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';
export default (props: any) => {
  useShowStorybookCode();
  return (
    <CanvasContainer>
      <p data-color="orange">
        Use <CodeInline code={`<CodeInline code="!@#$%^&*()" />`} /> to display
        anything without having to escape each special character.
      </p>
      <p>
        You can also pass <CodeInline>props.children</CodeInline>, but then
        you'd have to escape special characters yourself.
      </p>
      <p>
        You could also add variants to this component, to give it more
        functionality. For example,{' '}
        <CodeInline variant="transparentBg">
          props.variant="transparentBg"
        </CodeInline>
        , or <CodeInline variant="noBg">props.variant="noBg"</CodeInline>, or{' '}
        <CodeInline variant="redacted">props.variant="redacted"</CodeInline>{' '}
        (redacted).
      </p>
      <p>
        If your <CodeInline variant="noBg">props.children</CodeInline> contain
        un-escaped HTML elements, by default they will be styled
        semi-transparent <CodeInline variant="noBg">opacity:0.5;</CodeInline>.
        So, you can do cool tricks like display types or annotaions next to the
        main content.
        <br />
        For example, this component accepts{' '}
        <CodeInline>
          props.children<span>: React.ReactNode</span>
        </CodeInline>{' '}
        or{' '}
        <CodeInline>
          props.code<span>: string</span>
        </CodeInline>
        .
      </p>
    </CanvasContainer>
  );
};

export const code = `import CodeInline from '@ps/ui/components/content/CodeInline';

<p data-color="orange">
  Use <CodeInline code={\`<CodeInline code="!@#$%^&*()" />\`} /> to display
  anything without having to escape each special character.
</p>
<p>
  You can also pass <CodeInline>props.children</CodeInline>, but then
  you'd have to escape special characters yourself.
</p>
<p>
  You could also add variants to this component, to give it more
  functionality. For example,{' '}
  <CodeInline variant="transparentBg">
    props.variant="transparentBg"
  </CodeInline>
  , or <CodeInline variant="noBg">props.variant="noBg"</CodeInline>, or{' '}
  <CodeInline variant="redacted">props.variant="redacted"</CodeInline>{' '}
  (redacted).
</p>
<p>
  If your{' '}
  <CodeInline variant="transparentBg">props.children</CodeInline> contain
  un-escaped HTML elements, by default they will be styled semi-transparent{' '}
  <CodeInline variant="transparentBg">opacity:0.5;</CodeInline>. So, you
  can do cool tricks like display types or annotaions next to the main
  content.
</p>
<p>
  This component accepts{' '}
  <CodeInline>
    props.children<span>: React.ReactNode</span>
  </CodeInline>{' '}
  or{' '}
  <CodeInline>
    props.code<span>: string</span>
  </CodeInline>
  .
</p>
`;
