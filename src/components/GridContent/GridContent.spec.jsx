import { GridContent } from '.';
import mock from './mock';
import { renderTheme } from '../../styles/renderTheme';

describe('<GridContent />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
