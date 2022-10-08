import { Component } from ".";
import Template from "./_story";
import description from "./_story.md";
import { argTypes } from "styles/storybook";
import variants from "./variants";
const variantKeys = Object.keys(variants);
const args = {
  ss: "",
  variants: ["border-bottom", "text-gradient"],
  variant: "",
  color: "cta1",
  shade: "",
};

export const Link = Template.bind({});
Link.argTypes = argTypes(variantKeys);
Link.args = args;

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
