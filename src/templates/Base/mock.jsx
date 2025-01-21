// components
import { GridContent } from '../../components/GridContent';
import { GridImages } from '../../components/GridImages';
import { GridThreeColumns } from '../../components/GridThreeColumns';
import { GridTwoColumns } from '../../components/GridTwoColumns';

const mock = {
  logoData: {
    text: 'Company Name',
    imgSrc: 'vite.svg',
    href: '#',
  },
  links: [
    {
      children: 'Link 1',
      href: '#',
      newTab: false,
    },
    {
      children: 'Link 2',
      href: '#',
      newTab: false,
    },
    {
      children: 'Link 3',
      href: '#',
      newTab: false,
    },
    {
      children: 'Link 4',
      href: '#',
      newTab: false,
    },
    {
      children: 'Link 5',
      href: '#',
      newTab: false,
    },
  ],
  GridContent: {
    title: 'Grid Component Example',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minus repellendus fugiat aliquam neque corporis! Quidem, deserunt! Rem quod quo amet doloremque, excepturi doloribus, provident nesciunt blanditiis consequuntur facere quia!`,
    textAlign: 'justify',
    titleUpperCase: true,
  },
  GridTwoColumns: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia iusto omnis magnam libero ea neque deserunt optio aliquam, quas esse fugit nulla, quaerat tempora repellat? Cupiditate voluptatum sint suscipit facilis.`,
    textAlign: 'justify',
    imgSrc: 'vite.svg',
    titleUpperCase: true,
  },
  GridThreeColumns: {
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
  },
  GridImages: {
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
  footerText: 'Powered by Strapi',
};

export default {
  logoData: mock.logoData,
  links: mock.links,
  footerText: mock.footerText,
  children: (
    <>
      <GridTwoColumns {...mock.GridTwoColumns} hasBg />
      <GridContent {...mock.GridContent} />
      <GridThreeColumns {...mock.GridThreeColumns} hasBg />
      <GridImages {...mock.GridImages} />
    </>
  ),
};
