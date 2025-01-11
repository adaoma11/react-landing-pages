import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme, $hasBg }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    background-color: ${$hasBg ? theme.colors.primary : theme.colors.white};
  `}
`;
