import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';

export const Footer = ({ children, size, bold, align, hasBg }) => {
  return (
    <Styled.Footer $hasBg={hasBg}>
      <Text size={size} dark={!hasBg} bold={bold} align={align}>
        {children}
      </Text>
    </Styled.Footer>
  );
};

Footer.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  bold: PropTypes.bool,
  align: PropTypes.string,
  hasBg: PropTypes.bool,
};
