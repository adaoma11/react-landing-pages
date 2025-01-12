import { KeyboardArrowUp } from '@styled-icons/material-outlined';
import * as Styled from './styles';

export const GoTopBtn = () => {
  return (
    <Styled.Link aria-label="Voltar ao topo" title="Voltar ao topo" href="#">
      <KeyboardArrowUp />
    </Styled.Link>
  );
};
