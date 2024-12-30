import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, $dark, size, $upperCase }) => css`
    color: ${$dark ? theme.colors.primary : theme.colors.white};

    font-size: ${theme.fonts.sizes[size]};

    ${size == 'xlarge' &&
    css`
      @media ${theme.medias.small} {
        font-size: ${theme.fonts.sizes.large};
      }
    `}

    text-transform: ${$upperCase ? 'uppercase' : 'none'}
  `}
`;
