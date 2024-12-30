import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    padding: 15px;
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.primary};
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      background: ${theme.colors.secondary};
      left: 25%;
      bottom: 0;
      width: 50%;
      height: 3px;
      transform: scale(0);
      transition: all 0.4s ease-in-out;
    }

    &:hover::after {
      transform: scale(1);
    }
  `}
`;
