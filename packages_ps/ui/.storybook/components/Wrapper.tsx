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
  content: 'Harmony UI';
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

  color: var(--color-text);

  h1 {
    margin-bottom: 0;
    font-weight: 700;
    letter-spacing: 0.6px;
    > span {
      text-shadow: 1px 1px 1px hsl(255deg 38% 20% / 10%);
    }
  }
  h2 {
    font-weight: 700;
    letter-spacing: 0.3px;
    border:none;
    margin-bottom: -0.25rem;
    text-shadow: 1px 1px 1px hsl(255deg 38% 20% / 10%);
  }
  a {
    color:var(--color-cta);
    text-decoration:underline;
    &:hover {
      text-decoration:none;
    }
  }

  p {
    text-shadow: 1px 1px 1px hsl(255deg 38% 20% / 10%);}

  .Code pre {
    border-radius: inherit;
    border-right: 1px solid rgba(0,0,0,0.25);
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }

  i, em {
    font-weight: 600;
    // color: gold;
    // font-style: inherit;
    // font-weight: 700;
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

  p {
    font-size: 0.9em;
  }

  code {
    color: var(--color-notice);
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
    <Box {...props} variant="bgGradient" data-color="purple" ss={containerCSS}>
      <Box
        data-color="ondark"
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
