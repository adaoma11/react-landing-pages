import PropTypes from 'prop-types';
import { theme } from '../../styles/theme';
import * as Styled from './styles';

export const Text = ({
  children,
  size = 'medium',
  dark = true,
  bold = false,
  align = 'left',
}) => {
  return (
    <Styled.P $size={size} $dark={dark} $bold={bold} $align={align}>
      {children}
    </Styled.P>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.keys(theme.fonts.sizes)),
  dark: PropTypes.bool,
  bold: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
};
