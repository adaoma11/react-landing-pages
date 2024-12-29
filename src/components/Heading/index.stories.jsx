import { Heading } from './index';

const meta = {
  title: 'My Components/Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Hello, Storybook',
    as: 'h1',
    dark: false,
    size: 'xlarge',
    upperCase: true,
  },
};

export const Light = {
  args: {
    children: 'Componente claro',
    as: 'h2',
    dark: false,
    size: 'large',
    upperCase: false,
  },
};

export const Dark = {
  args: {
    children: 'Componente escuro',
    as: 'h2',
    dark: true,
    size: 'large',
    upperCase: false,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
