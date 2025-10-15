import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 3.875rem;
  overflow-x: hidden;

  
  @media (max-width: 480px) {
    padding-top: 3.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom:20px;
  background: ${(props) => props.theme.colors.grayScale.white};
  
  @media (max-width: 480px) {
  }
`;

export const WelcomeSection = styled.section`
  margin-bottom: 3rem;
  padding: 2rem 0rem;
  margin-left: 12px;

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

export const Title = styled.h1`
  ${(props) => props.theme.fonts.header.h2};
  color: ${(props) => props.theme.colors.grayScale.black};
  white-space: pre-wrap;
  text-align: left;
  margin-left: 12px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

export const Subtitle = styled.p`
  ${(props) => props.theme.fonts.body.l400};
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin-top: -5px;
  text-align: left;
  margin-left: 12px;
  line-height: 1.6;
  white-space: pre-line;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  gap: 1.5rem;
  overflow-x: hidden;
  
  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
    gap: 1.25rem;
  }
`;

export const BottomSection = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:19px;

  @media (min-width: 375px) {
    margin-top: 120px;
    margin-left: 16px;
  }
  @media (min-width: 480px) {
    margin-top: 200px;
    margin-left: 16px;
  }
`;

export const ProgressDotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  margin-top: 0px;
  
  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  width: 100%;
  
  @media (max-width: 480px) {
    margin-left: 16px;
    padding-right: 16px;
    margin-bottom: 16px;
  }
`;