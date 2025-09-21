import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${(props) => props.theme.fonts.body.m400}
  color: ${(props) => props.theme.colors.grayScale.gy600};
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 40px 30px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ResultHeader = styled.div`
  text-align: left;
  margin-top: 24px;
  width: 100%;
  max-width: 400px;
`;

export const ResultTitle = styled.h1`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-top: 24px;
  margin-bottom: -1px;
`;

export const ResultType = styled.h2`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin: 0;
`;

export const ResultTypeHighlight = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

export const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin-bottom: 40px;
`;

export const ResultImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.secondary.yg};
  margin-top: 50px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResultDescription = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 40px;
  margin-top: 15px;
  
  p {
    ${(props) => props.theme.fonts.body.l600}
    color: ${(props) => props.theme.colors.grayScale.gy600};
    line-height: 1.6;
    margin: 0 0 20px 0;
    white-space: pre-wrap;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

