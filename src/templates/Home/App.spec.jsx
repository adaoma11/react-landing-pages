import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import App from '.';

describe('App', () => {
  it("should render 'hello world'", () => {
    renderTheme(<App />);

    const headingContainer = screen.getByRole('heading', {
      name: /hello/i,
    }).parentElement;

    expect(headingContainer).toHaveStyle({ background: theme.colors.mainBg });
    expect(headingContainer).toMatchSnapshot();
    expect(headingContainer).toHaveStyleRule('justify-content', 'center');
  });
});
