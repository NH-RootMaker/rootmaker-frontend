import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  @media (max-width: 768px) {
    min-height: 50vh;
  }

  @media (max-width: 480px) {
    min-height: 40vh;
  }
`;

export const Title = styled.h1`
  ${(props) => props.theme.fonts.header.h1}
  margin-top: 4rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary.gn};

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  @media (min-width:390px){
    padding-top: 0.875rem;
  }

  @media (min-width:410px){
    padding-top: 2.875rem;
  }

  


`;

export const Description = styled.p`
  ${(props) => props.theme.fonts.body.l400}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin-top: 1rem;
  margin-bottom: 2rem;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
`;


export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 2rem;
  padding-bottom: 120px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 280px;
    margin-top: 1.5rem;
    padding-bottom: 100px;
  }

  @media (max-width: 480px) {
    max-width: 260px;
    margin-top: 1rem;
    padding-bottom: 80px;
    padding: 0 1rem;
    gap: 12px;
  }
`;

export const Notice = styled.p`
  ${(props) => props.theme.fonts.body.m600}
  color: ${(props) => props.theme.colors.primary.gn};
  text-align: center;
  margin: 0;
`;

export const UnderlineButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.grayScale.gy600};
  ${(props) => props.theme.fonts.body.l500};
  text-decoration: underline;
  cursor: pointer;
  margin-top: 8px;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const MockupImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 280px;

  @media (max-width: 768px) {
    width: 60%;
    max-width: 250px;
  }

  @media (max-width: 480px) {
    width: 70%;
    max-width: 200px;
  }
`;

export const WelcomeMessage = styled.div`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.black};
  text-align: center;
  margin-bottom: 0.5rem;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;