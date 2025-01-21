import { renderTheme } from '../../styles/renderTheme';
import { GridThreeColumns } from '.';

describe('<GridThreeColumns />', () => {
  const mockData = {
    title: 'Titulo principal',
    description: 'Uma breve descrição desta seção...',
    gridItems: [
      {
        id: 1,
        title: 'Primeiro titulo',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos ipsum minima consequatur explicabo doloribus quisquam quaerat, fugit consectetur corrupti deserunt enim magnam sunt repellat fugiat delectus perferendis tempore vel!`,
      },
      {
        id: 2,
        title: 'Segundo titulo',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos ipsum minima consequatur explicabo doloribus quisquam quaerat, fugit consectetur corrupti deserunt enim magnam sunt repellat fugiat delectus perferendis tempore vel!`,
      },
      {
        id: 3,
        title: 'Terceiro titulo',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos ipsum minima consequatur explicabo doloribus quisquam quaerat, fugit consectetur corrupti deserunt enim magnam sunt repellat fugiat delectus perferendis tempore vel!`,
      },
    ],
    titleUpperCase: true,
    hasBg: false,
  };

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridThreeColumns {...mockData} />);
    expect(container).toMatchSnapshot();
  });
});
