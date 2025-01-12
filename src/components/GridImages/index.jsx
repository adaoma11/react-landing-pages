import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../Section';
import { Heading } from '../Heading';

export const GridImages = ({
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
        title={title}
        subtitle={description}
      />
      <Styled.GridContainer>
        {gridItems.map((img, index) => (
          <Styled.GridItem key={index}>
            <Styled.Image alt={img.altText} src={img.imgSrc} />
          </Styled.GridItem>
        ))}
      </Styled.GridContainer>
    </Section>
  );
};

GridImages.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  ),
  titleUpperCase: PropTypes.bool,
  hasBg: PropTypes.bool,
};
