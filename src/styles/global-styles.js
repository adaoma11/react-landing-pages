import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    h1,h2, h3, h4, h5, h6 {
      ${({ theme }) => css`
        font-family: ${theme.fonts.family.heading};
      `}
    }
    `;
