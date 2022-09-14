import React from 'react';
import MarkdownIt from 'markdown-it';
import HtmlToReact from 'src/components/atoms/HtmlToReact';
const markdownToHTML = MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
  typographer: false,
});

const Markdown = ({ str = '', tag = 'div', variant = '', className = '' }) => {
  str = str.replace(/[\s]+/g, ' ');
  let html = markdownToHTML.render(str);
  const TagName = `${tag}`;
  return (
    <TagName className={'Markdown ' + className}>
      <HtmlToReact html={html} variant={variant} />
    </TagName>
  );
};

export default Markdown;
