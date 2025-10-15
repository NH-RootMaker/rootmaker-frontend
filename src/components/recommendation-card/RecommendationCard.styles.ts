import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  padding: 8px 32px 8px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${(props) => props.theme.colors.grayScale.gy200};

  @media (max-width: 768px) {
    padding: 6px 24px 6px 16px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 4px 20px 4px 12px;
    gap: 8px;
  }
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

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    
    img {
      border-radius: 10px;
    }
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    
    img {
      border-radius: 8px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
    line-height: 1.4;
  }
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary.gn};
`;