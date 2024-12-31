import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.heading};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: bold;
    color: ${theme.colors.primary};
    text-decoration: none;

    > img {
      max-height: 100px;
    }
  `}
`;
