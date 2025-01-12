import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GoTopBtn } from '.';

describe('<GoTopBtn />', () => {
  it("should render GoTopBtn with href='#'", () => {
    renderTheme(<GoTopBtn />);
    expect(screen.getByLabelText('Voltar ao topo')).toHaveAttribute(
      'href',
      '#',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GoTopBtn />);
    expect(container).toMatchSnapshot();
  });
});
