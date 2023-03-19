import React from 'react';
import {render, screen} from '@testing-library/react';
import {Header} from '../ui/Header';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TheatersIcon from '@mui/icons-material/Theaters';

test('renders header', () => {
  render(<Header />);
  const headerTitle = screen.getByText(/filmder/i);
  expect(headerTitle).toBeInTheDocument();
});

test('renders WhatshotIcon', () => {
  render(<WhatshotIcon />);
  const icon = screen.getByTestId('WhatshotIcon');
  expect(icon).toBeInTheDocument();
});

test('renders TheatersIcon', () => {
  render(<TheatersIcon />);
  const icon = screen.getByTestId('TheatersIcon');
  expect(icon).toBeInTheDocument();
});
