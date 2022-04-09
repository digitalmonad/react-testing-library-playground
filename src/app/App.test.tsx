import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders list with 3 items', () => {
  render(<App />);
  const linkElement = screen.getAllByRole('listitem');
  expect(linkElement).toHaveLength(3);
});

test('Renders heading', () => {
  render(<App />);
  const headingElement = screen.getByTestId('myheading');
  expect(headingElement).toBeInTheDocument();
});
