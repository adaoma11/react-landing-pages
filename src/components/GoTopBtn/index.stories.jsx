import { GoTopBtn } from '.';

const meta = {
  title: 'My components/GoTopBtn',
  component: GoTopBtn,
  decorators: [
    (Story) => (
      <div style={{ height: '300vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {};
