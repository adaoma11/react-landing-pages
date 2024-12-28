import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `}
`;
