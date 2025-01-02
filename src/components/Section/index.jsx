import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Section = ({ children, hasBg = false }) => {
  return (
    <Styled.Container $hasBg={hasBg}>
      <Styled.Article>{children}</Styled.Article>
    </Styled.Container>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  hasBg: PropTypes.bool,
};
