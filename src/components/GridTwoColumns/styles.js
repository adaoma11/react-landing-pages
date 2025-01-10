import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 30px;

    @media ${theme.medias.medium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Image = styled.div`
  ${({ $imgSrc }) => css`
    display: block;
    min-height: 500px;
    background-image: url(${$imgSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
  `}
`;
