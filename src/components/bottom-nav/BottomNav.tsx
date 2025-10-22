import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './BottomNav.styles';
import { getNavItems } from './nav-items';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = getNavItems(); // 동적으로 네비게이션 아이템 가져오기

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <S.Nav>
      {navItems.map((item) => {
        let isActive = location.pathname === item.path;
        
        // buffer 관련 페이지들에서 coin 아이콘 활성화
        if (item.id === 'subscription') {
          isActive = location.pathname === item.path || 
                    location.pathname === '/buffer-empty' || 
                    location.pathname === '/my-subscription';
        }
        
        return (
          <S.NavButton
            key={item.id}
            $isActive={isActive}
            onClick={() => handleNavigate(item.path)}
          >
            {isActive ? item.activeIcon : item.defaultIcon}
            <S.NavLabel $isActive={isActive}>
              {item.label}
            </S.NavLabel>
          </S.NavButton>
        );
      })}
    </S.Nav>
  );
};

export default BottomNav;