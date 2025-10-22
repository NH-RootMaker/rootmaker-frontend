import { useEffect, useState } from 'react';
import { useLoadingStore } from '@/stores/useLoadingStore';

// 페이지 렌더링 완료 감지 훅
export const usePageReady = (deps: any[] = []) => {
  const [isReady, setIsReady] = useState(false);
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    // 페이지 로드 시작
    setLoading(true, '로딩중');
    setIsReady(false);

    // 다음 프레임에서 렌더링 완료 체크
    const timer = setTimeout(() => {
      // DOM이 업데이트된 후 실행
      requestAnimationFrame(() => {
        setIsReady(true);
        setLoading(false);
      });
    }, 100); // 최소 로딩 시간

    return () => {
      clearTimeout(timer);
    };
  }, deps);

  return isReady;
};

// 컴포넌트 마운트 완료 감지 훅
export const useComponentReady = (delay: number = 50) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        setIsReady(true);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isReady;
};

// 이미지들이 모두 로드될 때까지 대기하는 훅
export const useImagesReady = (imageUrls: string[]) => {
  const [isReady, setIsReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsReady(true);
      return;
    }

    setLoadedCount(0);
    setIsReady(false);

    const loadImage = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // 에러여도 계속 진행
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage)).then(() => {
      setIsReady(true);
    });
  }, [imageUrls]);

  return isReady;
};