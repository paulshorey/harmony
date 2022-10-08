import { useEffect } from 'react';
export default () => {
  // runs once on dom ready
  useEffect(() => {
    if (typeof window === 'object') {
      let el = window.document.querySelector(
        '.docblock-code-toggle:not(.docblock-code-toggle--expanded)'
      );
      // @ts-ignore
      el && el.click && el.click();
    }
  }, []);
};
