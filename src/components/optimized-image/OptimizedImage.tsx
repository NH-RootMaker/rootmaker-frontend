import { useState, useCallback, useEffect } from 'react';
import { useLoadingStore } from '@/stores/useLoadingStore';
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
  useGlobalLoading?: boolean; // 전역 로딩 사용 여부
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
  useGlobalLoading = false,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { setLoading } = useLoadingStore();

  // 이미지 preload 최적화
  const preloadImage = (src: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  };

  // Priority 이미지는 즉시 로드 및 preload
  useEffect(() => {
    if (priority) {
      setIsIntersecting(true);
      // 중요한 이미지는 preload
      preloadImage(src);
    }
  }, [priority, src]);

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

  // 전역 로딩 상태 관리
  useEffect(() => {
    if (!useGlobalLoading) return;
    
    const shouldLoad = loading === 'eager' || priority || isIntersecting;
    
    if (shouldLoad && !isLoaded && !hasError) {
      setLoading(true, '로딩중');
    } else {
      setLoading(false);
    }
  }, [useGlobalLoading, loading, priority, isIntersecting, isLoaded, hasError, setLoading]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (useGlobalLoading) {
      setLoading(false);
    }
    onLoad?.();
  }, [onLoad, useGlobalLoading, setLoading]);

  const handleError = useCallback(() => {
    setHasError(true);
    if (useGlobalLoading) {
      setLoading(false);
    }
    onError?.();
  }, [onError, useGlobalLoading, setLoading]);

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
          loading={priority ? 'eager' : loading}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      ) : (
        <div data-src={src} style={{ width, height }} />
      )}
    </S.ImageContainer>
  );
};

export default OptimizedImage;