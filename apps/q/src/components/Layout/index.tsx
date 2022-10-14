/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

export default qwikify$(({ children }) => {
  return <div className="layout">{children}</div>;
});
