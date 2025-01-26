import styled, { css } from 'styled-components';
import { P as Text } from '../../components/Text/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};

    & > ${Text} > a {
      text-decoration: none;
      color: ${theme.colors.white};
    }

    & > ${Text} > a:hover {
      color: ${theme.colors.secondary};
    }
  `}
`;
