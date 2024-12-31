import { Navbar } from './index';
import links from './mock';

export default {
  title: 'My Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = {
  args: {
    links: links,
  },
};
