import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  width: 100%;
  gap: 20px;
  margin-top: 50px;
`;

export const GridItem = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(5deg);
  }
`;
