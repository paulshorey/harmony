export type theme = {
  variants?: Record<string, ssProp>;
  fonts?: Record<string, string>;
  mq?: Record<string, string>;
  globalStyles?: Record<string, ssProp>;
};

export default theme;
