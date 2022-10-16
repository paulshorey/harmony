import globalV from "./variants";
import colors from "@ps/ui/styles/colors";

export const argTypes = (localVariants: string[] = []) => {
  const allV = [
    ...localVariants,
    ...Object.keys({
      "-----⌃local⌃----------⌄global⌄-----": true,
      ...globalV,
    }),
  ];

  const argTypes = {
    // ref: { table: { disable: true } },
    variants: {
      control: {
        type: "multi-select",
      },
      options: allV,
    },
    variant: {
      control: {
        type: "select",
      },
      options: allV,
    },
    color: {
      control: {
        type: "select",
      },
      options: Object.keys(colors),
    },
    shade: {
      control: {
        type: "select",
      },
      options: Object.keys(colors.default || {}),
    },
    size: {
      control: {
        type: "select",
      },
      options: [""],
    },
  };

  return argTypes;
};
