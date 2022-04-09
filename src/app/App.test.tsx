import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders heading', () => {
  render(<App />);
  const headingElement = screen.getByTestId('main-heading');
  expect(headingElement).toBeInTheDocument();
});
