import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `}
`;
