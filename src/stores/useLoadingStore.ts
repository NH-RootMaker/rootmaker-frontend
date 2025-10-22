import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  loadingMessage: string;
  setLoading: (loading: boolean, message?: string) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  loadingMessage: '로딩중',
  setLoading: (loading, message = '로딩중') => 
    set({ isLoading: loading, loadingMessage: message }),
}));