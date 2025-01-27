import { Logo } from './index';

const meta = {
  title: 'My Components/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;

export const Default = {
  args: {
    text: 'Company Name',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicdrhVQT13rYoFWc8L6SKF8gITrSNtTZpvQ&s',
    href: '#',
  },
};
