import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridImages } from '.';
import mock from './mock';

describe('<GridImages />', () => {
  it('should render component properly', () => {
    renderTheme(<GridImages {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(mock.gridItems.length);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridImages {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
