import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridTwoColumns } from '.';
import { theme } from '../../styles/theme';

describe('<GridTwoColumns />', () => {
  const mockData = {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia iusto omnis magnam libero ea neque deserunt optio aliquam, quas esse fugit nulla, quaerat tempora repellat? Cupiditate voluptatum sint suscipit facilis.`,
    textAlign: 'justify',
    imgSrc: 'vite.svg',
    titleUpperCase: true,
  };

  it('should render the component with all its elements', () => {
    renderTheme(<GridTwoColumns {...mockData} />);
    expect(
      screen.getByRole('heading', { name: mockData.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mockData.title })).toHaveStyle(
      `background-image: url(${mockData.imgSrc})`,
    );
  });

  it('should have dark title and text when section has no background color', () => {
    renderTheme(<GridTwoColumns {...mockData} />);
    expect(screen.getByRole('heading', { name: mockData.title })).toHaveStyle(
      `color: ${theme.colors.primary}`,
    );
    expect(screen.getByRole('paragraph')).toHaveStyle(
      `color: ${theme.colors.primary}`,
    );
  });

  it('should have white title and text when section has background color', () => {
    renderTheme(<GridTwoColumns {...mockData} hasBg />);
    expect(screen.getByRole('heading', { name: mockData.title })).toHaveStyle(
      `color: ${theme.colors.white}`,
    );
    expect(screen.getByRole('paragraph')).toHaveStyle(
      `color: ${theme.colors.white}`,
    );
  });

  it('should have grid template with 1fr 1fr on normal screens', () => {
    renderTheme(<GridTwoColumns {...mockData} />);
    expect(screen.getByTestId('container')).toHaveStyle(
      'grid-template-columns:1fr 1fr',
    );
  });

  it('should have grid template with 1fr on small screens', () => {
    renderTheme(<GridTwoColumns {...mockData} />);
    expect(screen.getByTestId('container')).toHaveStyleRule(
      'grid-template-columns',
      '1fr',
      {
        media: '(max-width:  991px)',
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridTwoColumns {...mockData} />);
    expect(container).toMatchSnapshot();
  });
});
