import styled, { css } from 'styled-components';
import {
  Menu as OpenSvg,
  Close as CloseSvg,
} from '@styled-icons/material-outlined';

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    background-color: ${theme.colors.white};
    z-index: 10;
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 0;

    @media (max-width: 1230px) {
      padding: 10px 20px;
    }

    @media ${theme.medias.small} {
      min-height: 100px;
      align-items: center;
      justify-content: center;

      > button {
        position: absolute;
        top: 20px;
        right: 30px;
      }

      > a {
        position: absolute;
        top: 30px;
        left: 30px;
      }
    }
  `}
`;

export const Menu = styled.menu`
  ${({ theme, $visible }) => css`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    transition: ${$visible
      ? 'height 0.8s linear, opacity 1s linear 0.4s'
      : 'height 0.5s linear'};

    @media ${theme.medias.small} {
      visibility: ${$visible ? 'visible' : 'hidden'};
      opacity: ${$visible ? '1' : '0'};
      height: ${$visible ? '100vh' : '0'};
      flex-flow: column nowrap;
      justify-content: center;
      text-align: center;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: none;
    margin: 10px 10px 0 0;
    border: none;
    background: none;
    cursor: pointer;

    @media ${theme.medias.small} {
      display: block;
    }
  `}
`;

export const openBtn = styled(OpenSvg)`
  ${({ theme }) => css`
    width: 35px;
    height: 35px;
    color: ${theme.colors.primary};
  `};
`;

export const closeBtn = styled(CloseSvg)`
  ${({ theme }) => css`
    width: 35px;
    height: 35px;
    color: ${theme.colors.primary};
  `};
`;
