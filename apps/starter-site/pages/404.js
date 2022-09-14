import React from 'react';
import AppProvider from 'src/providers/AppProvider';
import Error404Template from 'src/components/templates/404';
import Footer from 'src/components/layout/organisms/Footer';
import Header from 'src/components/layout/organisms/Header';

const NotFoundPage = ({}) => {
  const pageContext = {};

  return (
    <AppProvider page={pageContext}>
      <Header />
      <Error404Template />
      <Footer />
    </AppProvider>
  );
};
export default NotFoundPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
