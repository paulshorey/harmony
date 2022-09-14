import React, { useContext } from 'react';
import { css } from '@emotion/react';
import PageContext from 'src/context/Page';
import HtmlToReact from 'src/components/atoms/HtmlToReact';

/*
 * Display disclosure superscripts + text paragraphs in footer
 */
const DisclosureText = ({ disId, symbol = '', showName = false }) => {
  const pageContext = useContext(PageContext) || {};
  // IMPORTANT:
  // If received bad inputs, the build/deployment should fail.
  if (!disId) {
    throw new Error(
      'src/components/disclosures/atoms/DisclosureNumber: disId is required! Should be superscript number like ¹.'
    );
  }
  if (!pageContext.disclosuresAllTextsById || !pageContext.disclosuresAllTextsById[disId]) {
    throw new Error(
      'src/components/disclosures/atoms/DisclosureNumber: disId does not match any disclosure text in database.'
    );
  }
  const disclosureText = pageContext.disclosuresAllTextsById[disId];
  const disclosureName = pageContext.disclosuresAllNamesById[disId];

  return (
    <p className={`Disclosure`}>
      {symbol}
      {!!showName && disclosureName && (
        <span className={`disclosureName`}>
          "<b>{disclosureName}</b>" -{' '}
        </span>
      )}
      <HtmlToReact html={disclosureText} variant={'inline'} />
    </p>
  );
};

export default DisclosureText;
