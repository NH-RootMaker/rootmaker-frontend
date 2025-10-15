import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  

  @media (width: 375px) {
    max-height: 667px;
  }
`;

export const SlideContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  overflow-y: hidden;

  
  @media (max-width: 325px) {
    margin-top: 60px;
    padding: 0;
  }


  @media (max-width: 375px) {
    margin-top: -5px;
    padding: 0;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    margin-top: 50px;
    padding: 0;
  }

  @media (min-width: 769px) {
    margin-top: 140px;
    padding: 0;
  }
  @media (max-width:1280px) {
    margin-top: -20px;
    padding: 0;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  touch-action: pan-y;

  @media (max-width: 320px) {
    height: 400px;
    padding: 0;
    margin-bottom: 30px;
  }

  @media (min-width: 360px) and (max-width: 480px) {
    height: 520px;
    padding: 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 420px;
    padding: 0;
  }

  @media (min-width: 768px) {
    height: 600px;
    padding: 0;
  }
`;


export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 90px;

  @media (max-width: 325px) {
    margin-top: 100px;
  }

  @media (max-width: 375px) {
    margin-top: 30px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    margin-top: 65px;
  }

  @media (min-width: 769px) {
    margin-top: 120px;
  }

  @media (max-width:1280px) {
    margin-top: -10px;
  }
`;

export const ProgressDotsWrapper = styled.div`
  @media (min-width: 375px) {
    margin-bottom: -10px;
    margin-top: 50px;
  } 
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 335px;
  margin-top: 18px;
  padding: 1rem;

  @media (max-width: 375px) {
    padding: 0.75rem;
    gap: 0.75rem;
    max-width: 300px;
  }

  @media (min-width: 376px) and (max-width: 480px) {
    padding: 1rem;
  }

  @media (min-width: 540px) {
    padding: 1.5rem;
    gap: 1.25rem;
    max-width: 400px;
    margin-top: -1px;
  }
`;

export const UnderlineButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.grayScale.gy600};
  ${(props) => props.theme.fonts.body.l500};
  text-decoration: underline;
  cursor: pointer;
  
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

