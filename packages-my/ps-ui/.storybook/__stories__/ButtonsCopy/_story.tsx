import React, { useEffect } from 'react';
import { withBlock } from '../../../components/content/atoms/Block';
import { withButton } from '../../../components/form/atoms/Button';

const Container = withBlock({
  ss: (theme) =>
    `padding: 1.2rem 1rem 1.9rem; ${
      theme.instance.variants['bg-gradient'] && `padding-top: 1.3rem;`
    }`,
});
const Content = withBlock({ ss: `padding: 0` });
const Title = withBlock({
  class: 'text-gradient',
  ss: `padding: 0.125rem 0 0 0.25rem;`,
});
const Button = withButton({
  ss: `margin: 1rem 1rem 0rem 0.25rem;`,
  onClick: () => console.log('click'),
  onFocus: () => console.log('focus'),
});

export default (args: any) => {
  useEffect(() => {
    if (typeof window === 'object') {
      let el = window.document.querySelector('.docblock-code-toggle');
      // @ts-ignore
      el && el.click && el.click();
    }
  }, []);

  return (
    <div>
      <Container className="bg-white color-cta1">
        <Title>on light:</Title>
        <Content>
          <Button
            className="bg-gradient"
            onClick={() => console.log('clicked CTA #1')}
            {...args}
          >
            gradient cta1
          </Button>
          <Button className="text-gradient" {...args}>
            default cta1
          </Button>
          <Button {...args}>default</Button>
          <Button className="link" {...args}>
            link
          </Button>
          <Button className="disabled" {...args}>
            disabled
          </Button>
        </Content>
      </Container>

      <Container className="bg-gradient">
        <Title color="cta2">on dark:</Title>
        <Content>
          <Button
            className="bg-gradient"
            color="cta2"
            onClick={() => console.log('clicked CTA #2')}
            {...args}
          >
            gradient cta2
          </Button>
          <Button className="text-gradient" color="cta2" {...args}>
            default cta2
          </Button>
          <Button {...args}>default</Button>
          <Button className="link" color="cta2" {...args}>
            link
          </Button>
          <Button className="disabled" color="cta2" {...args}>
            disabled
          </Button>
        </Content>
      </Container>
    </div>
  );
};

export const code = `import { withBlock } from '../../../components/content/atoms/Block';
import { withButton } from '../../../components/form/atoms/Button';

...

const Container = withBlock({
  ss: (theme) =>
    \`padding: 1.1rem 1rem 1.9rem; \${
      theme.instance.variants.bg-gradient && \`padding-top: 1.3rem;\`
    }\`,
});
const Content = withBlock({ ss: \`padding: 0\` });
const Title = withBlock({
  variant: 'text-gradient',
  ss: \`padding: 0.125rem 0 0 0.25rem;\`,
});
const Button = withButton({
  ss: \`margin: 1rem 1rem 0rem 0.25rem;\`,
  // 👇 All buttons will console.log when clicked or focused.
  // Notice in the code, a unique prop is passsed to each "bg-gradient cta" button.
  // So, clicking "bg-gradient cta" will not log "click". Each has its own handler.
  onClick: () => console.log('click'),
  onFocus: () => console.log('focus'),
  // This also: set by default, but will be overwritten in the first container.
  shade: "onDark",
});

...

<Container className="bg-solid">
  <Title>on light:</Title>
  <Content>
    <Button className="bg-gradient" onClick={() => console.log('clicked CTA #1')} {...args}>
      gradient cta1
    </Button>
    <Button {...args}>
      default cta1
    </Button>
    <Button {...args}>default</Button>
    <Button className="link" {...args}>
      link
    </Button>
    <Button className="disabled" {...args}>
      disabled
    </Button>
  </Content>
</Container>

<Container className="bg-gradient">
  <Title color="cta2">on dark:</Title>
  <Content>
    <Button className="bg-gradient" color="cta2" onClick={() => console.log('clicked CTA #2')} {...args}>
      gradient cta2
    </Button>
    <Button color="cta2" {...args}>
      default cta2
    </Button>
    <Button {...args}>default</Button>
    <Button className="link" color="cta2" {...args}>
      link
    </Button>
    <Button className="disabled" color="cta2" {...args}>
      disabled
    </Button>
  </Content>
</Container>
`;
