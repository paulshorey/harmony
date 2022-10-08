import { Component } from ".";
import _block from "./_block";
import _centered from "./_centered";
import _inline from "./_inline";
import description from "./_story.md";
import { argTypes } from "styles/storybook";
import variants from "./variants";
const variantKeys = Object.keys(variants);

export const AnyHtmlTag = _block.bind({});
AnyHtmlTag.argTypes = argTypes(variantKeys);
AnyHtmlTag.args = {
  as: "span",
  ss: "max-width: 400px; .nowrap {color: orange;}",
  variants: ["text-gradient", "border-bottom"],
  variant: "",
  color: "cta1",
  shade: "default",
};
export const Center = _centered.bind({});
Center.argTypes = argTypes(variantKeys);
Center.args = {
  as: "center",
  ss: "max-width: 400px; .nowrap {color: orange;}",
  variants: ["text-gradient"],
  variant: "",
  color: "cta1",
  shade: "default",
};
export const Code = _centered.bind({});
Code.argTypes = argTypes(variantKeys);
Code.args = {
  as: "code",
  ss: "max-width: 400px; .nowrap {color: orange;}",
  variants: ["text-gradient", "code"],
  variant: "",
  color: "cta1",
  shade: "default",
};

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
