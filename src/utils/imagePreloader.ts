// 이미지 preloading을 위한 유틸리티
export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  const promises = imageUrls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  });
  
  return Promise.all(promises);
};

// 주요 이미지들 preload
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/wateringset.webp',
    '/Onboarding1.webp',
    '/Onboarding2.webp',
    '/Onboarding3.webp',
    '/coinset.webp',
    '/sprout.webp',
  ];
  
  return preloadImages(criticalImages);
};

// Lottie 애니메이션 preload
export const preloadLottieAnimation = async (): Promise<any> => {
  try {
    const response = await fetch('/Confetti Effects Lottie Animation.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to preload Lottie animation:', error);
    return null;
  }
};