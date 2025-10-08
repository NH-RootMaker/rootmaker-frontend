import styled from 'styled-components';

interface SpeechBubbleContainerProps {
  $variant?: 'pine' | 'cherry' | 'maple' | 'apple' | 'info';
  $size?: 'small' | 'medium' | 'large';
  $tailPosition?: 'bottom' | 'top';
}

const getVariantColors = (variant: string, theme: any) => {
  switch (variant) {
    case 'pine':
      return {
        background: theme.colors.grayScale.white,
        text: theme.colors.trees.pine
      };
    case 'cherry':
      return {
        background: theme.colors.grayScale.white,
        text: theme.colors.trees.cherry
      };
    case 'maple':
      return {
        background: theme.colors.grayScale.white,
        text: theme.colors.trees.maple
      };
    case 'apple':
      return {
        background: theme.colors.grayScale.white,
        text: theme.colors.trees.apple
      };
    case 'info':
      return {
        background: theme.colors.grayScale.white,
        text: theme.colors.trees.pine
      };
    default:
      return {
        background: theme.colors.grayScale.white,
        text: theme.colors.trees.pine
      };
  }
};

const getSizeStyles = (size: string, theme: any) => {
  switch (size) {
    case 'small':
      return `
        ${theme.fonts.body.m600}
        padding: 8px 12px;
        border-radius: 12px;
      `;
    case 'medium':
      return `
        ${theme.fonts.body.m600}
        padding: 12px 20px;
        border-radius: 40px;
      `;
    default:
      return `
        ${theme.fonts.body.m600}
        padding: 12px 16px;
        border-radius: 40px;
      `;
  }
};

const getTailStyles = (tailPosition: string, backgroundColor: string, variant?: string) => {
  const tailSize = '9px';
  const shadowStyle = variant === 'info' ? `
    filter: drop-shadow(0 0 16px rgba(66, 206, 121, 0.75));
  ` : '';
  
  switch (tailPosition) {
    case 'bottom':
      return `
        &::after {
          content: '';
          position: absolute;
          bottom: -${tailSize};
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: ${tailSize} solid transparent;
          border-right: ${tailSize} solid transparent;
          border-top: ${tailSize} solid ${backgroundColor};
          ${shadowStyle}
        }
        &::before {
          content: '';
          position: absolute;
          bottom: -${parseInt(tailSize) + 1}px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          z-index: -1;
        }
      `;
    case 'top':
      return `
        &::after {
          content: '';
          position: absolute;
          top: -${tailSize};
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: ${tailSize} solid transparent;
          border-right: ${tailSize} solid transparent;
          border-bottom: ${tailSize} solid ${backgroundColor};
          ${shadowStyle}
        }
        &::before {
          content: '';
          position: absolute;
          top: -${parseInt(tailSize) + 1}px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          z-index: -1;
        }
      `;
    default:
      return '';
  }
};

export const SpeechBubbleContainer = styled.div<SpeechBubbleContainerProps>`
  position: relative;
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  white-space: pre-line;
  margin-top: 20px;
  ${(props) => props.theme.effects.dropShadow.dsDefault}
  
  ${({ $variant = 'pine', theme }) => {
    const colors = getVariantColors($variant, theme);
    return `
      background: ${colors.background};
      color: ${colors.text};
    `;
  }}
  
  ${({ $size = 'medium', theme }) => getSizeStyles($size, theme)}
  
  ${({ $tailPosition, $variant = 'pine', theme }) => {
    if ($tailPosition) {
      const colors = getVariantColors($variant, theme);
      return getTailStyles($tailPosition, colors.background);
    }
    return '';
  }}
`;