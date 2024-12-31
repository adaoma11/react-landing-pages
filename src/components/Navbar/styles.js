import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;

    @media ${theme.medias.small} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
