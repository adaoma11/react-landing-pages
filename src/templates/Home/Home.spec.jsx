import Home from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
