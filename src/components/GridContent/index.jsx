import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../Section';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridContent = ({
  sectionId,
  title,
  text,
  textAlign,
  hasBg,
  titleUpperCase,
}) => {
  return (
    <Section sectionId={sectionId} hasBg={hasBg}>
      <Styled.Container>
        <Heading
          as="h2"
          upperCase={titleUpperCase}
          align={textAlign}
          dark={!hasBg}
          title={title}
        />
        <Text align={textAlign} dark={!hasBg}>
          {text}
        </Text>
      </Styled.Container>
    </Section>
  );
};

GridContent.propTypes = {
  sectionId: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  hasBg: PropTypes.bool,
  titleUpperCase: PropTypes.bool,
};
