import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  margin-top: 10rem;

  @media (max-width: 768px) {
    min-height: 50vh;
  }

  @media (max-width: 480px) {
    min-height: 40vh;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary.gn};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 2rem;
`;

export const StartButton = styled.button`
  width: 300px;
  padding: 0.75rem 2rem;
  background-color: ${(props) => props.theme.colors.primary.gn};
  color: ${(props) => props.theme.colors.grayScale.white};
  border-radius: 24px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1rem;
  margin-top: 100px;
`;