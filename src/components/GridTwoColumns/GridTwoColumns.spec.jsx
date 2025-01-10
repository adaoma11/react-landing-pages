import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridTwoColumns } from '.';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render the component with all its elements', () => {
    renderTheme(<GridTwoColumns {...mock} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mock.title })).toHaveStyle(
      `background-image: url(${mock.imgSrc})`,
    );
  });

  it('should have dark title and text when section has no background color', () => {
    renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.getByRole('heading', { name: mock.title })).toHaveStyle(
      `color: ${theme.colors.primary}`,
    );
    expect(screen.getByRole('paragraph')).toHaveStyle(
      `color: ${theme.colors.primary}`,
    );
  });

  it('should have white title and text when section has background color', () => {
    renderTheme(<GridTwoColumns {...mock} hasBg />);
    expect(screen.getByRole('heading', { name: mock.title })).toHaveStyle(
      `color: ${theme.colors.white}`,
    );
    expect(screen.getByRole('paragraph')).toHaveStyle(
      `color: ${theme.colors.white}`,
    );
  });

  it('should have grid template with 1fr 1fr on normal screens', () => {
    renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.getByTestId('container')).toHaveStyle(
      'grid-template-columns:1fr 1fr',
    );
  });

  it('should have grid template with 1fr on small screens', () => {
    renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.getByTestId('container')).toHaveStyleRule(
      'grid-template-columns',
      '1fr',
      {
        media: '(max-width:  991px)',
      },
    );
  });

  it('should match snapshot', () => {
    //
  });
});
