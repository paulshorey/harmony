import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TextInline from 'src/components/notion/TextInline';
import SitePreview from 'src/components/notion/SitePreview';
import PageMention from 'src/components/notion/PageMention';
import cconsole from 'colorful-console-logger';

export default ({ block }) => {
  if (!block) return null;
  let data_id = block.id;
  let data_type = block.type;
  let data_mentioned_page = false;
  let data_mentioned_site = false;
  let el_tagName = tag(block);
  let el_className = 'notionBlockText';

  /*
   * Parse mentioned pages and sites from text
   */
  let Mentions = !(block[block.type].text || block[block.type].rich_text)
    ? []
    : (block[block.type].text || block[block.type].rich_text)
        .map((text, ti) => {
          if (
            text.mention &&
            text.mention.type === 'page' &&
            block.pageMentions &&
            block.pageMentions[text.mention.page.id]
          ) {
            data_mentioned_page = 'mentioned-page';
            return <PageMention key={ti} page={block.pageMentions[text.mention.page.id]} />;
          }
          if (
            text.text &&
            text.text.content &&
            text.text.link &&
            text.text.link.url &&
            block.sitePreviews &&
            block.sitePreviews[text.text.link.url + text.text.content]
          ) {
            data_mentioned_site = 'mentioned-site';
            return (
              <SitePreview
                key={ti}
                sitePreview={block.sitePreviews[text.text.link.url + text.text.content]}
              />
            );
          }
          return null;
        })
        .filter((item) => !!item);
  let textsLength = 0;
  el_className += ' tag-' + el_tagName;

  /*
   * Parse inline text
   */
  let Texts = !(block[block.type].text || block[block.type].rich_text)
    ? []
    : (block[block.type].text || block[block.type].rich_text)
        .map((text, ti) => {
          if (
            text.mention &&
            text.mention.type === 'page' &&
            block.pageMentions &&
            block.pageMentions[text.mention.page.id]
          ) {
            return null;
          }
          if (
            text.text &&
            text.text.content &&
            text.text.link &&
            text.text.link.url &&
            block.sitePreviews &&
            block.sitePreviews[text.text.link.url + text.text.content]
          ) {
            return null;
          }
          if (text.text && text.text.content) {
            textsLength += text.text.content.length;
          }
          return <TextInline key={ti} text={text} />;
        })
        .filter((item) => !!item);

  /*
   * only text, no links ?
   */
  // if (!Mentions || textsLength > 2) {
  //   el_className += ' length' + textsLength;
  //   if (textsLength <= 3) {
  //     el_className += ' empty';
  //   }
  // }

  /*
   * Render
   */
  if (Texts.length || Mentions.length) {
    let Styled = styled[el_tagName]``;
    return (
      <Styled
        key={el_tagName + data_id}
        className={el_className}
        data-id={data_id}
        data-type={data_type}
        data-mentioned_page={data_mentioned_page}
        data-mentioned_site={data_mentioned_site}
      >
        {Mentions}
        {Texts}
      </Styled>
    );
  } else {
    return null;
  }
};

function tag(block) {
  switch (block.type) {
    case 'paragraph':
      return 'p';
    case 'heading_1':
      return 'h2';
    case 'heading_2':
      return 'h3';
    case 'heading_3':
      return 'h4';
    case 'heading_4':
      return 'h5';
    case 'heading_5':
      return 'h6';
    case 'heading_6':
      return 'h6';
    case 'bulleted_list_item':
      return 'li';
    case 'unsupported':
      console.warn('UNSUPPORTED BLOCK TYPE', block);
      return 'h1';
    default:
      console.log('UNFINISHED BLOCK (div)', block);
      return 'div';
  }
}
