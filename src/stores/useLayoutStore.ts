import { create } from 'zustand';

interface LayoutState {
  isTopNav: boolean;
  isBottomNav: boolean;
}

interface LayoutAction {
  setIsTopNav: (state: boolean) => void;
  setIsBottomNav: (state: boolean) => void;
  setIsNav: (state: boolean) => void; // 기존 호환성을 위해 유지
}

export const useLayoutStore = create<LayoutState & LayoutAction>()((set) => ({
  isTopNav: true,
  isBottomNav: true,
  setIsTopNav: (state) => set({ isTopNav: state }),
  setIsBottomNav: (state) => set({ isBottomNav: state }),
  setIsNav: (state) => set({ isTopNav: state, isBottomNav: state }), // 기존 호환성
}));
