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
    gn25: '#42CE79 25%',
    gn50: '#62B375 50%',
    gn75: '#62B375 75%',
    bl25: '#006DBB 25%',
    bl75: '#006DBB 75%',
    wt50: '#FAFAFA 50%',
    wt75: '#FAFAFA 75%',
  }
};

const fonts = {
  body: {
    large400: createFontStyle(1.125, 400, 154, -0.0225),
    large500: createFontStyle(1.125, 500, 154, -0.0225),
    medium400: createFontStyle(1, 400, 150, -0.02),
    medium500: createFontStyle(1, 500, 150, -0.02),
    small400: createFontStyle(0.875, 400, 142, -0.0175),
    small500: createFontStyle(0.875, 500, 142, -0.0175),
    s500: createFontStyle(0.875, 500, 142, -0.0175),
    small600: createFontStyle(0.875, 600, 142, -0.0175),
    xsmall400: createFontStyle(0.75, 400, 150, -0.015),
    xsmall500: createFontStyle(0.75, 500, 150, -0.015),
    xsmall600: createFontStyle(0.75, 600, 150, -0.015),
  },
  header: {
    h1: createFontStyle(1.75, 700, 130, -0.035),
    h2: createFontStyle(1.5, 700, 134, -0.03),
    h3: createFontStyle(1.25, 600, 142, -0.025),
    h4: createFontStyle(1, 500, 150, -0.02),
    h4_600: createFontStyle(1, 600, 150, -0.02),
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
