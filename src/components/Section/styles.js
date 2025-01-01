import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme, $hasBg }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    color: ${$hasBg ? theme.colors.white : theme.colors.primary};
    background-color: ${$hasBg ? theme.colors.primary : theme.colors.white};

    .wrapper {
      max-width: 1200px;
      padding: 30px;
    }
  `}
`;
