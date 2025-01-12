import PropTypes from 'prop-types';
import * as Styled from './styles';
import { theme } from '../../styles/theme';
import { Text } from '../Text';

export const Heading = ({
  title,
  subtitle,
  dark = true,
  as = 'h1',
  size = 'xlarge',
  upperCase = false,
  align,
}) => {
  return (
    <Styled.Header>
      <Styled.Title
        $dark={dark}
        as={as}
        size={size}
        $upperCase={upperCase}
        $align={align}
      >
        {title}
      </Styled.Title>

      {subtitle && (
        <Text dark={dark} align={align}>
          {subtitle}
        </Text>
      )}
    </Styled.Header>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  dark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(Object.keys(theme.fonts.sizes)),
  upperCase: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
};
