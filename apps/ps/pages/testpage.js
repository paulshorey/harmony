import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import CenterChildrenV from '@ps/ui/components/layout/CenterChildrenV';
import CenterChildrenH from '@ps/ui/components/layout/CenterChildrenH';

export default function Home() {
  const H1 = styled.h1`
    color: red;
  `;
  return (
    <div>
      <Head>
        <title>Styled Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CenterChildrenV ss="height:100vh;">
          <CenterChildrenH>
            <H1>Page not found</H1>
          </CenterChildrenH>
        </CenterChildrenV>
      </main>
    </div>
  );
}
