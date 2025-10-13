import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${(props) => props.theme.colors.grayScale.gy200};
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin-bottom: 20px;
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary.gn};
`;