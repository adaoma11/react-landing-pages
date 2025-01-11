import { Footer } from '.';

const meta = {
  title: 'My Components/Footer',
  component: Footer,
  argTypes: {
    children: { type: 'string' },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Desenvolvido por Adão Araujo',
    size: 'small',
    bold: false,
    align: 'center',
    hasBg: true,
  },
};
