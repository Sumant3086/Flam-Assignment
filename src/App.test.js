import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bottom Sheet Demo heading', () => {
  render(<App />);
  expect(screen.getByText('Bottom Sheet Demo')).toBeInTheDocument();
});

test('renders button options', () => {
  render(<App />);
  expect(screen.getByText('Close')).toBeInTheDocument();
  expect(screen.getByText('Half')).toBeInTheDocument();
  expect(screen.getByText('Full')).toBeInTheDocument();
});
