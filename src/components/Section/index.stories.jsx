import { Section } from './index';

const meta = {
  title: 'My Components/Section',
  component: Section,
  argTypes: {
    children: { type: '' },
    hasBg: { type: 'boolean' },
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
    children: (
      <>
        <h1>Section Component</h1>
        <p>
          children: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi dolores aliquid atque quos cum facere odit nemo est quae illum
          error deleniti alias, tempora qui inventore id in nisi. Voluptates?
        </p>
        <p>
          children: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi dolores aliquid atque quos cum facere odit nemo est quae illum
          error deleniti alias, tempora qui inventore id in nisi. Voluptates?
        </p>
        <p>
          children: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi dolores aliquid atque quos cum facere odit nemo est quae illum
          error deleniti alias, tempora qui inventore id in nisi. Voluptates?
        </p>
      </>
    ),
    hasBg: true,
  },
};
