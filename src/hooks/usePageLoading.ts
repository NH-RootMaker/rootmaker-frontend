import { useEffect } from 'react';
import { useLoadingStore } from '@/stores/useLoadingStore';

// 페이지 로딩 관리 훅
export const usePageLoading = (isLoading: boolean, message?: string) => {
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(isLoading, message);
  }, [isLoading, message, setLoading]);
};

// 데이터 로딩 관리 훅
export const useDataLoading = () => {
  const { setLoading } = useLoadingStore();

  const startLoading = (message?: string) => {
    setLoading(true, message);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return { startLoading, stopLoading };
};

// 이미지 로딩 관리 훅
export const useImageLoading = (imageCount: number = 1) => {
  const { setLoading } = useLoadingStore();
  let loadedCount = 0;

  const onImageLoad = () => {
    loadedCount++;
    if (loadedCount >= imageCount) {
      setLoading(false);
    }
  };

  const startImageLoading = (message = '이미지 로딩중') => {
    loadedCount = 0;
    setLoading(true, message);
  };

  return { onImageLoad, startImageLoading };
};