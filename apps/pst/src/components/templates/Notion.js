import React from 'react';
import Block from 'src/components/notion/Block';
import Main from 'src/components/html/Main';
import Header from 'src/components/html/Header';

const TemplateNotion = ({ page }) => {
  if (!page || !page.blocks || !page.id || !page.title) {
    return (
      <pre>
        <code>{JSON.stringify(page, null, ' ')}</code>
      </pre>
    );
  }

  return (
    <div className={'templatesNotion'}>
      <Header>
        {page.url !== '/' && (
          <>
            <a href="/">TECHY.TOOLS</a> /{' '}
          </>
        )}
        {page.parent_page_url && (
          <>
            <a href={(page.parent_page_url !== '/blog' ? '/blog' : '') + page.parent_page_url}>
              {page.parent_page_title}
            </a>{' '}
            /{' '}
          </>
        )}
        {page.title}
        <sup>{page.id}</sup>
      </Header>

      <Main variant="full">
        {page.blocks.map((block, bi) => (
          <Block key={bi} block={block} />
        ))}
      </Main>
    </div>
  );
};
export default TemplateNotion;
