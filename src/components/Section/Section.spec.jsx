import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import { Section } from '.';

describe('<Section />', () => {
  it('should render component with light background', () => {
    const { container } = renderTheme(<Section>Children</Section>);
    expect(container.firstChild).toHaveStyle(
      `background-color:${theme.colors.white}`,
    );
  });

  it('should render component with dark background', () => {
    const { container } = renderTheme(<Section hasBg>Children</Section>);
    expect(container.firstChild).toHaveStyle(
      `background-color:${theme.colors.primary}`,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Section>Children</Section>);
    expect(container).toMatchSnapshot();
  });
});
