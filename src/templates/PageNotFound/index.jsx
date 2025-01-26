import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';

export const PageNotFound = () => {
  return (
    <Styled.Container>
      <Heading
        title="404"
        subtitle="Página não encontrada"
        align="center"
        dark={false}
      />
      <Text size="small">
        <a href="/">Voltar</a>
      </Text>
    </Styled.Container>
  );
};
