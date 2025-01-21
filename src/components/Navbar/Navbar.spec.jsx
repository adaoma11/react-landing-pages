import { renderTheme } from '../../styles/renderTheme';
import { fireEvent, screen } from '@testing-library/react';
import { Navbar } from '.';

const mock = {
  logoData: {
    text: 'Teste',
    imgSrc: 'vite.svg',
    href: '#',
  },
  links: [
    {
      children: 'Link 1',
      href: '#',
      newTab: false,
    },
    {
      children: 'Link 2',
      href: '#',
      newTab: false,
    },
    {
      children: 'Link 3',
      href: '#',
      newTab: false,
    },
    {
      children: 'Link 4',
      href: '#',
      newTab: false,
    },
    {
      children: 'Link 5',
      href: '#',
      newTab: false,
    },
  ],
};

describe('<Navbar />', () => {
  it('should render a navbar with all its children', () => {
    renderTheme(<Navbar {...mock} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(6);
  });

  it('should shrink on small screens', () => {
    renderTheme(<Navbar {...mock} />);
    expect(screen.getByLabelText('main menu')).toHaveStyleRule(
      'flex-flow',
      'column nowrap',
      {
        media: '(max-width:  768px)',
      },
    );
  });

  it('should open and close menu on small screens', () => {
    renderTheme(<Navbar {...mock} />);

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

  it('should close the menu when clicking on one of its links on small screens', () => {
    renderTheme(<Navbar {...mock} />);

    const openBtn = screen.getByLabelText('open menu');
    const menu = screen.getByLabelText('main menu');

    fireEvent.click(openBtn);
    expect(menu).toHaveStyleRule('opacity', '1', {
      media: '(max-width:  768px)',
    });

    fireEvent.click(menu.firstChild);
    expect(menu).toHaveStyleRule('opacity', '0', {
      media: '(max-width:  768px)',
    });
  });

  it('should match snapshot', () => {
    renderTheme(<Navbar {...mock} />);
    expect(screen.getByRole('navigation')).toMatchSnapshot();
  });
});
