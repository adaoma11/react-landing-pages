import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render component', () => {
    renderTheme(<Footer>Teste</Footer>);
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer>Teste</Footer>);
    expect(container).toMatchSnapshot();
  });
});
