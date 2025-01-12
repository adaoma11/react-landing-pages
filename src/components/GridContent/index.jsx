import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../Section';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridContent = ({
  title,
  text,
  textAlign,
  hasBg,
  titleUpperCase,
}) => {
  return (
    <Section hasBg={hasBg}>
      <Styled.Container>
        <Heading
          as="h2"
          upperCase={titleUpperCase}
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
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  hasBg: PropTypes.bool,
  titleUpperCase: PropTypes.bool,
};
