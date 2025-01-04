import { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import { Logo } from '../Logo';

export const Navbar = ({ links, logoData }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Styled.Nav>
      {logoData && <Logo {...logoData} />}

      {links && (
        <>
          <Styled.Menu $visible={menuVisible} aria-label="main menu">
            {links.map((link, index) => (
              <li key={index} onClick={() => setMenuVisible(false)}>
                <MenuLink {...link} />
              </li>
            ))}
          </Styled.Menu>

          <Styled.Button
            aria-label={menuVisible ? 'close menu' : 'open menu'}
            onClick={() => setMenuVisible((v) => !v)}
          >
            {menuVisible ? <Styled.closeBtn /> : <Styled.openBtn />}
          </Styled.Button>
        </>
      )}
    </Styled.Nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(MenuLink.propTypes)).isRequired,
  logoData: PropTypes.shape(Logo.propTypes).isRequired,
};
