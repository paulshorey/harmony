import React from "react";
import GenericComponent from "@/components/content/atoms/Box";

import Template from "./_story";
import description from "./_story.md";

export const Tailwind = Template;

export default {
  component: GenericComponent,
  id: "9",
  argTypes: {},
  isExpanded: true,
  parameters: {
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
