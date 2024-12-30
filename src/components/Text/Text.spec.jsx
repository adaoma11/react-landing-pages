import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import { Text } from '.';
import { screen } from '@testing-library/react';

describe('<Text />', () => {
  it('should render component with default values', () => {
    renderTheme(<Text>paragrafo</Text>);

    expect(screen.getByText(/paragrafo/i)).toHaveStyle({
      color: theme.colors.primary,
      'font-family': theme.fonts.family.paragraph,
      'font-size': theme.fonts.sizes.medium,
      'font-weight': 'normal',
      'text-align': 'left',
    });
  });

  it('should render component with proper size', () => {
    renderTheme(<Text size="xlarge">paragrafo</Text>);

    expect(screen.getByText(/paragrafo/i)).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });
  });

  it('should render component with light color', () => {
    renderTheme(<Text dark={false}>paragrafo</Text>);

    expect(screen.getByText(/paragrafo/i)).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render component with proper weight', () => {
    renderTheme(<Text bold>paragrafo</Text>);

    expect(screen.getByText(/paragrafo/i)).toHaveStyle({
      'font-weight': 'bold',
    });
  });

  it('should render component with proper align', () => {
    renderTheme(<Text align="center">paragrafo</Text>);

    expect(screen.getByText(/paragrafo/i)).toHaveStyle({
      'text-align': 'center',
    });
  });

  it('match snapshot', () => {
    const { container } = renderTheme(<Text>paragrafo</Text>);

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  font-family: 'Poppins',sans-serif;
  font-size: 1.5rem;
  color: #0A1128;
  text-align: left;
  font-weight: normal;
}

<p
  class="c0"
>
  paragrafo
</p>
`);
  });
});
