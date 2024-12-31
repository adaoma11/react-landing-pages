import { MenuLink } from './index';

export default {
  title: 'My Components/MenuLink',
  component: MenuLink,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Default = {
  args: {
    children: 'Meu Link',
    href: 'https://google.com/',
    newTab: true,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
