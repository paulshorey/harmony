import AppProvider from "@/components/utils/AppProvider";
import React, { useEffect } from "react";
import { themes } from "@storybook/theming";

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
    const injectCSS = `
  .search-field { 
    top: -1px;
    left: -2px;
  }
  .sidebar-header * {
    display:none !important;
  }
  .sidebar-header:before {
    content: 'Styling Systems';
    color: white;
    font-size: 1.01rem;
    font-weight: bold;
    white-space: nowrap;
    opacity: 0.5;
  }
  `;
    useEffect(() => {
      // let el = document.getElementById('storybook-customized-css');
      // if (!el) {
      const style = document.createElement("style");
      // style.id = 'storybook-customized-css'
      style.innerHTML = injectCSS;
      window.top?.document.body.appendChild(style);
      // }
    }, []);

    // console.log('story preview');
    return (
      <AppProvider>
        <Story {...context} />
      </AppProvider>
    );
  },
];
