import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Logo = ({ text, imgSrc, href = '#' }) => {
  if (imgSrc) {
    return (
      <Styled.Container href={href}>
        <img src={imgSrc} alt={text} />
      </Styled.Container>
    );
  }

  return <Styled.Container href={href}>{text}</Styled.Container>;
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  href: PropTypes.string,
};
