import { renderTheme } from '../../styles/renderTheme';
import { fireEvent, screen } from '@testing-library/react';
import { Navbar } from '.';

import { logoData, links } from './mock';

describe('<Navbar />', () => {
  it('should render a navbar with all its children', () => {
    renderTheme(<Navbar logoData={logoData} links={links} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(links.length + 1);
  });

  it('should render no links or logo', () => {
    renderTheme(<Navbar />);
    expect(screen.getByRole('navigation').children).toHaveLength(0);
  });

  it('should shrink on small screens', () => {
    renderTheme(<Navbar logoData={logoData} links={links} />);
    expect(screen.getByLabelText('main menu')).toHaveStyleRule(
      'flex-flow',
      'column nowrap',
      {
        media: '(max-width:  768px)',
      },
    );
  });

  it('should open and close menu on small screens', () => {
    renderTheme(<Navbar logoData={logoData} links={links} />);

    const openBtn = screen.getByLabelText('open menu');
    const menu = screen.getByLabelText('main menu');

    expect(menu).toHaveStyleRule('opacity', '0', {
      media: '(max-width:  768px)',
    });

    fireEvent.click(openBtn);
    expect(menu).toHaveStyleRule('opacity', '1', {
      media: '(max-width:  768px)',
    });
    expect(menu).toHaveStyleRule('height', '100vh', {
      media: '(max-width:  768px)',
    });

    const closeBtn = screen.getByLabelText('close menu');

    fireEvent.click(closeBtn);
    expect(menu).toHaveStyleRule('opacity', '0', {
      media: '(max-width:  768px)',
    });
    expect(menu).toHaveStyleRule('height', '0', {
      media: '(max-width:  768px)',
    });
  });

  it('should match snapshot', () => {
    renderTheme(<Navbar links={links} />);
    expect(screen.getByRole('navigation')).toMatchSnapshot();
  });
});
