import React, { useEffect } from "react";
import { withBox } from "@/components/content/atoms/Box";
import { withButton } from "components/form/atoms/Button";
import useShowStorybookCode from "hooks/useShowStorybookCode";

export default (args: any) => {
  useShowStorybookCode();

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
  });

  return (
    <div>
      <Container variant="bgColor"></Container>
    </div>
  );
};
