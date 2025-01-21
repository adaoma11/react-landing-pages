import { Navbar } from './index';

export default {
  title: 'My Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = {
  args: {
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
    logoData: {
      text: 'Teste',
      imgSrc: 'vite.svg',
      href: '#',
    },
  },
};
