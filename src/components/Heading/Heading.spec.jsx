import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: /texto/i });

    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.fonts.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with light color', () => {
    renderTheme(<Heading dark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: /texto/i });
    expect(heading).toHaveStyle({ color: theme.colors.white });
  });

  Object.keys(theme.fonts.sizes).forEach((size) => {
    it(`should render with ${size} text-size`, () => {
      renderTheme(<Heading size={size}>texto</Heading>);
      const heading = screen.getByRole('heading', { name: 'texto' });
      expect(heading).toHaveStyle({ 'font-size': theme.fonts.sizes[size] });
    });
  });

  it(`should render with correct font-size on small screens ${theme.medias.small}`, () => {
    renderTheme(<Heading size="xlarge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.large, {
      media: '(max-width:  768px)',
    });
  });

  it('should render with uppercase', () => {
    renderTheme(<Heading upperCase>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render with the proper title tag', () => {
    renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    renderTheme(<Heading>texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toMatchSnapshot();
  });
});
