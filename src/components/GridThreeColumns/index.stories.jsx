import { GridThreeColumns } from '.';

const meta = {
  title: 'My Components/GridThreeColumns',
  component: GridThreeColumns,
};

export default meta;

export const Default = {
  args: {
    title: 'Titulo principal',
    description: 'Uma breve descrição desta seção...',
    gridItems: [
      {
        id: 1,
        title: 'Primeiro titulo',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos ipsum minima consequatur explicabo doloribus quisquam quaerat, fugit consectetur corrupti deserunt enim magnam sunt repellat fugiat delectus perferendis tempore vel!`,
      },
      {
        id: 2,
        title: 'Segundo titulo',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos ipsum minima consequatur explicabo doloribus quisquam quaerat, fugit consectetur corrupti deserunt enim magnam sunt repellat fugiat delectus perferendis tempore vel!`,
      },
      {
        id: 3,
        title: 'Terceiro titulo',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos ipsum minima consequatur explicabo doloribus quisquam quaerat, fugit consectetur corrupti deserunt enim magnam sunt repellat fugiat delectus perferendis tempore vel!`,
      },
    ],
    titleUpperCase: true,
    hasBg: false,
  },
};
