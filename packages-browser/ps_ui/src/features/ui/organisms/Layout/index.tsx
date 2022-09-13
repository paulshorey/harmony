import Box from '@ps/ui/src/features/common/atoms/Box';
import { NextRouter } from 'next/router';
import React, { FC, memo, ReactNode } from 'react';
import theme from 'src/styles/theme';

import Breadcrumbs, { breadcrumb } from '../../../common/atoms/Breadcrumbs';
import ColumnLayout from '../../molecules/ColumnLayout';
import NavMenuDesktop from '../../molecules/NavMenuDesktop';
import NavMenuMobile from '../../molecules/NavMenuMobile';
import Header from '../Header';

export type LayoutProps = {
  breadcrumbs?: (router?: NextRouter) => breadcrumb[];
  children: ReactNode;
  isOneColumn?: boolean;
  noFooter?: boolean;
  noLeftMenu?: boolean;
};

const Layout: FC<LayoutProps> = ({
  breadcrumbs,
  children,
  isOneColumn,
  noFooter,
  noLeftMenu,
}) => {
  return (
    <ColumnLayout
      footer={
        noFooter ? undefined : (
          <Box
            bottom="0"
            data-testid="menu-mobile"
            display={{ md: 'none', xs: 'block' }}
            left="0"
            position="sticky"
            right="0"
            zIndex={theme.zIndex.nav}
          >
            <NavMenuMobile />
          </Box>
        )
      }
      header={<Header />}
      isOneColumn={isOneColumn}
      leftColumn={
        noLeftMenu ? undefined : (
          <Box width="100%">
            <NavMenuDesktop />
          </Box>
        )
      }
      preheader={<>{breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}</>}
      stickyPreheader={Boolean(breadcrumbs)}
    >
      {children}
    </ColumnLayout>
  );
};

export default memo(Layout);
