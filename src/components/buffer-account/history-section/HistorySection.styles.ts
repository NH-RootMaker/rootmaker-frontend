import styled from 'styled-components';

export const Container = styled.div`
  padding: 3px 8px;
  margin-top: 120px;
  background: ${(props) => props.theme.colors.grayScale.white};
`;

export const Title = styled.h3`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 0px;
`;

export const HistoryItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.transparency.gn25};
  padding: 16px 0;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const HistoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const RoundNumber = styled.span`
  ${(props) => props.theme.fonts.body.m500}
  color: ${(props) => props.theme.colors.grayScale.gy800};
`;

export const MonthText = styled.span`
  ${(props) => props.theme.fonts.body.m500}
  color: ${(props) => props.theme.colors.grayScale.gy800};
`;

export const HistoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HistoryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HistoryLabel = styled.span`
  ${(props) => props.theme.fonts.body.m500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
`;

export const HistoryValue = styled.span`
  ${(props) => props.theme.fonts.body.m500}
  color: ${(props) => props.theme.colors.grayScale.gy800};
`;

export const AmountRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AmountRightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// 납입 금액 폰트 색
export const AmountValue = styled.span`
  ${(props) => props.theme.fonts.body.m500}
  color: ${(props) => props.theme.colors.primary.gn};
`;

export const Divider = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${(props) => props.theme.colors.grayScale.gy200};
`;
