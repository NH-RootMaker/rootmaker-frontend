import { fontFaces } from '@/styles/fonts';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontFaces}

    :root {
        font-size: 18px;

        @media (width <= 427.98px) {
        font-size: 17px;
        }

        @media (width <= 399.98px) {
        font-size: 16px;
        }

        /* additional media query for galaxy fold */
        @media (width <= 360px) {
        font-size: 14px;
        }

        @media (width <= 320px) {
        font-size: 12px;
        }
    }

    html, body {
        overscroll-behavior: none contain;
        user-select: none;
        -webkit-user-select: none;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        margin: 0;
        padding: 0;

        background-color: ${(props) => props.theme.colors.grayScale.white};
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    #root {
        width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        overflow-x: hidden;

        background-color: ${(props) => props.theme.colors.grayScale.white};
    }

    * {
        box-sizing: border-box;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    *::-webkit-scrollbar {
        display: none;
    }

    /* Safari SVG 렌더링 최적화 */
    @supports (-webkit-appearance: none) {
        svg {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
    }
`;
