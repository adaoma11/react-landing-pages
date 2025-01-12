import styled, { css } from 'styled-components';

export const Header = styled.header`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  ${({ theme, $dark, size, $upperCase, $align }) => css`
    color: ${$dark ? theme.colors.primary : theme.colors.white};
    font-size: ${theme.fonts.sizes[size]};
    margin-bottom: 1rem;
    text-transform: ${$upperCase ? 'uppercase' : 'none'};
    ${$align ? 'text-align: ' + $align : ''};

    ${size == 'xlarge' &&
    css`
      @media ${theme.medias.small} {
        font-size: ${theme.fonts.sizes.large};
      }
    `};
  `}
`;
