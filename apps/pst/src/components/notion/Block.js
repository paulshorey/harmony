import React, { useState, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';
import BlockText from 'src/components/notion/BlockText';
import PageChild from 'src/components/notion/PageChild';

const style = (theme) => css`
  margin: 10px 0 12px;
  //> p {
  //  padding: 25px 0 30px;
  //}
  > p {
    margin: 10px 0 12px;
  }

  pre {
    font-size: 12px;
  }

  .notionSitePreview + span br,
  .notionSitePreview + p br {
    display: none;
  }
`;

export default ({ block }) => {
  if (!block) return null;

  if (block.object === 'block') {
    // delete block.object
    // delete block.id
    // delete block.created_time
    // delete block.last_edited_time
  } else {
    console.warn('BLOCK.OBJECT !== "BLOCK"', block);
  }

  return (
    <div className="notionBlock" css={style}>
      {tag(block)}
      {!(
        block.type === 'paragraph' ||
        block.type === 'child_page' ||
        block.type.substring(0, 7) === 'heading' ||
        block.type === 'unsupported'
      ) && (
        <pre>
          <code>{JSON.stringify(block, null, ' ')}</code>
        </pre>
      )}
    </div>
  );
};

function tag(block) {
  switch (block.type) {
    case 'paragraph':
    case 'heading_1':
    case 'heading_2':
    case 'heading_3':
    case 'heading_4':
    case 'heading_5':
    case 'heading_6':
      return <BlockText block={block} />;
    case 'child_page':
      return <PageChild page={block.child_page} />;
    case 'unsupported':
      console.warn('UNSUPPORTED BLOCK TYPE', block);
      return (
        <>
          <pre>
            <code>Content coming soon! [some Notion.so types are not yet supported]</code>
          </pre>
          {/*<pre><code>{JSON.stringify(block, null, ' ')}</code></pre>*/}
        </>
      );
    default:
      console.log('UNFINISHED BLOCK', block);
      return (
        <>
          <pre>
            <code>Content coming soon! [unfinished content type]</code>
          </pre>
          {/*<pre><code>{JSON.stringify(block, null, ' ')}</code></pre>*/}
        </>
      );
  }
}
