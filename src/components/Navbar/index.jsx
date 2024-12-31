import PropTypes from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const Navbar = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link, index) => (
        <MenuLink key={index} {...link} />
      ))}
    </Styled.Container>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node.isRequired,
      href: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
};
