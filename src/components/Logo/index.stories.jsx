import { Logo } from './index';

const meta = {
  title: 'My Components/Logo',
  component: Logo,
  argTypes: {
    text: { type: 'string' },
    imgSrc: { type: 'string' },
    href: { type: 'string' },
  },
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
