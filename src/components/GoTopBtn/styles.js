import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: 5px;
    opacity: 0.8;
  `}
`;
