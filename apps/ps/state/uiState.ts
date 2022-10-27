import { persist } from 'zustand/middleware';
import create from 'zustand';

export type uiStateType = any;

export default create(
  persist(
    (set, get) => ({
      /*
       * Color schemes
       */
      colorSchemes: [
        {
          bggradient: 'light',
          textcolor: 'dark',
        },
        {
          bggradient: 'purple',
          textcolor: 'light',
        },
      ],
      colorSchemeIndex: 1,
      colorSchemeIndexToggle: () => {
        const state = get() as uiStateType;
        state.colorSchemeIndex = state.colorSchemeIndex === 0 ? 1 : 0;
        return set({ ...state });
      },
      /*
       * Count product usage before displaying paywall/CTA
       */
      clicks: 3,
      clicksIncrement: () => {
        const state = get() as uiStateType;
        state.clicks++;
        return set({ ...state });
      },
    }),
    {
      name: 'ui-cache',
    }
  )
);
