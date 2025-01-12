import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../Section';
import { Heading } from '../Heading';

export const GridThreeColumns = ({
  title,
  description,
  gridItems,
  titleUpperCase,
  hasBg,
}) => {
  return (
    <Section hasBg={hasBg}>
      <Heading
        as="h2"
        upperCase={titleUpperCase}
        dark={!hasBg}
        align="center"
        title={title}
        subtitle={description}
      />

      <Styled.GridContainer>
        {gridItems.map((item, index) => (
          <Styled.GridItem key={index}>
            <Heading
              as="h3"
              size="large"
              dark={!hasBg}
              title={item.title}
              subtitle={item.text}
            />
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
