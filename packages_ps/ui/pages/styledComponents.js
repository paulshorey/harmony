import Head from "next/head";
import styled from "@emotion/styled";
import Box from "@ps/ui/components/content/atoms/Box";

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
        <Box as="h1">Test box</Box>
      </main>
    </div>
  );
}
