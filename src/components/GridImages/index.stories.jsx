import { GridImages } from '.';

const meta = {
  title: 'My Components/GridImages',
  component: GridImages,
};

export default meta;

export const Default = {
  args: {
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
  },
};
