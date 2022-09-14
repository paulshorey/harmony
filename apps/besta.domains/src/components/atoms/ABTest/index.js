import React, { useContext } from 'react';
import ABTestContext from 'src/context/ABTest';
import PageContext from 'src/context/Page';
/**
 * A/B Testing - render only one variant.
 * See usage in pages/ab-test-enabled.js
 * @param name {String} - name of experiment
 * @param variants {Array<any>} - list of JSX elements
 *    IMPORTANT: must be in the same order as PageContext.experiments[name].variants
 * @param forceVariantIndex {Number} - For unit testing, use forceVariantIndex to specify which variant should render. If no context.
 *
 * NOTE:
 *    In PageContext, define which experiements to enable, which variant to use:
 *        pageContext.experiments = {
 *           "ExperimentName": {
 *             name: "ExperimentName",
 *             variants: ["A", "B", "C"],
 *             variant: "A", // which variant to render
 *           }
 *        }
 *
 * NOTE:
 *    ABTestContext contains current experiment info, for analytics.
 *    ABTestContext is not related to PageContext, but they are often used together.
 *    PageContext is used throughout the codebase, mostly for analytics and SEO.
 *    PageContext contains general meta data about the webpage, including AB tests.
 *
 * WARNING:
 * WARNING:
 * WARNING:
 *    Do not put src/components/atoms/Meta inside of src/components/atoms/ABTest. Don't know why, but doing so breaks Meta's page context.
 */
const ABTest = ({ name, variants = [], forceVariantIndex = -1 }) => {
  let selectedIndex = -1;
  let selectedLabel = '';
  // read data from page context
  const contextPage = useContext(PageContext);
  // if experiment is disabled, always render first variant
  const exp = contextPage?.experiments?.[name];
  if (!exp || !exp.variant || exp.variant === 'disabled') {
    forceVariantIndex = 0;
  }
  // if experiment is DISABLED, render variant as a normal component, without experiment context
  if (forceVariantIndex !== -1) {
    return <>{variants[forceVariantIndex]}</>;
  }
  // if experiment is ENABLED, do not render on server-side, wait until variant is ready
  if (typeof window === 'undefined') {
    return null;
  }
  // 1) experiment is defined in page context, select variant by variant
  if (selectedIndex === -1 && exp && exp.variants && 'variant' in exp) {
    selectedIndex = exp.variants.indexOf(exp.variant);
    selectedLabel = exp.variant;
  }
  // 2) disabled (no experiment)
  if (selectedIndex === -1) {
    if (forceVariantIndex !== -1) {
      // render the default variant without context
      return <>{variants[forceVariantIndex]}</>;
    } else {
      // render nothing
      return null;
    }
  }
  // render experiment - and selected variant
  return (
    <ABTestContext.Provider value={{ name: name, variant: selectedLabel }}>
      {variants[selectedIndex]}
    </ABTestContext.Provider>
  );
};

export default ABTest;
