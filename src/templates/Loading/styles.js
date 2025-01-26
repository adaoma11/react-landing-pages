import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};

    &:after {
      content: '';
      width: 50px;
      height: 50px;
      border-top: 5px solid ${theme.colors.white};
      border-right: 5px solid ${theme.colors.white};
      border-bottom: 5px solid transparent;
      border-left: 5px solid transparent;
      border-radius: 50%;
      animation: ${rotate()} 1s linear infinite;
    }
  `}
`;
