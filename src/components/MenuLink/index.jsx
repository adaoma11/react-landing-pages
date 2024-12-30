import PropTypes from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, href, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <Styled.Link href={href} target={target}>
      {children}
    </Styled.Link>
  );
};

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
};
