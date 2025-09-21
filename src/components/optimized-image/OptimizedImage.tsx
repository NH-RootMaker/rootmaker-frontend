import { useState, useCallback, useEffect } from 'react';
import * as S from './OptimizedImage.styles';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * 최적화된 이미지 컴포넌트
 * - preload 지원
 * - lazy loading
 * - loading placeholder
 * - error fallback
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading = 'lazy',
  priority = false,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Priority 이미지는 즉시 로드
  useEffect(() => {
    if (priority) {
      setIsIntersecting(true);
    }
  }, [priority]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager' || priority || isIntersecting) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    const imgElement = document.querySelector(`[data-src="${src}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, loading, priority, isIntersecting]);

  // Preload priority images
  useEffect(() => {
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [src, priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const shouldLoad = loading === 'eager' || priority || isIntersecting;

  if (hasError) {
    return (
      <S.ErrorFallback style={{ width, height, ...style }} className={className}>
        <S.ErrorText>이미지를 불러올 수 없습니다</S.ErrorText>
      </S.ErrorFallback>
    );
  }

  return (
    <S.ImageContainer style={{ width, height, ...style }} className={className}>
      {!isLoaded && shouldLoad && (
        <S.LoadingPlaceholder>
          <S.LoadingSpinner />
        </S.LoadingPlaceholder>
      )}
      
      {shouldLoad ? (
        <S.Image
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          $isLoaded={isLoaded}
          loading={loading}
          decoding="async"
        />
      ) : (
        <div data-src={src} style={{ width, height }} />
      )}
    </S.ImageContainer>
  );
};

export default OptimizedImage;