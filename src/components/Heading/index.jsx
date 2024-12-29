import PropTypes from 'prop-types';
import * as Styled from './styles';
import { theme } from '../../styles/theme';

export const Heading = ({
  children,
  dark = true,
  as = 'h1',
  size = 'large',
}) => {
  return (
    <Styled.Title $dark={dark} as={as} size={size}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: PropTypes.oneOf(Object.keys(theme.fonts.sizes)),
};
