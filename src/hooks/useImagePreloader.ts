import { useEffect, useState } from 'react';

/**
 * 이미지 preloading 훅
 * 주어진 이미지 URL들을 미리 로드하여 캐시에 저장
 */
export const useImagePreloader = (imageUrls: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsAllLoaded(true);
      return;
    }

    const preloadImage = (url: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
      });
    };

    const preloadImages = async () => {
      const loadPromises = imageUrls.map(async (url) => {
        try {
          await preloadImage(url);
          setLoadedImages(prev => new Set(prev).add(url));
          return url;
        } catch (error) {
          console.warn(`Failed to preload image: ${url}`);
          return null;
        }
      });

      await Promise.allSettled(loadPromises);
      setIsAllLoaded(true);
    };

    preloadImages();
  }, [imageUrls]);

  return {
    loadedImages,
    isAllLoaded,
    isImageLoaded: (url: string) => loadedImages.has(url),
  };
};

/**
 * 다음 질문의 이미지들을 미리 로드하는 훅
 */
export const useNextQuestionPreloader = (currentQuestionIndex: number, questions: any[]) => {
  const nextQuestionImages = [];
  
  // 다음 질문이 있으면 해당 이미지들을 preload 리스트에 추가
  if (currentQuestionIndex + 1 < questions.length) {
    const nextQuestion = questions[currentQuestionIndex + 1];
    if (nextQuestion.imageA) nextQuestionImages.push(nextQuestion.imageA);
    if (nextQuestion.imageB) nextQuestionImages.push(nextQuestion.imageB);
  }
  
  return useImagePreloader(nextQuestionImages);
};