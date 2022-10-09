import { Component } from ".";
import _box from "./_box";
// import _centered from "./_centered";
// import _code from "./_code";
import description from "./_description.md";
import { argTypes } from "styles/storybook";
import variants from "./variants";
const variantKeys = Object.keys(variants);

export const Box = _box.bind({});
Box.argTypes = argTypes(variantKeys);
Box.args = {
  as: "span",
  ss: ".nowrap {color: orange;}",
  variants: ["textGradient", "borderBottom"],
  variant: "",
  color: "cta1",
  shade: "default",
};
// export const Usage = _centered.bind({});
// Usage.argTypes = argTypes(variantKeys);
// Usage.args = {
//   ss: "max-width: 400px; .nowrap {color: orange;}",
//   variants: ["textGradient", "center"],
//   variant: "",
//   color: "cta1",
//   shade: "default",
// };
// export const Code = _code.bind({});
// Code.argTypes = argTypes(variantKeys);
// Code.args = {
//   as: "code",
//   ss: "max-width: 400px; .nowrap {color: orange;}",
//   variants: ["textGradient", "code"],
//   variant: "",
//   color: "cta1",
//   shade: "default",
// };

export default {
  component: Component,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: description,
      },
      source: {
        code: ``,
      },
    },
  },
};
