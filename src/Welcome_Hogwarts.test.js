import { render, screen } from '@testing-library/react';
import Welcome_Hogwarts from './Welcome_Hogwarts';

test('renderöi linkitystä toiselle sivulle', () => {
  render(<Welcome_Hogwarts />);
   const linkElement = screen.getByText(/ApplicationForm/i);
  expect(linkElement).toBeInTheDocument(); 
});
