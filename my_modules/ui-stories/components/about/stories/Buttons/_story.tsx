import React, { useEffect } from "react";
import { withBox } from "@/components/content/atoms/Box";
import { withButton } from "components/form/atoms/Button";

const Container = withBox({
  ss: (theme) => `padding: 1.2rem 1rem 1.9rem; ${theme.instance.variants["bgGradient"] && `padding-top: 1.3rem;`}`,
});
const Content = withBox({ ss: `padding: 0` });
const Title = withBox({
  variant: "textGradient",
  ss: `padding: 0.125rem 0 0 0.25rem;`,
});
const Button = withButton({
  ss: `margin: 1rem 1rem 0rem 0.25rem;`,
  onClick: () => console.log("click"),
  onFocus: () => console.log("focus"),
});

export default (args: any) => {
  useEffect(() => {
    if (typeof window === "object") {
      let el = window.document.querySelector(".docBox-code-toggle");
      // @ts-ignore
      el && el.click && el.click();
    }
  }, []);

  return (
    <div>
      <Container variant="bgWhite">
        <Title color="cta1">on light:</Title>
        <Content>
          <Button variant="bgGradient" color="cta1" onClick={() => console.log("clicked CTA #1")} {...args}>
            gradient cta1
          </Button>
          <Button variant="textGradient" color="cta1" {...args}>
            default cta1
          </Button>
          <Button {...args}>default</Button>
          <Button variant="link" color="cta1" {...args}>
            link
          </Button>
          <Button variant="disabled" color="cta1" {...args}>
            disabled
          </Button>
        </Content>
      </Container>

      <Container variant="bgGradient" color="cta1">
        <Title onDark color="cta2">
          on dark:
        </Title>
        <Content>
          <Button onDark variant="bgGradient" color="cta2" onClick={() => console.log("clicked CTA #2")} {...args}>
            gradient cta2
          </Button>
          <Button onDark variant="textGradient" color="cta2" {...args}>
            default cta2
          </Button>
          <Button onDark {...args}>
            default
          </Button>
          <Button onDark variant="link" color="cta2" {...args}>
            link
          </Button>
          <Button onDark variant="disabled" color="cta2" {...args}>
            disabled
          </Button>
        </Content>
      </Container>
    </div>
  );
};

export const code = `import { withBox } from 'components/content/atoms/Box';
import { withButton } from 'components/form/atoms/Button';

...

const Container = withBox({
  ss: (theme) =>
    \`padding: 1.1rem 1rem 1.9rem; \${
      theme.instance.variants.bgGradient && \`padding-top: 1.3rem;\`
    }\`,
});
const Content = withBox({ ss: \`padding: 0\` });
const Title = withBox({
  variant: 'textGradient',
  ss: \`padding: 0.125rem 0 0 0.25rem;\`,
});
const Button = withButton({
  ss: \`margin: 1rem 1rem 0rem 0.25rem;\`,
  // 👇 All buttons will console.log when clicked or focused.
  // Notice in the code, a unique prop is passsed to each "bgGradient cta" button.
  // So, clicking "bgGradient cta" will not log "click". Each has its own handler.
  onClick: () => console.log('click'),
  onFocus: () => console.log('focus'),
  // This also: set by default, but will be overwritten in the first container.
  on: "dark",
});

...

<Container variant="bgColor">
  <Title color="cta1">on light:</Title>
  <Content>
    <Button variant="bgGradient" color="cta1" onClick={() => console.log('clicked CTA #1')} {...args}>
      gradient cta1
    </Button>
    <Button color="cta1" {...args}>
      default cta1
    </Button>
    <Button {...args}>default</Button>
    <Button variant="link" color="cta1" {...args}>
      link
    </Button>
    <Button variant="disabled" color="cta1" {...args}>
      disabled
    </Button>
  </Content>
</Container>

<Container variant="bgGradient" color="cta1">
  <Title color="cta2">on dark:</Title>
  <Content>
    <Button variant="bgGradient" color="cta2" onClick={() => console.log('clicked CTA #2')} {...args}>
      gradient cta2
    </Button>
    <Button color="cta2" {...args}>
      default cta2
    </Button>
    <Button {...args}>default</Button>
    <Button variant="link" color="cta2" {...args}>
      link
    </Button>
    <Button variant="disabled" color="cta2" {...args}>
      disabled
    </Button>
  </Content>
</Container>
`;
