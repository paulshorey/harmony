import React, { useEffect } from 'react';
import Block from '@ps/ui/components/content/Block';

const Wrapper = ({ children, ...props }) => {
  /**
   * Inject a CSS string as a <style> tag into the DOM of the window.top frame
   */
  const topCSS = `
.search-field { 
  top: -1px;
  left: -2px;
}
.sidebar-header * {
  display:none !important;
}
.sidebar-header:before {
  content: 'Storybook';
  font-size: 0.99rem;
  font-weight: bold;
  white-space: nowrap !important;
  opacity: 0.5;
}
`;

  const selfCSS = `
  * {
    border: solid 5px orange !important;
  }
  .docs-story > * { 
    margin: 0 !important;
    padding: 0 !important;
   }
`;

  const containerCSS = (props) => `

  position:absolute;
  top:0;
  left:0;
  width:100%;
  padding: 3.1rem 5vw 100px;

  &,
  p {
  font-size: 1rem;
  }

  h1 {
    margin-bottom: 0;
    font-weight: 700;
    letter-spacing: 0.6px;
  }
  h2 {
    font-weight: 600;
    letter-spacing: 0.3px;
    border:none;
    margin-bottom: -0.25rem;
    font-size: 1.46rem;
  }
  a {
    text-decoration:underline;
    &:hover {
      text-decoration:none;
    }
  }

  p {
  }

  .Code pre {
    border-radius: inherit;
    border-right: 1px solid rgba(0,0,0,0.25);
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }

  i, em {
    font-weight: 600;
  }

  h3 {
    font-weight: 600;
    font-size: 1rem;
  }

  h6 {
    margin-bottom: 0;
  }
  
  strong {
    font-weight: 700;
  }
  b {
    font-weight: 600;
  }

  code {
    color: var(--color-accent);
    margin: 0;
    opacity: 1;
    font-size: 0.9em;
    line-height: 1.2em;
    font-weight: 700;
    background:none;
    border:none;
    padding:0;
  }
`;

  useEffect(() => {
    // TOP FRAME
    {
      let el = window.top?.document.getElementById('storybook-customized-css');
      if (!el) {
        const style = document.createElement('style');
        style.id = 'storybook-top-change-css';
        style.innerHTML = topCSS;
        window.top?.document.body.appendChild(style);
      }
    }
    // STORY FRAME
    {
      let el = window.selfCSS?.document.getElementById(
        'storybook-customized-css'
      );
      if (!el) {
        const style = document.createElement('style');
        style.id = 'storybook-selfCSS-change-css';
        style.innerHTML = selfCSS;
        window.selfCSS?.document.body.appendChild(style);
      }
    }
  }, []);

  return (
    <Block bgcolor="purple" textcolor="light" ss={containerCSS} {...props}>
      <Block
        ss={`
        max-width: 1000px;
        margin: 0 auto;
      `}
      >
        {children}
      </Block>
    </Block>
  );
};

export default Wrapper;
