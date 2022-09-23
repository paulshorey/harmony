import React, { useState, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';
import Link from 'src/components/notion/Link';

const style = (theme, color) => css`
  ${color ? `color: ${color};` : ''}
`;

const TextComponent = ({ text }) => {
  const theme = useTheme();
  if (!text || !text.annotations) return null;

  let anno = text.annotations;
  let content = '';
  if (text.text && text.text.content) {
    content = text.text.content;
    if (content.substring(0, 3) === ' - ') {
      content = content.substr(3);
    }
    content = content.replace(/\n/g, '<br />').trim();
  }
  if (!content) return null;
  if (content && content[0] === '—') {
    return null;
  }

  let Tag = tag(anno);
  let Text = (
    <Tag
      className="notionText"
      css={style(theme, anno.color)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
  if (text.text && text.text.link) {
    return <Link link={text.text.link}>{Text}</Link>;
  }
  return Text;
};

function tag(anno) {
  if (anno.bold) return 'b';
  if (anno.italic) return 'i';
  if (anno.strikethrough) return 'strike';
  if (anno.underline) return 'u';
  if (anno.code) return 'code';
  return 'span';
}

export default TextComponent;
