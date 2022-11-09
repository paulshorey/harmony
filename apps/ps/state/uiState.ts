import { persist } from 'zustand/middleware';
import create from 'zustand';

export type uiStateType = {
  colorSchemes: Array<{
    bggradient: string;
    textcolor: string;
    colorscheme: string;
  }>;
  colorSchemeIndex: number;
  colorSchemeIndexToggle: () => void;
  clicks: number;
  clicksIncrement: () => void;
};

const ui = create(
  persist(
    (set, get) => ({
      /*
       * Color schemes
       */
      colorSchemes: [
        {
          colorscheme: 'light',
          bggradient: 'light',
          bgcolor: 'light',
          textcolor: 'dark',
        },
        {
          colorscheme: 'dark',
          bggradient: 'purple',
          bgcolor: 'purple',
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
      name: 'ui-cache2',
    }
  )
);

export default ui;
