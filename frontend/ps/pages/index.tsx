import React from 'react';
import HomeTemplate from 'components/templates/Home';
import Head from 'next/head';
import PageContext from 'context/Page';
import cconsole from '@ps/cconsole';

export default function HomePage() {
  const pageContext = {};
  cconsole.success('homepage loaded');
  return (
    <PageContext.Provider value={pageContext}>
      <HomeTemplate />
    </PageContext.Provider>
  );
}
