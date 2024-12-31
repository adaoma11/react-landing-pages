import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Logo } from '../../components/Logo';

describe('<Logo />', () => {
  it('should have a text', () => {
    renderTheme(<Logo text="texto" href="#" />);
    expect(screen.getByRole('link').firstChild).toHaveTextContent(/texto/i);
  });

  it('should have an image', () => {
    renderTheme(<Logo text="texto" imgSrc="image.png" href="#" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should have alt equals to text', () => {
    renderTheme(<Logo text="texto" imgSrc="image.png" href="#" />);
    expect(screen.getByRole('img')).toHaveProperty('alt', 'texto');
  });

  it('should have a href', () => {
    renderTheme(<Logo text="texto" href="#" />);
    expect(screen.getByRole('link')).toHaveAttribute('href');
  });

  it('should match snapshot', () => {
    renderTheme(<Logo text="texto" imgSrc="image.png" href="#" />);
    expect(screen.getByRole('link')).toMatchSnapshot();
  });
});
