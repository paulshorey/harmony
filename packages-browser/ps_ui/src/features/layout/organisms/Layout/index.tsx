import React, { FC, memo, ReactNode } from 'react';

export type LayoutProps = {
  backgroundImage?: string;
  children: ReactNode;
  isOneColumn?: boolean;
  noFooter?: boolean;
  noLeftMenu?: boolean;
  noRightMenu?: boolean;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default memo(Layout);
