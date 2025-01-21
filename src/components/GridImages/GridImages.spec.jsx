import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridImages } from '.';

describe('<GridImages />', () => {
  const mockData = {
    title: 'Grid Images Example',
    description: 'Uma breve descrição sobre este album',
    gridItems: [
      {
        id: 1,
        altText: 'Imagem 1',
        imgSrc: 'https://picsum.photos/300?random=1',
      },
      {
        id: 2,
        altText: 'Imagem 2',
        imgSrc: 'https://picsum.photos/300?random=2',
      },
      {
        id: 3,
        altText: 'Imagem 3',
        imgSrc: 'https://picsum.photos/300?random=3',
      },
      {
        id: 4,
        altText: 'Imagem 4',
        imgSrc: 'https://picsum.photos/300?random=4',
      },
      {
        id: 5,
        altText: 'Imagem 5',
        imgSrc: 'https://picsum.photos/300?random=5',
      },
      {
        id: 6,
        altText: 'Imagem 6',
        imgSrc: 'https://picsum.photos/300?random=6',
      },
    ],
    hasBg: false,
    titleUpperCase: false,
  };

  it('should render component properly', () => {
    renderTheme(<GridImages {...mockData} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(mockData.gridItems.length);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridImages {...mockData} />);
    expect(container).toMatchSnapshot();
  });
});
