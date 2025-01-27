import { GridTwoColumns } from './index';

const meta = {
  title: 'My Components/GridTwoColumns',
  component: GridTwoColumns,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

export const Default = {
  args: {
    title: 'Grid Two Columns',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab alias consectetur expedita eaque, beatae nobis odio impedit quibusdam molestias provident veniam voluptatum porro vero pariatur ducimus quis consequatur sit! Voluptas.',
    textAlign: 'justify',
    imgSrc: 'vite.svg',
    hasBg: true,
    sectionId: 'grid-two-columns',
    titleUpperCase: true,
  },
};
