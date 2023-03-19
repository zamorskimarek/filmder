import React from 'react';
import {render, screen} from '@testing-library/react';
import {Button} from '../ui/Button';

describe('Button', () => {
  it('renders the accept variant correctly', () => {
    render(<Button variant="accept" />);
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('renders the reject variant correctly', () => {
    render(<Button variant="reject" />);
    expect(screen.getByText('Reject')).toBeInTheDocument();
  });
});
