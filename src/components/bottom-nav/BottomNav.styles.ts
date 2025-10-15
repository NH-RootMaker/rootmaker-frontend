import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 100%;
  max-width: 480px;
  padding: 12px 60px 24px 60px;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: #FAFAFA;
  box-shadow: 0 -4px 4px 0 rgba(66, 206, 121, 0.25);

  ${(props) => props.theme.media.tablet} {
    max-width: 600px;
  }
  
  ${(props) => props.theme.media.desktop} {
    max-width: 768px;
  }
`;

export const NavButton = styled.button<{ $isActive?: boolean }>`
  all: unset;
  display: flex;
  min-width: 60px;
  min-height: 60px;
  padding: 8px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 12px;
  position: relative;
  z-index: 10;
  
  /* 터치 이벤트 개선 */
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  
  /* 호버/액티브 상태 */
  &:hover {
  }
  
  &:active {
    transform: none;
  }

  svg {
    width: 24px;
    height: 24px;
    pointer-events: none;
  }
`;

export const NavLabel = styled.span<{ $isActive?: boolean }>`
  ${(props) => props.theme.fonts.body.s500}
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary.gn : theme.colors.grayScale.gy600};
  transition: color 0.2s ease;
  pointer-events: none;
  user-select: none;
`;