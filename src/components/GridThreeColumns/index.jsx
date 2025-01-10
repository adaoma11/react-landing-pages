import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../Section';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridThreeColumns = ({
  title,
  description,
  gridItems,
  titleUpperCase,
  hasBg,
}) => {
  return (
    <Section hasBg={hasBg}>
      <Heading as="h2" upperCase={titleUpperCase} dark={!hasBg} align="center">
        {title}
      </Heading>
      <Text dark={!hasBg} align="center">
        {description}
      </Text>
      <Styled.GridContainer>
        {gridItems.map((item, index) => (
          <Styled.GridItem key={index}>
            <Heading as="h3" size="large" dark={!hasBg}>
              {item.title}
            </Heading>
            <Text dark={!hasBg} align="justify">
              {item.text}
            </Text>
          </Styled.GridItem>
        ))}
      </Styled.GridContainer>
    </Section>
  );
};

GridThreeColumns.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  titleUpperCase: PropTypes.bool,
  hasBg: PropTypes.bool,
};
