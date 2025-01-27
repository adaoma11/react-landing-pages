import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../Section';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridThreeColumns = ({
  sectionId,
  title,
  description,
  gridItems,
  titleUpperCase,
  hasBg,
}) => {
  return (
    <Section sectionId={sectionId} hasBg={hasBg}>
      <Heading
        as="h2"
        upperCase={titleUpperCase}
        dark={!hasBg}
        align="center"
        title={title}
        subtitle={description}
      />

      <Styled.GridContainer>
        {gridItems.map((item) => (
          <Styled.GridItem key={item.id}>
            <Heading as="h3" size="large" dark={!hasBg} title={item.title} />
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
  sectionId: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  titleUpperCase: PropTypes.bool,
  hasBg: PropTypes.bool,
};
