import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './BottomNav.styles';
import { NAV_ITEMS } from './nav-items';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <S.Nav>
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        
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