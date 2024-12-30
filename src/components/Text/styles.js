import styled, { css } from 'styled-components';

export const P = styled.p`
  ${({ theme, $size, $dark, $bold, $align }) => css`
    font-family: ${theme.fonts.family.paragraph};
    font-size: ${theme.fonts.sizes[$size]};
    color: ${$dark ? theme.colors.primary : theme.colors.white};
    text-align: ${$align};
    font-weight: ${$bold ? 'bold' : 'normal'};
  `}
`;
