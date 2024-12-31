import { renderTheme } from '../../styles/renderTheme';
import { screen } from '@testing-library/react';
import { Navbar } from '.';

import mock from './mock';

describe('<Navbar />', () => {
  it('should render a navbar with all its children', () => {
    renderTheme(<Navbar links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should render no links', () => {
    renderTheme(<Navbar />);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('should shrink on small screens', () => {
    renderTheme(<Navbar links={mock} />);
    expect(screen.getByRole('navigation')).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: '(max-width:  768px)',
      },
    );
  });

  it('should match snapshot', () => {
    renderTheme(<Navbar links={mock} />);
    expect(screen.getByRole('navigation')).toMatchSnapshot();
  });
});
