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
  min-height: 100vh;
  padding: 40px 30px 150px 30px;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.grayScale.white};

  @media (max-width: 320px) {
    padding: 32px 20px 150px 20px;
  }
`;

export const ResultHeader = styled.div`
  text-align: left;
  margin-top: 24px;
  width: 100%;
  max-width: 400px;
  

  @media (max-width: 320px) {
    margin-top: 16px;
    max-width: 280px;
  }
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
  margin-bottom: 20px;
  margin-top: 0;
`;

export const ResultImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: transparents;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    margin-top: -70px;
    width: 50px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 450px;
    height: 450px;
  }
`;

export const ResultImage = styled.img`
  object-fit: contain;
`;

export const ResultDescription = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 0px;
  margin-top: 15px;
  
  p {
    ${(props) => props.theme.fonts.body.l600}
    color: ${(props) => props.theme.colors.grayScale.gy600};
    line-height: 1.6;
    margin: 0 0 0px 0;
    white-space: pre-wrap;
  }
`;


export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  width: calc(100vw - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  z-index: 10;
  
  ${(props) => props.theme.media.tablet} {
    max-width: 768px;
  }
  
  ${(props) => props.theme.media.desktop} {
    max-width: 1200px;
  }
`;

