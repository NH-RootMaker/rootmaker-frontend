import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.grayScale.white};
  border-radius: 16px;
  padding: 3px 20px;
  margin-bottom: -120px;
  ${(props) => props.theme.effects.dropShadow.dsDefault}
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -10px;
`;

export const Tag = styled.span`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  white-space: nowrap;
  margin-top: 15px;
`;

export const Title = styled.h3`
  ${(props) => props.theme.fonts.body.xl500}
  color: ${(props) => props.theme.colors.grayScale.black};
  text-align: center;
  margin-bottom: 10px;
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

export const InfoItem = styled.div<{ $isClickable?: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: ${({ $isClickable }) => $isClickable ? 'pointer' : 'default'};
  margin-bottom: 16px;
  
  /* 터치/클릭 시 하이라이트 효과 제거 */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &:focus {
    outline: none;
  }
  
  &:active {
    transform: none;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InfoLabel = styled.span`
  ${(props) => props.theme.fonts.body.xl500}
  color: ${(props) => props.theme.colors.secondary.gn};
`;

export const InfoValue = styled.span`
  ${(props) => props.theme.fonts.body.xl500}
  color: ${(props) => props.theme.colors.secondary.gn};
`;

export const ExpandIcon = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  transform: ${({ $isExpanded }) => $isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InfoDescription = styled.div`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.grayScale.gy800};
  margin-top: 15px;
  padding: 0px;
  animation: slideDown 0.2s ease;
  white-space: pre-line;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;