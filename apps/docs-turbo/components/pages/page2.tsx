/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Container } from "../Container";

export default function Confirm() {
  return (
    <>
      <Head>
        <title>TEST Page2</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <div className="container mx-auto">
          <div className="pt-20 mx-auto ">
            <div className="max-w-md mx-auto rounded-lg shadow-xl dark:bg-gray-900 dark:bg-opacity-80">
              <div className="p-6 rounded-lg shadow-sm ">
                <div className="mx-auto space-y-4 dark:text-white">
                  <h2 className="text-xl font-bold">Page2</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
