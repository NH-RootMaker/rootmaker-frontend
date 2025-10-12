import * as S from './TopNav.styles';

import type { HeaderProps } from './TopNav.types';
import { useNavigate } from 'react-router-dom';

// import BackIcon from '@/assets/icons/Back.svg?react';


/**
 * 공통 헤더 컴포넌트
 */
const TopNav : React.FC<HeaderProps> = ({
  isBack = false,
  // isClose = false,
  title,
  // onCloseClick,
  onBackClick,
  backPath = -1,
  opacity = false,
  transparent = false,
  whiteBackground = false,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
      return;
    }
    if (typeof backPath === 'number') {
      navigate(backPath);
    } else if (typeof backPath === 'string') {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Container $transparent={transparent} $whiteBackground={whiteBackground}>
      <S.LeftSection $opacity={opacity}>
        {isBack ? (
          <img 
            src="/assets/icons/Back.svg"
            alt="뒤로가기"
            style={{ cursor: 'pointer', width: '0.95rem', height: '0.95rem' }}
            onClick={handleBack}
          />
        ) : null}
      </S.LeftSection>

      {title && <S.Title $opacity={opacity}>{title}</S.Title>}
      
      <S.RightSection $opacity={opacity}>
        {/* 오른쪽 섹션 - 빈 공간으로 중앙 정렬을 위해 유지 */}
      </S.RightSection>
    </S.Container>
  );
};

export default TopNav;