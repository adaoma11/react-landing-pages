import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link with target _self', () => {
    renderTheme(<MenuLink href="#">label</MenuLink>);
    expect(screen.getByRole('link', { name: 'label' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should have the proper href', () => {
    renderTheme(<MenuLink href="http://localhost/">label</MenuLink>);
    expect(screen.getByRole('link', { name: 'label' })).toHaveAttribute(
      'href',
      'http://localhost/',
    );
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink href="http://localhost/" newTab>
        label
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'label' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    renderTheme(<MenuLink href="#">label</MenuLink>);

    expect(screen.getByRole('link', { name: 'label' })).toMatchSnapshot();
  });
});
