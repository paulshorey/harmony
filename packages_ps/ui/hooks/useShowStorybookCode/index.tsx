import { useEffect } from 'react';

export default () => {
  // runs once after element is mounted
  useEffect(() => {
    if (typeof window === 'object') {
      // @ts-ignore
      let el = window.document.querySelector(
        '.docBox-code-toggle:not(.docBox-code-toggle--expanded)'
      );
      el && el.click && el.click();
    }
  }, []);
};
