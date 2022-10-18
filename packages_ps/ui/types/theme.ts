export type theme = {
  variants?: Record<string, ssProp>;
  fonts: Record<string, string>;
  mq: Record<string, string>;
  globalStyles: Record<string, ssProp>;
  instance: any;
};

export default theme;
