import React from 'react';
import Homepage from 'src/components/templates/Home';
import Header from 'src/components/layout/organisms/Header';
import Footer from 'src/components/layout/organisms/Footer';
import AppProvider from 'src/providers/AppProvider';

const AboutPage = ({}) => {
  let pageContext = {};

  return (
    <AppProvider page={pageContext}>
      <Header />
      <Homepage />
      <Footer />
    </AppProvider>
  );
};
export default AboutPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
AppProvider;
