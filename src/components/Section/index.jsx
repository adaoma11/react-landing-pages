import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Section = ({ sectionId, children, hasBg = false }) => {
  return (
    <Styled.Container id={sectionId} $hasBg={hasBg}>
      <Styled.Article>{children}</Styled.Article>
    </Styled.Container>
  );
};

Section.propTypes = {
  sectionId: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasBg: PropTypes.bool,
};
