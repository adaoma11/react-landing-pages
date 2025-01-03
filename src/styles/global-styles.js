import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* body {
        ${({ theme }) => css`
          font-family: ${theme.fonts.family.default};
          font-size: ${theme.fonts.sizes.medium};
          background: ${theme.colors.mainBg};
        `}
    } */

    h1,h2, h3, h4, h5, h6 {
      ${({ theme }) => css`
        font-family: ${theme.fonts.family.heading};
      `}
    }
    `;
