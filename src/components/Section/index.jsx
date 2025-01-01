import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Section = ({ children, hasBg = false }) => {
  return (
    <Styled.Container $hasBg={hasBg}>
      <div className="wrapper">{children}</div>
    </Styled.Container>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  hasBg: PropTypes.bool,
};
