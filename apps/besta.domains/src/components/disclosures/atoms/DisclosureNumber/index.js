import React, { useEffect, useContext } from 'react';
import { css } from '@emotion/react';
import PageContext from 'src/context/Page';
import { supToNum, numToSup } from 'src/functions/disclosures';

/*
 * Display disclosure superscript, and remember all disclosures that were used so far in the page

See also: 
  src/components/disclosures/atoms/Disclosures - renders the disclosure texts in the footer. 
  src/components/disclosures/atoms/DisclosureText - only renders the disclosure text by id, and doesn't do anything fancy.
  src/components/atoms/HtmlToReact - is the most clever part, where <DisclosureNumber disId={sup} /> is embedded live, interactively, into each blog post HTML string, and other HTML strings. 
  src/data/pageMeta.js - where disclosures data is fetched (this file also fetches data for meta tags of the current page)

Both of them use React's Context as a global state. It's very clever usage, relying on JavaScript's passing objects by reference instead of copying. Even React's Context, even on the server-side-generating, Webpack keeps the same object for PageContext no matter what component it is on. So, I found that it is actually reliable practice to modify it! Adding keys to it works reliably, even on server-side! 

Each DisclosureNumber on the page first reads the global Context and determines if disId (superscript number) has been used before. If it's been used before, then this renders that superscript exactly the same and moves on. If the disId (superscript number) has not been used before, then this component renders an incremented superscript number immediately, inline, and adds it to the list of disclosures on page. Later in the footer, src/components/disclosures/atoms/Disclosures also reads that data, and determines which disclosures texts to render, in the order in which they appeared on the current page.

 */
const DisclosureNumber = ({ disId, hidden, symbol }) => {
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
  /*
   * Which superscript to render? *¹²³
   */
  let superscript = '';
  if (typeof symbol !== 'undefined') {
    // specify a symbol/number to show
    // could be "*" or "†" or "‡" or regular "¹"
    superscript = symbol;
  } else if (pageContext.disclosuresSuperscriptsOnPageById[disId]) {
    // already showed this disclosure
    // keep the same number
    superscript = pageContext.disclosuresSuperscriptsOnPageById[disId];
  } else {
    // new disclosure
    // increment number and show number superscript, like ¹ ² ³
    pageContext.disclosureNumbersUsedInPage++; // increment number
    superscript = numToSup(pageContext.disclosureNumbersUsedInPage); // show number as a superscript
  }
  pageContext.disclosuresSuperscriptsOnPageById[disId] = superscript; // save number
  return (
    <>
      <a
        name={`supDisclosure${superscript}`}
        css={css`
          position: relative;
          top: -120px;
        `}
      />
      <span
        onClick={() => {
          window.location.hash = `#disFooterA${superscript}`;
          setTimeout(() => {
            window.location.hash = '#d';
          }, 1000);
        }}
        css={css`
          display: inline-block;
          vertical-align: top;
          font-weight: inherit;
          font-size: 95%;
          margin: 0;
          padding: 0;
          font-family: system-ui, helvetica, 'HelveticaNeue', sans-serif;
          opacity: 1;
          padding-left: 0.05em;
          ${!!hidden &&
          `
          display:none;`}
        `}
      >
        {superscript}
      </span>
    </>
  );
};
export default DisclosureNumber;
