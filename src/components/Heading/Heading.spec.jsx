import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render the heading with default values', () => {
    renderTheme(<Heading title="titulo" subtitle="subtitulo" />);

    const title = screen.getByRole('heading', { name: /titulo/i });
    const subtitle = screen.getByText('subtitulo');

    expect(title).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.fonts.sizes.xlarge,
      'text-transform': 'none',
    });

    expect(subtitle).toBeInTheDocument();
  });

  it('should render with light color', () => {
    renderTheme(<Heading dark={false} title="texto" />);
    const title = screen.getByRole('heading', { name: /texto/i });
    expect(title).toHaveStyle({ color: theme.colors.white });
  });

  Object.keys(theme.fonts.sizes).forEach((size) => {
    it(`should render with ${size} text-size`, () => {
      renderTheme(<Heading size={size} title="texto" />);
      const title = screen.getByRole('heading', { name: 'texto' });
      expect(title).toHaveStyle({ 'font-size': theme.fonts.sizes[size] });
    });
  });

  it(`should render with correct font-size on small screens ${theme.medias.small}`, () => {
    renderTheme(<Heading size="xlarge" title="texto" />);
    const title = screen.getByRole('heading', { name: 'texto' });
    expect(title).toHaveStyleRule('font-size', theme.fonts.sizes.large, {
      media: '(max-width:  768px)',
    });
  });

  it('should render with uppercase', () => {
    renderTheme(<Heading upperCase title="texto" />);
    const title = screen.getByRole('heading', { name: 'texto' });
    expect(title).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render with the proper title tag', () => {
    renderTheme(<Heading as="h6" title="texto" />);
    const title = screen.getByRole('heading', { name: 'texto' });
    expect(title.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading title="Texto" />);
    expect(container).toMatchSnapshot();
  });
});
