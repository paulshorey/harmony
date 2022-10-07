import "../styles/globals.css";
import "../styles/globals.scss";
import AppProvider from "@/components/AppProvider";
import React, { useEffect } from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    query: {
      foo: "this-is-a-global-override",
    },
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
