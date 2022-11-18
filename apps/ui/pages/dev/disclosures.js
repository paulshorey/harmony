import React from 'react';
import getPageMeta from 'src/data/pageMeta';
import DisclosuresAll from 'src/features/disclosures/templates/DisclosuresAll';
import AppProvider from 'src/components/organisms/AppProvider';
const ApyPage = ({ pageMeta }) => {
  let pageContext = {
    ...pageMeta,
  };

  return (
    <AppProvider page={pageContext}>
      <DisclosuresAll />
    </AppProvider>
  );
};

export default ApyPage;

export async function getStaticProps() {
  return {
    props: {
      pageMeta: await getPageMeta({ path: '/disclosures/apy' }),
    },
  };
}
