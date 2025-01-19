import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark';

interface UserStore {
  theme: Theme;
  toggleTheme: () => void;
  openedRouteGroups: string[];
  updateOpenedRouteGroups: (tabId: string) => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      theme: 'dark',
      toggleTheme: () =>
        set({
          theme: get().theme === 'light' ? 'dark' : 'light',
        }),
      openedRouteGroups: [],
      updateOpenedRouteGroups: (tabId: string) => {
        const openedRouteGroups = get().openedRouteGroups;

        const updatedOpenedRouteGroups = openedRouteGroups.includes(tabId)
          ? openedRouteGroups.filter((id) => id !== tabId)
          : [...openedRouteGroups, tabId];

        set({
          openedRouteGroups: updatedOpenedRouteGroups,
        });
      },
    }),
    {
      name: 'user-store',
    }
  )
);
