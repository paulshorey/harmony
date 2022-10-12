module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-addon-next", "./addons/expand-all/register.js"],
  framework: "@storybook/react",
  staticDir: ["../public"],
  core: {
    builder: "webpack5",
  },
};
