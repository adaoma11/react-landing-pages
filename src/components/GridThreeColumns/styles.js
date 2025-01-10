import styled from 'styled-components';
import { Title as GridItemTitle } from '../Heading/styles';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  counter-reset: grid-counter;
  width: 100%;
  gap: 50px;
`;

export const GridItem = styled.div`
  margin-top: 80px;

  ${GridItemTitle} {
    position: relative;
    left: 4rem;
    margin-bottom: 30px;
  }

  ${GridItemTitle}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 5rem;
    top: -2rem;
    left: -4rem;
    transform: rotate(7deg);
  }
`;
