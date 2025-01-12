import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Section } from '../Section';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridTwoColumns = ({
  title,
  text,
  textAlign,
  imgSrc,
  hasBg,
  titleUpperCase,
}) => {
  return (
    <Section hasBg={hasBg}>
      <Styled.Container data-testid="container">
        <Styled.TextContainer>
          <Heading
            as="h2"
            upperCase={titleUpperCase}
            dark={!hasBg}
            title={title}
          />

          <Text align={textAlign} dark={!hasBg}>
            {text}
          </Text>
        </Styled.TextContainer>

        <Styled.Image $imgSrc={imgSrc} role="img" aria-label={title} />
      </Styled.Container>
    </Section>
  );
};

GridTwoColumns.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  hasBg: PropTypes.bool,
  titleUpperCase: PropTypes.bool,
};
