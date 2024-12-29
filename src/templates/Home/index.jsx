import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <>
      <Styled.Container>
        <Heading dark={false} as="h1" size="xlarge">
          Hello Storybook!
        </Heading>
      </Styled.Container>
    </>
  );
}

export default Home;
