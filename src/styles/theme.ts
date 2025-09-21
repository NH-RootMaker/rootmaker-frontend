import { css } from 'styled-components';

const createFontStyle = (
  size: number,
  weight: number,
  lineHeightPercent: number,
  letterSpacing: number = 0,
) => css`
  font-family:
    pretendard,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: ${size}rem;
  font-style: normal;
  font-weight: ${weight};
  line-height: ${lineHeightPercent}%;
  letter-spacing: ${letterSpacing}rem;
`;

const colors = {
  primary: {
    gn: '#42CE7A',
  },
  secondary: {
    yg: '#ECFFE2',
    gn: '#1D8163',
    lb: '#C8EEFF',
    sk: '#4CBAEB',
  },
  grayScale: {
    white: '#FAFAFA',
    gy50: '#F4F4F4',
    gy100: '#F6F7F8',
    gy200: '#ECEDEF',
    gy400: '#C2C3C8',
    gy600: '#79797F',
    gy800: '#55555A',
    black: '#141416',
  },
  transparency: {
    gn25: 'rgba(66, 206, 121, 0.25)',
    gn50: 'rgba(66, 206, 121, 0.50)',
    gn75: 'rgba(66, 206, 121, 0.75)',
    bl25: 'rgba(76, 186, 235, 0.25)',
    bl75: 'rgba(76, 186, 235, 0.75)',
    wt50: 'rgba(250, 250, 250, 0.50)',
    wt75: 'rgba(250, 250, 250, 0.75)',
  },
};

const fonts = {
  body: {
    xl400: createFontStyle(1, 400, 150, 0), // 16px, 400, 150%
    xl500: createFontStyle(1, 500, 150, 0), // 16px, 500, 150%
    l400: createFontStyle(0.875, 400, 150, 0), // 14px, 400, 150%
    l500: createFontStyle(0.875, 500, 150, 0), // 14px, 500, 150%
    l600: createFontStyle(0.875, 600, 150, 0), // 14px, 600, 150%
    m400: createFontStyle(0.75, 400, 150, 0), // 12px, 400, 150%
    m500: createFontStyle(0.75, 500, 150, 0), // 12px, 500, 150%
    m600: createFontStyle(0.75, 600, 150, 0), // 12px, 600, 150%
    s400: createFontStyle(0.625, 400, 150, 0), // 10px, 400, 150%
    s500: createFontStyle(0.625, 500, 150, 0), // 10px, 500, 150%
    
    
  },
  header: {
    h1: createFontStyle(1.5, 700, 150, 0), // 24px, 700, 150%
    h2: createFontStyle(1.25, 600, 150, 0), // 20px, 600, 150%
    h3: createFontStyle(1, 600, 150, 0), // 16px, 600, 150%
  },
};

const effects = {
  dropShadow: {
    ds100: css`
      box-shadow: 0px 0px 4px 0px rgba(0 0 0 0.2);
    `,
    ds200: css`
      box-shadow: 0px 0px 4px 0px rgba(0 0 0 0.2);
    `,
    ds300: css`
      box-shadow: 0px 0px 4px 0px rgba(0 0 0 0.2);
    `,
  },
};

const media = {
  browser: '@media (display-mode: browser)',
  standalone: '@media (display-mode: standalone)',
  standaloneLike:
    '@media (display-mode: standalone), (display-mode: fullscreen), (display-mode: minimal-ui)',
};

export const theme = {
  colors,
  media,
  fonts,
  effects,
} as const;

export type ThemeType = typeof theme;
