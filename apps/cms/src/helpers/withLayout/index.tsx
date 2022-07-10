import React from 'react';

const withLayout = (Layout: any, props?: any) =>
  function WithLayout(page: any) {
    return <Layout {...props}>{page}</Layout>;
  };

export default withLayout;
