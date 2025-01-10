import { renderTheme } from '../../styles/renderTheme';
import { GridThreeColumns } from '.';
import mock from './mock';

describe('<GridThreeColumns />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridThreeColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
