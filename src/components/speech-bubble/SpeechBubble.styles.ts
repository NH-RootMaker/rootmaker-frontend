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
  const tailWidth = '13.302px';
  const tailHeight = '11.52px';
  const shadowStyle = variant === 'info' ? `
    filter: drop-shadow(0 4px 12px rgba(66, 206, 121, 0.8));
  ` : '';
  
  switch (tailPosition) {
    case 'bottom':
      return `
        &::after {
          content: '';
          position: absolute;
          bottom: -${tailHeight};
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: ${parseFloat(tailWidth)/2}px solid transparent;
          border-right: ${parseFloat(tailWidth)/2}px solid transparent;
          border-top: ${tailHeight} solid ${backgroundColor};
          ${shadowStyle}
        }
        &::before {
          content: '';
          position: absolute;
          bottom: -${parseFloat(tailHeight) + 1}px;
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
          top: -${tailHeight};
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: ${parseFloat(tailWidth)/2}px solid transparent;
          border-right: ${parseFloat(tailWidth)/2}px solid transparent;
          border-bottom: ${tailHeight} solid ${backgroundColor};
          ${shadowStyle}
        }
        &::before {
          content: '';
          position: absolute;
          top: -${parseFloat(tailHeight) + 1}px;
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
  box-shadow: 0 1px 16px 0 rgba(66, 206, 121, 0.75);
  
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
      return getTailStyles($tailPosition, colors.background, $variant);
    }
    return '';
  }}
`;