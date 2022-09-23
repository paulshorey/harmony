import React, { useState, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';
import Text from 'src/components/notion/Text';
import SitePreview from 'src/components/notion/SitePreview';
import PageMention from 'src/components/notion/PageMention';
// import Card from 'src/components/html/Card';

const style = (theme) => css`
  br:first-of-type,
  br:last-of-type {
    display: none;
  }
`;

export default ({ block }) => {
  if (!block) return null;
  const theme = useTheme();
  let BlockTag = 'div';
  let BlockClass = 'notionBlockText';
  let BlockMentions = '';
  let Mentions = block[block.type].text
    .map((text, ti) => {
      if (
        text.mention &&
        text.mention.type === 'page' &&
        block.pageMentions &&
        block.pageMentions[text.mention.page.id]
      ) {
        BlockMentions = 'page';
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
        BlockMentions = 'site';
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
  let TextsClass = '';
  let TextsTag = tag(block);
  BlockClass += ' tag-' + TextsTag;
  let Texts = block[block.type].text
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
      return <Text key={ti} text={text} />;
    })
    .filter((item) => !!item);

  if (Mentions.length) {
    // OutputTag = Card;
  } else {
    Mentions = null;
  }
  // console.warn('Texts', Texts);
  if (!Mentions || textsLength > 2) {
    TextsClass += ' length' + textsLength;
    if (textsLength <= 3) {
      TextsClass += ' empty';
    }
    Texts = (
      <TextsTag className={TextsClass} css={style(theme)}>
        {Texts}
      </TextsTag>
    );
  } else {
    Texts = null;
  }

  if (BlockMentions) {
    BlockClass += ' mentions-' + BlockMentions;
    // BlockTag = Card;
  }
  if (!Texts && !Mentions) {
    return null;
  } else {
    return (
      <BlockTag className={BlockClass}>
        {Mentions}
        {Texts}
      </BlockTag>
    );
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
    case 'unsupported':
      console.warn('UNSUPPORTED BLOCK TYPE', block);
      return 'h1';
    default:
      console.log('UNFINISHED BLOCK', block);
      return 'h1';
  }
}
