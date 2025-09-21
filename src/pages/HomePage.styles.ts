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
  ${(props) => props.theme.fonts.header.h1}
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
`;

export const Description = styled.p`
  ${(props) => props.theme.fonts.body.l400}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin-top:1rem;
  white-space: pre-wrap;
`;


export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 133px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 300px;
`;

export const Notice = styled.p`
  ${(props) => props.theme.fonts.body.m600}
  color: ${(props) => props.theme.colors.primary.gn};
  text-align: center;
  margin: 0;
`;

export const TeamLegacy = styled.p`
  ${(props) => props.theme.fonts.body.m400}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  text-align: center;
  margin-top: px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;