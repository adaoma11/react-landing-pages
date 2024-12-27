import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
    body {
        ${({ theme }) => css`
          font-family: ${theme.fonts.family.default};
          font-size: ${theme.fonts.sizes.medium};
          color: ${theme.colors.primary};
          background: ${theme.colors.mainBg};
        `}
    }`;
