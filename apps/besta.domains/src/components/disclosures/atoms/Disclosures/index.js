import React, { useEffect, useContext, useState } from 'react';
import { css } from '@emotion/react';
import { sort_objects_by_property } from 'src/functions/objects';
import PageContext from 'src/context/Page';
import { supToNum, numToSup } from 'src/functions/disclosures';

const styles = {
  wrapper: () => css`
    .supDisclosureFooter {
      font-size: 1.125em;
      line-height: 1.5em;
      margin-right: 1px;
    }
  `,
};

const filterDisclosures = function (pageContext) {
  let disclosuresToShow = [];
  for (let id in pageContext.disclosuresSuperscriptsOnPageById) {
    if (!pageContext.disclosuresAllTextsById[id]) continue;
    let superscript = pageContext.disclosuresSuperscriptsOnPageById[id];
    disclosuresToShow.push({
      id: superscript,
      text: pageContext.disclosuresAllTextsById[id],
      name: pageContext.disclosuresAllNamesById[id],
    });
  }
  return disclosuresToShow;
};

const sortDisclosures = function (disclosuresAll) {
  // convert superscript str to Number,
  // so we can sort by number (1, 2, 3, 11, 12) instead of by string ('¹', '¹¹', '¹²', '²', '³')
  let sortedDisclosures = [];
  for (let dis of disclosuresAll) {
    let id = dis.id;
    let text = dis.text.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '');
    let num = supToNum(id) || 0;
    sortedDisclosures.push({ num, id, text, name: dis.name });
  }
  // sort array of objects by num
  sort_objects_by_property(sortedDisclosures, 'num', 'asc');
  return sortedDisclosures;
};

/*
 * Display disclosure superscripts + text paragraphs in footer
 */
const Disclosures = ({ className = '', showNames = false }) => {
  const pageContext = useContext(PageContext) || {};
  if (!pageContext.disclosuresAll || !pageContext.disclosuresSuperscriptsOnPageById) return null;
  const disclosuresToShow = sortDisclosures(filterDisclosures(pageContext));

  return (
    <section className={'Disclosures ' + className} css={styles.wrapper}>
      <div id="footerDisclosures">
        {disclosuresToShow.map((dis, i) => {
          return (
            <div key={'dis' + i}>
              <a
                name={`disFooterA${dis.id}`}
                css={css`
                  position: relative;
                  top: -120px;
                `}
              />
              <p className={`disFooterP disFooterP${dis.id}`}>
                <span
                  onClick={() => {
                    window.location.hash = `#supDisclosure${dis.id}`;
                    setTimeout(() => {
                      window.location.hash = '#d';
                    }, 1000);
                  }}
                  css={css`
                    position: absolute;
                    width: 100px;
                    height: 50px;
                  `}
                />
                {dis.id && <span className={`supDisclosureFooter`}>{dis.id}&nbsp;</span>}

                {!!showNames && dis.name && (
                  <span className={`disclosureName`}>
                    "<b>{dis.name}</b>" -{' '}
                  </span>
                )}
                <span
                  key={dis.id}
                  className="footerDisclosure"
                  dangerouslySetInnerHTML={{ __html: dis.text }}
                />
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Disclosures;
