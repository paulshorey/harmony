import { useEffect } from 'react';
import uiState, { uiStateType } from 'state/uiState';
import ThemeProvider from './ThemeProvider';

const AppProvider = ({ children }) => {
  const ui = uiState((state) => state as uiStateType);
  useEffect(() => {
    /*
     * Color scheme (global UI state is remembered in localStorage)
     */
    window.document.body.dataset.color = ui.colorSchemes[ui.colorSchemeIndex];
    window.document.body.dataset.bggradient = true;
    window.document.body.dataset.fgcolor = true;
    /*
     * Track user interactions with the page (for analytics)
     */
    window.addEventListener('click', () => {
      ui.clicksIncrement();
    });
  }, [ui.colorSchemeIndex]);

  /*
   * The pageContext will be available globally, set by each page.
   * It holds meta data for branding, page titles/subtitles, A/B variants, etc.
   */
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
