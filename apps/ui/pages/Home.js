import Head from 'next/head';
import Block from '@ps/ui/components/Block';
import Code from '@ps/ui/components/Code';
import styled from '@emotion/styled';

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
        <H1>This is styled using a styled component</H1>
        <h2>This is styled using a global styled component</h2>
        <Block as="h1">Test box</Block>
        <Code
          className="bg"
          code={`ad fad dasf afdafddfsfds  dsf afds afd fds adfs afd fds`}
          language="markdown"
        />
      </main>
    </div>
  );
}
