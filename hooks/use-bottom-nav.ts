import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface BottomNavState {
  activeNavId: string | null;
  isExpanded: boolean;
  isMoreMenuOpen: boolean;
  expandedAccordions: Set<string>;
  setActiveNav: (id: string | null) => void;
  switchToNav: (id: string) => void;
  setExpanded: (expanded: boolean) => void;
  setMoreMenuOpen: (open: boolean) => void;
  toggleAccordion: (id: string) => void;
  setExpandedAccordions: (ids: string[]) => void;
  resetState: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useBottomNav = create<BottomNavState>()(
  persist(
    (set) => ({
      activeNavId: null,
      isExpanded: false,
      isMoreMenuOpen: false,
      expandedAccordions: new Set<string>(),
      _hasHydrated: false,

      setHasHydrated: (state) => set({ _hasHydrated: state }),

      setActiveNav: (id) =>
        set({
          activeNavId: id
        }),

      switchToNav: (id) =>
        set({
          activeNavId: id,
          isExpanded: true,
          isMoreMenuOpen: false
        }),

      setExpanded: (expanded) =>
        set({
          isExpanded: expanded
        }),

      setMoreMenuOpen: (open) =>
        set({
          isMoreMenuOpen: open,
          isExpanded: false
        }),

      toggleAccordion: (id) =>
        set((state) => {
          const newSet = new Set(state.expandedAccordions);
          if (newSet.has(id)) {
            newSet.delete(id);
          } else {
            newSet.add(id);
          }
          return { expandedAccordions: newSet };
        }),

      setExpandedAccordions: (ids) =>
        set({
          expandedAccordions: new Set(ids)
        }),

      resetState: () =>
        set({
          activeNavId: null,
          isExpanded: false,
          isMoreMenuOpen: false,
          expandedAccordions: new Set<string>()
        })
    }),
    {
      name: 'bottom-nav-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        activeNavId: state.activeNavId
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export const useBottomNavHydration = () => {
  return useBottomNav((state) => state._hasHydrated);
};
