import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.heading};
    font-size: ${theme.fonts.sizes.large};
    font-weight: bold;
    color: ${theme.colors.primary};
    text-decoration: none;

    > img {
      min-height: 40px;
      max-height: 50px;
      max-width: 150px;
      min-width: 40px;
    }
  `}
`;
