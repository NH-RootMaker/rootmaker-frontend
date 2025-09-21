import styled from 'styled-components';

export const Container = styled.header<{ $opacity?: boolean }>`
  display: flex;
  width: 100vw;
  height: 3.875rem;
  padding: 0rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  box-sizing: border-box;
`;

export const LeftSection = styled.div<{
  $opacity?: boolean;
  $whiteIcons?: boolean;
  $isSearchMode?: boolean;
}>`display: flex;
align-items: center;
justify-content: flex-start;
flex: ${(props) => (props.$isSearchMode ? 'none' : '1')};
margin-right: ${(props) => (props.$isSearchMode ? '1.5rem' : '0')};
margin-left: 10px;

svg {
  filter: ${({ $whiteIcons }) => ($whiteIcons ? 'brightness(0) invert(1)' : 'none')};
}
`;

export const RightSection = styled.div<{ $opacity?: boolean; $whiteIcons?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-top: 3px;
  margin-right: 10px;
  margin-bottom: 2px;

  svg {
    filter: ${({ $whiteIcons }) => ($whiteIcons ? 'brightness(0) invert(1)' : 'none')};
  }
`;


export const Title = styled.p<{ $opacity?: boolean }>`
  ${(props) => props.theme.fonts.header.h3}
  text-align: center;
  color: ${(props) => props.theme.colors.grayScale.black};
`;
