import PropTypes from 'prop-types';
import { Navbar } from '../../components/Navbar';
import { GoTopBtn } from '../../components/GoTopBtn';
import { Footer } from '../../components/Footer';

export const Base = ({ children, links, logoData, footerText }) => {
  return (
    <>
      <Navbar links={links} logoData={logoData} />
      <main>{children}</main>
      <GoTopBtn />
      <Footer>{footerText}</Footer>
    </>
  );
};

Base.propTypes = {
  ...Navbar.propTypes.isRequired,
  children: PropTypes.node.isRequired,
  footerText: PropTypes.string.isRequired,
};
