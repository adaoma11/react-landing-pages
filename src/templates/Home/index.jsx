import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';

function Home() {
  return (
    <>
      <Styled.Container>
        <Heading dark={false} as="h1" size="xlarge" upperCase={false}>
          Hello Storybook!
        </Heading>
        <Text dark={false}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
          dolorum ipsum dignissimos eos aliquam maxime laboriosam illum hic
          accusamus omnis at voluptas et rem aspernatur quam? Molestiae
          voluptatibus incidunt suscipit?
        </Text>
      </Styled.Container>
    </>
  );
}

export default Home;
