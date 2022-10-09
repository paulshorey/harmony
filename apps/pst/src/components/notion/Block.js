import React, { useState, useEffect } from 'react';
import TextBlock from 'src/components/notion/TextBlock';
import ChildPage from 'src/components/notion/ChildPage';

export default ({ block }) => {
  if (!block) return null;
  // Is this to remove child pages after putting them into their own dedicated menu?
  if (block.object === 'block') {
    // delete block.object
    // delete block.id
    // delete block.created_time
    // delete block.last_edited_time
  } else {
    console.warn('block.object !== "block"', block);
  }
  // Render the block
  return (
    <div key={block.id} className="notionBlock">
      {parse(block)}
    </div>
  );
};

function parse(block) {
  switch (block.type) {
    case 'paragraph':
    case 'heading_1':
    case 'heading_2':
    case 'heading_3':
    case 'heading_4':
    case 'heading_5':
    case 'heading_6':
    case 'bulleted_list_item':
      return <TextBlock block={block} />;
    case 'child_page':
      return <ChildPage page={block.child_page} />;
    case 'unsupported':
      console.warn('UNSUPPORTED BLOCK TYPE', block.type, block);
      return (
        <>
          <pre>
            <h4>
              <b>Content coming soon: ["{block.type}" is not yet supported]</b>
            </h4>
            <code>{JSON.stringify(block, null, ' ')}</code>
          </pre>
        </>
      );
    default:
      console.log('UNFINISHED BLOCK', block.type, block);
      return (
        <>
          <pre>
            <h4>
              <b>Unfinished block: [{block.type}]</b>
            </h4>
            <code>{JSON.stringify(block, null, ' ')}</code>
          </pre>
        </>
      );
  }
}
