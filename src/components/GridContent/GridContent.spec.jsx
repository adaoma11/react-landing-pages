import { GridContent } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<GridContent />', () => {
  const mockData = {
    title: 'Grid Component Example',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minus repellendus fugiat aliquam neque corporis! Quidem, deserunt! Rem quod quo amet doloremque, excepturi doloribus, provident nesciunt blanditiis consequuntur facere quia!`,
    textAlign: 'justify',
    hasBg: false,
    titleUpperCase: true,
  };

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridContent {...mockData} />);
    expect(container).toMatchSnapshot();
  });
});
