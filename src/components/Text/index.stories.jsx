import { Text } from './index';

const meta = {
  title: 'My Components/Text',
  component: Text,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

export const Default = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum fugiat maiores ab est consectetur, aperiam, earum corrupti assumenda laboriosam libero esse totam, cumque saepe ut? Quod sed illum cupiditate?',
    dark: false,
    size: 'medium',
    bold: false,
    align: 'justify',
  },
};

export const Light = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum fugiat maiores ab est consectetur, aperiam, earum corrupti assumenda laboriosam libero esse totam, cumque saepe ut? Quod sed illum cupiditate?',
    dark: false,
    size: 'medium',
    bold: false,
    align: 'justify',
  },
};

export const Dark = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum fugiat maiores ab est consectetur, aperiam, earum corrupti assumenda laboriosam libero esse totam, cumque saepe ut? Quod sed illum cupiditate?',
    dark: true,
    size: 'medium',
    bold: false,
    align: 'justify',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
