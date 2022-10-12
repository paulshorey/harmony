import { useEffect } from "react";
export default () => {
  // runs once on dom ready
  useEffect(() => {
    if (typeof window === "object") {
      let el = window.document.querySelector(".docBox-code-toggle:not(.docBox-code-toggle--expanded)");
      // @ts-ignore
      el && el.click && el.click();
    }
  }, []);
};
