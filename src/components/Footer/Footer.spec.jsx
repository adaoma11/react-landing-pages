import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render component with white bg', () => {
    renderTheme(<Footer>Teste</Footer>);
    expect(screen.getByText('Teste').parentElement).toHaveStyle(
      `background-color: ${theme.colors.white}`,
    );
  });

  it('should render component with primary color bg', () => {
    renderTheme(<Footer hasBg>Teste</Footer>);
    expect(screen.getByText('Teste').parentElement).toHaveStyle(
      `background-color: ${theme.colors.primary}`,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer>Teste</Footer>);
    expect(container).toMatchSnapshot();
  });
});
