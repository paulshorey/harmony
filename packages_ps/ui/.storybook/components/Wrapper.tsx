import React, { useEffect } from 'react';
import Box from '@ps/ui/components/content/Box';

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
  content: 'Coexist (CSS-and-JS)';
  color: white;
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
    <Box
      {...props}
      className={'bgGradient'}
      color="purple"
      ss={(theme) => `
        position:absolute;
        top:0;
        left:0;
        width:100%;
        padding: 3.5rem 5vw 100px;

        color: var(--color-text);

        a, .organge {
          color:orange;
        }

        em {
          color: gold;
          font-style: inherit;
          font-weight: 700;
        }

        h3 {
          font-weight: 600;
          font-size: 1rem;
        }

        a {
          text-decoration:underline;
          &:hover {
            
          }
        }
        svg {
          display: inline;
          color: var(--color-cta-text);
          padding-left: 0;
          margin-left: 0;
          height: 12px;
          width: auto;
          position: relative;
          top: 2px;
        }
        h6 {
          margin-bottom: 0;
        }
        strong {
          color: white;
          white-space: nowrap;
          font-weight: 700;
        }
        b {
          color: white;
          white-space: nowrap;
          font-weight: 600;
        }
        p {
          font-size: 0.9em;
          margin: 0.25rem 0 1.25rem;
        }
        code {
          margin: 0;
          opacity: 1;
          font-size: 0.9em;
          line-height: 1.2em;
          color: gold;
          font-weight: 700;
        }
      `}
    >
      <Box
        ss={`
        max-width: 1000px;
        margin: 0 auto;
      `}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
