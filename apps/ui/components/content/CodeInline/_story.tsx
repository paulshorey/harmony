import CodeInline from '@ps/ui/components/content/CodeInline';
import Block from '@ps/ui/components/content/Block';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

export default (props) => {
  useShowStorybookCode();
  return (
    <CanvasContainer bggradient="light" textcolor="dark">
      <p data-textcolor="accent">
        Use{' '}
        <CodeInline
          code={`<CodeInline code="!@#$%^&*()" {...props} />`}
          {...props}
        />{' '}
        to display anything without having to escape each special character.
      </p>
      <p>
        You can also pass <CodeInline {...props}>props.children</CodeInline>,
        but then you'd have to escape special characters yourself.
      </p>
      <p>
        You could also add variants to this component, to give it more
        functionality. For example,{' '}
        <CodeInline {...props} variant="transparentBg">
          props.variant="transparentBg"
        </CodeInline>
        , or{' '}
        <CodeInline {...props} variant="noBg">
          props.variant="noBg"
        </CodeInline>
        , or{' '}
        <CodeInline {...props} variant="redacted">
          props.variant="redacted"
        </CodeInline>
      </p>
      <p>
        If your{' '}
        <CodeInline {...props} variant="noBg">
          props.children
        </CodeInline>{' '}
        contain un-escaped HTML elements, by default they will be styled
        semi-transparent{' '}
        <CodeInline {...props} variant="noBg">
          opacity:0.5;
        </CodeInline>
        . So, you can do cool tricks like display types or annotaions next to
        the main content.
        <br />
        For example, this component accepts{' '}
        <CodeInline {...props}>
          props.children<span>: React.ReactNode</span>
        </CodeInline>{' '}
        or{' '}
        <CodeInline {...props}>
          props.code<span>: string</span>
        </CodeInline>
        .
      </p>
    </CanvasContainer>
  );
};

export const code = `import CodeInline from '@ps/ui/components/content/CodeInline';

<p color="accent">
  Use <CodeInline {...props} code={\`<CodeInline {...props} code="!@#$%^&*()" />\`} /> to display
  anything without having to escape each special character.
</p>
<p>
  You can also pass <CodeInline {...props}>props.children</CodeInline>, but then
  you'd have to escape special characters yourself.
</p>
`;
