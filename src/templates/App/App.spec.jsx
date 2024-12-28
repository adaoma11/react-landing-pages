import { render, screen } from '@testing-library/react';
import App from '.';

describe('App', () => {
  it("should render 'hello world'", () => {
    render(<App />);

    screen.debug();

    expect(
      screen.getByRole('heading', { name: /hello world/i }),
    ).toBeInTheDocument();
  });
});
