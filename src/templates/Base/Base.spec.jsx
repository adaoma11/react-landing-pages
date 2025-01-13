import { Base } from '.';
import { renderTheme } from '../../styles/renderTheme';
import mock from './mock';

describe('<Base />', () => {
  it('should render Base Template', () => {
    renderTheme(<Base {...mock} />);
  });
});
