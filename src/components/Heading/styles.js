import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, $dark, size }) => css`
    color: ${$dark ? theme.colors.primary : theme.colors.white};
    font-size: ${theme.fonts.sizes[size]};
  `}
`;
