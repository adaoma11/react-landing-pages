import { GridTwoColumns } from './index';
import mock from './mock';

const meta = {
  title: 'My Components/GridTwoColumns',
  component: GridTwoColumns,
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    textAlign: { type: 'string' },
    imgSrc: { type: 'string' },
    hasBg: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

export const Default = {
  args: { ...mock },
};
