import PropTypes from 'prop-types';
import * as Styled from './styles';
import { theme } from '../../styles/theme';

export const Heading = ({
  children,
  dark = true,
  as = 'h1',
  size = 'xlarge',
  upperCase = false,
}) => {
  return (
    <Styled.Title $dark={dark} as={as} size={size} $upperCase={upperCase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(Object.keys(theme.fonts.sizes)),
  upperCase: PropTypes.bool,
};
