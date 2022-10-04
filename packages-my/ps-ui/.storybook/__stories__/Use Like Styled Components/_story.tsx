import React, { useEffect } from 'react';
import { withBlock } from '../../../components/content/atoms/Block';
import { withButton } from '../../../components/form/atoms/Button';
import useShowStorybookCode from '../../../hooks/useShowStorybookCode';

export default (args: any) => {
  useShowStorybookCode();

  const Container = withBlock({
    ss: (theme) =>
      `padding: 1.2rem 1rem 1.9rem; ${
        theme.instance.variants.bgGradient && `padding-top: 1.3rem;`
      }`,
  });
  const Content = withBlock({ ss: `padding: 0` });
  const Title = withBlock({
    variant: 'textGradient',
    ss: `padding: 0.125rem 0 0 0.25rem;`,
  });
  const Button = withButton({
    ss: `margin: 1rem 1rem 0rem 0.25rem;`,
  });

  return (
    <div>
      <Container variant="bgColor">
        <Title color="cta1">on light:</Title>
        <Content>
          <Button variant="bgGradient" color="cta1" {...args}>
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
        <Title color="cta2">on gradient:</Title>
        <Content>
          <Button variant="bgGradient" color="cta2" {...args}>
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

      <Container variant="bgColor" shade="onDark">
        <Title shade="onDark">on dark:</Title>
        <Content>
          <Button variant="bgGradient" color="cta1" {...args}>
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
    </div>
  );
};
