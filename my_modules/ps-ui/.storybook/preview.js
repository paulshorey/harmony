import AppProvider from "@/components/utils/AppProvider";
import React, { useEffect } from "react";
import { themes } from "@storybook/theming";
import Box from "@/components/content/atoms/Box";
import "@/styles/theme.css";

export const parameters = {
  docs: {
    theme: themes.dark,
  },
};

export const decorators = [
  (Story, context) => {
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
    content: 'Styled+';
    color: white;
    font-size: 1.01rem;
    font-weight: bold;
    white-space: nowrap;
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
        let el = window.top?.document.getElementById("storybook-customized-css");
        if (!el) {
          const style = document.createElement("style");
          style.id = "storybook-top-change-css";
          style.innerHTML = topCSS;
          window.top?.document.body.appendChild(style);
        }
      }
      // STORY FRAME
      {
        let el = window.selfCSS?.document.getElementById("storybook-customized-css");
        if (!el) {
          const style = document.createElement("style");
          style.id = "storybook-selfCSS-change-css";
          style.innerHTML = selfCSS;
          window.selfCSS?.document.body.appendChild(style);
        }
      }
    }, []);

    // console.log('story preview');
    return (
      <AppProvider>
        <Box onDark variant="bgGradient" ss="position:relative;overflow:auto;margin: -30px -20px;">
          <Story {...context} />
        </Box>
      </AppProvider>
    );
  },
];
